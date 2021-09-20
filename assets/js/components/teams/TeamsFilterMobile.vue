<template>
    <div class="teams-filter">
        <div class="filter-icon" @click="clear">
            <i class="fab fa-teamspeak"></i>
        </div>
        <multiselect v-model="selected"
                     label="name"
                     track-by="name"
                     class="multiselect-match-filter"
                     no-options="Команд не найдено"
                     :placeholder="description"
                     open-direction="bottom"
                     style="width: 100%"
                     :options="teams"
                     :multiple="false"
                     :searchable="true"
                     :loading="load"
                     :limit-text="limitText"
                     :max-height="'4vw'"
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
        name: "TeamsFilterMobile",
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
		margin-right: .5vw;
    }
    .filter-icon{
        width: 17vw;
        cursor: pointer;
        height: 12vw;
        background: rgb(255, 183, 73);
        background: linear-gradient(
                90deg
                , rgba(255, 183, 73, 1) 0%, rgba(254, 121, 36, 1) 100%);
        color: white;
        font-size: 6.2vw;
        display: flex;
        justify-content: center;
        align-items: center;
        background-clip: content-box;
    }

    .multiselect-match-filter::v-deep .multiselect__tags {
        display: flex;
        align-items: center;
        height: 100%;
        padding: .4vw;
        border: 1px solid #e8e8e8;
        background: #fff;
        font-size: 4vw;
        width: 100%;
    }

    .multiselect-match-filter::v-deep .multiselect {
        box-sizing: content-box;
        display: block;
        position: relative;
        width: 100%;
        text-align: left;
        color: #35495e;
    }
</style>