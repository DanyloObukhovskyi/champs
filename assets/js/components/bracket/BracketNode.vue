<template>
    <div class="vtb-item" v-if="playersArePresent">
        <div :class="getBracketNodeClass(bracketNode)">
            <game-players
                    :parent-matches-count="bracketNode.games.length"
                    :bracket-node="bracketNode"
                    :highlighted-player-id="highlightedPlayerId"
                    @onSelectedPlayer="highlightPlayer"
                    @onDeselectedPlayer="unhighlightPlayer"
            >
                <template #tournament-name="{ bracketNode }">
                    <slot name="tournament-name" :bracketNode="bracketNode" />
                </template>
                <template #player-extension-top="{ match }">
                    <slot name="player-extension-top" :match="match"/>
                </template>
                <template #player="{ player }">
                    <slot name="player" :player="player"/>
                </template>
            </game-players>
        </div>
        <div v-if="bracketNode.games[0] || bracketNode.games[1]" class="vtb-item-children">
            <div class="vtb-item-child" v-if="bracketNode.games[0]">
                <bracket-node
                        :bracket-node="bracketNode.games[0]"
                        :highlighted-player-id="highlightedPlayerId"
                        @onSelectedPlayer="highlightPlayer"
                        @onDeselectedPlayer="unhighlightPlayer"
                >
                    <template #tournament-name="{ bracketNode }">
                        <slot name="tournament-name" :bracketNode="bracketNode" />
                    </template>
                    <template #player-extension-top="{ match }">
                        <slot name="player-extension-top" :match="match"/>
                    </template>
                    <template #player="{ player }">
                        <slot name="player" :player="player"/>
                    </template>
                </bracket-node>
            </div>
            <div class="vtb-item-child" v-if="bracketNode.games[1]">
                <bracket-node
                        :bracket-node="bracketNode.games[1]"
                        :highlighted-player-id="highlightedPlayerId"
                        @onSelectedPlayer="highlightPlayer"
                        @onDeselectedPlayer="unhighlightPlayer"
                >
                    <template #tournament-name="{ bracketNode }">
                        <slot name="tournament-name" :bracketNode="bracketNode" />
                    </template>
                    <template #player-extension-top="{ match }">
                        <slot name="player-extension-top" :match="match"/>
                    </template>
                    <template #player="{ player }">
                        <slot name="player" :player="player"/>
                    </template>
                </bracket-node>
            </div>
        </div>
    </div>
</template>

<script>
    import GamePlayers from "./GamePlayers";

    export default {
        name: "bracket-node",
        components: {GamePlayers},
        props: ["bracketNode", "highlightedPlayerId"],
        computed: {
            playersArePresent() {
                return this.bracketNode.player1 && this.bracketNode.player1;
            },
        },
        methods: {
            getBracketNodeClass(bracketNode) {
                if (bracketNode.games[0] || bracketNode.games[1]) {
                    return "vtb-item-parent";
                }
                if (bracketNode.hasParent) {
                    return "vtb-item-child";
                }
                return "";
            },
            getPlayerClass(player) {
                if (player.winner === null || player.winner === undefined) {
                    return "";
                }
                let clazz = player.winner ? "winner" : "defeated";
                if (this.highlightedPlayerId === player.id) {
                    clazz += " highlight";
                }
                return clazz;
            },
            highlightPlayer(playerId) {
                this.$emit("onSelectedPlayer", playerId);
            },
            unhighlightPlayer() {
                this.$emit("onDeselectedPlayer");
            },
            setParentPosition() {
                const vtbItems = document.querySelectorAll('.vtb-item-parent');

                for (let element of vtbItems) {
                    const children = element.nextElementSibling.childNodes;

                    const vtbItemsChildren = [];

                    for (let child of children) {
                        if (child.nodeType === 1 && child.classList.contains('vtb-item-child')) {
                            vtbItemsChildren.push(child);
                        }
                    }
                    if (vtbItemsChildren.length === 2) {
                        const parentMatchRow = element.querySelector('.vtb-item-players');
                        const marginTop = vtbItemsChildren[0].offsetHeight - vtbItemsChildren[1].offsetHeight;

                        parentMatchRow.style = `margin-top: ${marginTop}px`
                    }
                }
            },
            setTournamentsNamesPosition() {
                $('.tournament-name').each(function () {
                    $(this).css('top', $('.vtb-wrapper').first().offset().top - $(this).offset().top - 40)
                })
            }
        },
        mounted() {
            this.setParentPosition();
        }
    };
</script>

<style>
    .vtb-item {
        display: flex;
        flex-direction: row-reverse;
    }

    .vtb-item p {
        padding: 20px;
        margin: 0;
        background-color: #999999;
    }

    .vtb-item-parent {
        position: relative;
        margin-left: 50px;
        display: flex;
        align-items: center;
    }

    .vtb-item-players {
        flex-direction: column;
        margin: 0;
        color: white;
        width: 200px;
    }

    .vtb-item-players .vtb-player.vtb-player1 {
        margin-bottom: 2px;
    }

    .vtb-item-players .vtb-player .player {
        height: 33px;
        margin-bottom: 2px;
        margin-right: 2px;
    }

    .vtb-item-parent .vtb-player .player:after {
        position: absolute;
        content: "";
        width: 28px;
        height: 3px;
        left: 0;
        top: 50%;
        background-color: #ff6d1d;
        transform: translateX(-100%);
    }

    .vtb-item-parent .child-single .vtb-player:not(.child-single-draw) .player:after {
        position: absolute;
        content: "";
        width: 0px;
        height: 0px;
    }

    .vtb-item-parent .child-single .vtb-player.vtb-player1.child-single-draw .player:before {
        position: absolute;
        content: "";
        width: 3px;
        height: 19px;
        left: -25px;
        top: 50%;
        background-color: #ff6d1d;
        transform: translateX(-100%);
    }

    .vtb-item-parent .child-single .vtb-player.vtb-player2.child-single-draw .player:before {
        position: absolute;
        content: "";
        width: 3px;
        height: 18px;
        left: -25px;
        top: 0;
        background-color: #ff6d1d;
        transform: translateX(-100%);
    }

    .vtb-item-players .defeated.after-none :after {
        position: absolute;
        content: "";
        width: 0px;
        height: 0px;
    }

    .vtb-item-children {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .vtb-item-child {
        display: flex;
        justify-content: flex-end;
        margin-top: 10px;
        margin-bottom: 10px;
        position: relative;
    }

    .vtb-item-child:before {
        content: "";
        position: absolute;
        background-color: #ff6d1d;
        right: 0;
        top: 50%;
        transform: translateX(100%);
        width: 25px;
        height: 3px;
    }

    .vtb-item-child:after {
        content: "";
        position: absolute;
        background-color: #ff6d1d;
        right: -25px;
        height: calc(50% - 7px);
        width: 3px;
        top: 50%;
    }

    .vtb-item-child:last-child:after {
        transform: translateY(-100%);
    }

    .vtb-item-child:only-child:after {
        display: none;
    }

    .vtb-item-players .player-extension-top {
        position: absolute;
        top: -22px;
    }
</style>