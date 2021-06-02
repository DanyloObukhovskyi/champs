<template>
    <div class="vtb-wrapper" v-if="recursiveBracket">
        <bracket-node
                :bracket-node="recursiveBracket"
                @onSelectedPlayer="highlightPlayer"
                @onDeselectedPlayer="unhighlightPlayer"
                :highlighted-player-id="highlightedPlayerId"
        >
            <template #tournament-name="{ bracketNode }">
                <slot name="tournament-name" :bracketNode="bracketNode" />
            </template>
            <template #player-extension-top="{ match }">
                <slot name="player-extension-top" :match="match" />
            </template>
            <template #player="{ player }">
                <div class="player">
                    <slot name="player" :player="player" />
                </div>
            </template>
        </bracket-node>
        <bracket-winner :winner="getTournamentWinner">
            <template #winner="{ player }">
                <slot name="winner" :player="player" />
            </template>
        </bracket-winner>
    </div>
</template>

<script>
    import BracketNode from "./BracketNode";
    import recursiveBracket from "./recursiveBracket";
    import BracketWinner from "./BracketWinner";

    export default {
        name: "bracket",
        provide: ["rounds", "flatTree"],
        components: {
            BracketWinner,
            "bracket-node": BracketNode,
        },
        props: ["rounds", "flatTree"],
        data() {
            return {
                highlightedPlayerId: null,
            };
        },
        computed: {
            recursiveBracket() {
                if (this.flatTree) {
                    return recursiveBracket.transformFlatTree(this.flatTree);
                }
                return recursiveBracket.transform(this.rounds);
            },
            getTournamentWinner() {
                const {player1, player2} = this.recursiveBracket;


                return player1.score > player2.score ? player1: player2;
            }
        },
        methods: {
            highlightPlayer(id) {
                this.highlightedPlayerId = id;
            },
            unhighlightPlayer() {
                this.highlightedPlayerId = null;
            },
        },
    };
</script>

<style>
    .vtb-wrapper {
        display: flex;
    }
</style>