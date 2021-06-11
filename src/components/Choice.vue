<template>
  <div class="AmStramGram">
    <div class="container">
      <h1 class="h1">AmStramGram</h1>
      <div class="">
        <p class="result" v-if="choices != []">{{ result }}</p>
      </div>
      <div class="row">
        <div class="col-4">
          <h2>Entrez vos différents choix</h2>
          <p>Vous pouvez ajouter autant de choix que vous voulez</p>
          <div v-show="title != []" visibility="hide" class="mb-3">
            <label for="title">Entrez un titre pour votre liste</label>
            <input
              type="text"
              class="form-control"
              id="title"
              v-on:keyup.13="addTitle(title)"
              v-model="title"
              aria-describedby="option"
              placeholder="Tapez un titre"
            />
          </div>
          <button
            v-if="title != []"
            visibility="hide"
            type="submit"
            v-on:click="addTitle(title)"
            class="btn button"
          >
            Envoyer
          </button>
          <hr />
          <div class="mb-3">
            <input
              type="text"
              class="form-control"
              id="option"
              v-on:keyup.13="add(option)"
              v-model="option"
              aria-describedby="option"
              placeholder="Tapez un de vos choix"
            />
          </div>
          <button v-on:click="add(option)" type="submit" class="btn button">
            ajouter
          </button>
        </div>
        <div class="offset-4 col-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">
                Liste de :
                <span v-for="title in titleList" :key="title">{{ title }}</span>
              </h5>
              <p class="card-text">{{ option }}</p>
              <ul v-if="options != []">
                <li v-for="option in options" :key="option">{{ option }}</li>
              </ul>
              <div>
                <router-link to="/wheel">
                  <button type="submit" class="btn button btn-card">
                    Envoyer
                  </button>
                </router-link>
              </div>
              <div v-show="options.length > 0">
                <button
                  @click="del()"
                  type="submit"
                  class="btn button btn-card-1"
                >
                  Effacer
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Choice",
  props: {
    title: String,
  },
  data() {
    return {
      option: "",
      result: "",
      show: true,
    };
  },
  computed: {
    ...mapState(["options", "titleList"]),
  },
  methods: {
    addTitle(title) {
      if (title != "") {
        this.titleList.push(title);
        this.title = "";
      }
    },
    hide: function () {
      this.isDisplay = false;
    },
    add(option) {
      if (option != "") {
        this.options.push(option);
        this.option = "";
      }
    },
    del() {
      // this.arr.splice(index, 1)
      this.options.pop();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  text-align: center;
  margin-top: 2em;
  margin-bottom: 1em;
  font-size: 5em;
  width: 10em;
}

.result {
  text-align: center;
  font-size: 5em;
  color: #ff6eff;
}

.card {
  min-height: 300px;
}

.btn-card {
  position: absolute;
  bottom: 10px;
  left: 5px;
  margin: 10px;
}

.btn-card-1 {
  position: absolute;
  bottom: 10px;
  right: 5px;
  margin: 10px;
}
</style>
