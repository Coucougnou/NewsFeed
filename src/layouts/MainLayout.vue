<template>
  <q-layout view="lHh Lpr lFf" >
    <q-header class="bg-dark" >
      <q-parallax height="150" >
      <template v-slot:media>
        <video poster="https://images.unsplash.com/photo-1557428894-56bcc97113fe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1472&q=80" autoplay loop muted>
          <source type="video/webm" src="https://player.vimeo.com/external/573496156.hd.mp4?s=b85e7cbb11135c31155c61c59da5980ee4a58afb&profile_id=170">
          <source type="video/mp4" src="https://player.vimeo.com/external/573496156.hd.mp4?s=b85e7cbb11135c31155c61c59da5980ee4a58afb&profile_id=170">
        </video>
      </template>
      <q-toolbar>
        <q-toolbar-title class="text-center" style="font-family:Montserrat;font-size:20px;">
        Bienvenue sur <strong> NewsFeed </strong> <br>le site de l'actualité <br>en France et à l'etranger
        </q-toolbar-title>
        <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
      </q-toolbar>
      </q-parallax>
    </q-header>

    <q-drawer
        v-model="drawer"
        show-if-above
        :width="200"
        :breakpoint="400"
      >
        <q-scroll-area style="font-family:Montserrat;height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">
          <div class="text-center" style="padding-top:10px;"><strong>Catégories d'actualité :</strong></div>
          <q-list padding>

            <q-item clickable v-ripple to="/">
              <q-item-section avatar>
                <q-icon name="eva-home" />
              </q-item-section>

              <q-item-section>
                Accueil
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple to="/business">
              <q-item-section avatar>
                <q-icon name="eva-activity-outline" />
              </q-item-section>

              <q-item-section>
                Business
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple to="/divertissement">
              <q-item-section avatar>
                <q-icon name="eva-film-outline" />
              </q-item-section>

              <q-item-section>
                Divertissement
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple to="/sante">
              <q-item-section avatar>
                <q-icon name="eva-folder-add-outline" />
              </q-item-section>

              <q-item-section>
                Santé
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple to="/science">
              <q-item-section avatar>
                <q-icon name="eva-bulb-outline" />
              </q-item-section>

              <q-item-section>
                Science
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple to="/sports">
              <q-item-section avatar>
                <q-icon name="eva-globe-outline" />
              </q-item-section>

              <q-item-section>
                Sports
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple to="/technologie">
              <q-item-section avatar>
                <q-icon name="eva-layers-outline" />
              </q-item-section>

              <q-item-section>
                Technologie
              </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>
        
        <q-img class="absolute-top" src="https://images.unsplash.com/photo-1585829365295-ab7cd400c167?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80" style="height: 150px">
          <div class="absolute-bottom bg-transparent">
            <q-avatar size="56px" class="q-mb-sm">
              <img src="https://images.unsplash.com/photo-1526470608268-f674ce90ebd4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1374&q=80">
            </q-avatar>
            <div class="text-weight-bold">NEWSFEED l'appli de l'actu</div>
            <div>@someonenooneeasu</div>
          </div>
        </q-img>
      </q-drawer>
      <q-footer elevated class="bg-dark">
        <q-toolbar>
          <q-toolbar-title class="text-center" style="font-family:Montserrat;font-size:12px;">Tout droits reservés - Jonathan Ngomegni - 2021 </q-toolbar-title>
        </q-toolbar>
      </q-footer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>

</template>

<script>

import { ref } from 'vue'

export default {
  setup () {
    return {
      drawer: ref(false)
    }
  }
}


</script>
