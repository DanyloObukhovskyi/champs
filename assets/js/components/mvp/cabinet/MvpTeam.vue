<template>
    <div class="card w-50 mr-2 border-radius-0">
        <div class="card-body" v-if="team === undefined">
            <h5 class="card-title d-flex justify-content-between">
                {{ title }}
                <span class="badge badge-warning border-radius-0">{{ type }}</span>
            </h5>
            <p class="card-text">
                {{ description }}
            </p>
            <a class="btn-orange text-light p-2 pointer"
               data-toggle="modal"
               @click="$emit('setCapacity', capacity)"
               data-target="#makeComandModal">
                Создать команду {{ type }}
            </a>
        </div>
        <div class="card-body" v-if="team !== undefined">
            <h5 class="card-title d-flex justify-content-between">
                {{ team.name }}
                <span class="badge badge-warning border-radius-0">
                    {{ type }}
                </span>
            </h5>
            <p class="card-text"> {{ team.members.length }} учасников</p>
            <a class="btn-orange text-light p-2 pointer" :href="http.getTeamLink(team.id)">
                Посмотреть
            </a>
        </div>
    </div>
</template>

<script>

    export default {
        name: "MvpTeam",
        inject: [
            'http'
        ],
        props: [
            'teams',
            'title',
            'description',
            'type',
            'capacity'
        ],
        computed: {
            team(){
                return this.teams.find(team => Number(team.capacity) === Number(this.capacity));
            }
        }
    }
</script>