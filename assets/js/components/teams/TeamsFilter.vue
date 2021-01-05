<template>
    <div class="teams-filter">
        <div class="filter-icon" @click="clear">
            <i class="fab fa-teamspeak"></i>
        </div>
        <multiselect v-model="selected"
                     label="name"
                     track-by="name"
                     no-options="Команд не найдено"
                     :placeholder="description"
                     open-direction="bottom"
                     :options="teams"
                     :multiple="false"
                     :searchable="true"
                     :loading="load"
                     :limit-text="limitText"
                     :max-height="600"
                     :show-no-results="false"
                     :hide-selected="true"
                     @select="onSelect"
                     @search-change="asyncFind">
            <template slot="singleLabel" slot-scope="{option}">
                <img class="option-image" :src="option.logo" alt="No Man’s Sky">
                <span class="team-name">
                   {{ option.name }}
                </span>
            </template>
            <template slot="option" slot-scope="{option}">
                <img class="option-image" :src="option.logo" alt="No Man’s Sky">
                <span class="team-name">
                   {{ option.name }}
                </span>
            </template>
        </multiselect>
    </div>
</template>

<script>
    import  '../../../css/vue-multiselect.css'
    import Multiselect from 'vue-multiselect'
    import teamService from "../../services/TeamService";

    export default {
        name: "TeamsFilter",
        components: {
            Multiselect
        },
        props: [
            'description'
        ],
        data() {
            return {
                selected: null,
                teams: [],
                load: false
            }
        },
        methods: {
            limitText(count) {
                return `and ${count} other countries`
            },
            asyncFind(query) {
                this.load = true

                teamService.searchByName(query)
                    .then(data => {
                        this.teams = data
                        this.load = false
                    })
            },
            onSelect(selected) {
                this.$emit('setTeam', selected)
            },
            clear(){
                this.selected = null;
                this.$emit('setTeam', null)
            }
        }
    }
</script>

<style scoped>
    .multiselect img.option-image{
        width: 2vw;
    }
    .multiselect .team-name{
        font-size: 1vw;
    }
    .teams-filter{
        display: flex;
        margin-top: 1vw;
        margin-left: -.5vw;
        margin-left: .4vw;
        margin-right: -.5vw;
    }
    .filter-icon{
        width: 4vw;
        cursor: pointer;
        height: 3vw;
        background: rgb(255, 183, 73);
        background: linear-gradient(90deg, rgba(255, 183, 73, 1) 0%, rgba(254, 121, 36, 1) 100%);
        color: white;
        font-size: 1.2vw;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>