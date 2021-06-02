<template>
    <div class="vtb-item-players" :class="checkParentMatches">
        <div class="player-extension-top">
            <slot name="tournament-name" :bracketNode="bracketNode"/>
        </div>
        <div class="player-extension-top">
            <slot name="player-extension-top" :match="bracketNode.match"/>
        </div>
        <div>
            <div :class="['vtb-player', 'vtb-player1', getPlayerClass(bracketNode.player1)]"
                 @mouseover="highlightPlayer(bracketNode.player1.id)"
                 @mouseleave="unhighlightPlayer">
                <slot :player="bracketNode.player1" :match="bracketNode.match" name="player"/>
            </div>

            <div :class="['vtb-player', 'vtb-player2', getPlayerClass(bracketNode.player2)]"
                 @mouseover="highlightPlayer(bracketNode.player2.id)"
                 @mouseleave="unhighlightPlayer">
                <slot :player="bracketNode.player2" :match="bracketNode.match" name="player"/>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "game-players",
        inject: ['flatTree'],
        props: ["bracketNode", "highlightedPlayerId"],
        computed: {
            matchProperties() {
                return Object.assign({}, this.bracketNode, {games: undefined, hasParent: undefined});
            },
            checkParentMatches() {
                let className = '';
                if (this.bracketNode.games.length === 1) {
                    className = ' child-single ';
                }
                return className;
            }
        },
        methods: {
            getPlayerClass(player) {
                if (player.winner === null || player.winner === undefined) {
                    return "";
                }
                let className = player.winner ? "winner" : "defeated";
                if (this.highlightedPlayerId === player.id) {
                    className += " highlight";
                }
                if (this.bracketNode.games.length === 1) {
                    const parentGame = this.bracketNode.games[0];

                    if (parentGame.player1.playerId === player.playerId ||
                        parentGame.player2.playerId === player.playerId) {

                        className += ' child-single-draw '
                    }
                }

                return className;
            },
            highlightPlayer(playerId) {
                this.$emit("onSelectedPlayer", playerId);
            },
            unhighlightPlayer() {
                this.$emit("onDeselectedPlayer");
            },
        },
        mounted() {

        }
    };
</script>