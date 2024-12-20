<script lang="ts">
  import { goto } from "$app/navigation";
  import { onMount } from "svelte";
  import {
    state as articleState,
    api as articleApi,
  } from "../stores/articles.store";

  // const redirect_admin =

  const getArticle = async () => {
    let res = await articleApi.getArticleById(
      { article_id: "672ac46a11af7bf45befebf9" },
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3M2ZlNDU0OTE2OGQ4ZmIwYTA2N2E5ZCIsIm5hbWUiOiJqYW1lMjkxMTA0Iiwicm9sZSI6InN1cGVyYWRtaW4iLCJpYXQiOjE3MzQ2NDI2ODcsImV4cCI6MTczNDY0NjI4N30.sRyKM4xVDK6wLbFQgUdX-1y6rgJb4KKJ2r2so51Vvy8"
    );

    console.log("RES", res);
    
  };

  const createArticle = async () => {
    let res = await articleApi.submitArticle({
        title: "Los mejores consejos para conducir una motocicleta",
        image_url: "https://cdn.pixabay.com/photo/2021/08/28/07/35/motorbikes-6580244_1280.jpg",
        description: "Conducir una motocicleta puede ser una experiencia emocionante y gratificante. Sin embargo, es importante tomar las precauciones necesarias para garantizar tu seguridad y la de los demás. Aquí hay algunos consejos para conducir una motocicleta",
        content: "<h1>Los mejores consejos para conducir una motocicleta</h1><p>Conducir una motocicleta puede ser una experiencia emocionante y gratificante. Sin embargo, es importante tomar las precauciones necesarias para garantizar tu seguridad y la de los demás. Aquí hay algunos consejos para conducir una motocicleta:</p><ul><li><strong>Usa siempre un casco y equipo de protección.</strong> Un casco es la mejor manera de proteger tu cabeza en caso de accidente. También debes usar botas, guantes y ropa protectora para evitar lesiones.</li><li><strong>Toma un curso de conducción de motocicletas.</strong> Un curso de conducción de motocicletas te enseñará las habilidades y técnicas necesarias para conducir de manera segura.</li><li><strong>Sé visible.</strong> Usa ropa reflectante y enciende tus luces, incluso durante el día.</li><li><strong>Defiende tu carril.</strong> No dejes que los conductores te pasen por el carril.</li><li><strong>Mantén una distancia segura.</strong> Deja espacio entre tu motocicleta y otros vehículos.</li><li><strong>No conduzcas bajo los efectos del alcohol o las drogas.</strong> El alcohol y las drogas afectan tu capacidad para reaccionar y tomar decisiones.</li><li><strong>Concéntrate en la conducción.</strong> No te distraigas con tu teléfono celular o con otros pasajeros.</li><li><strong>Conoce las leyes de tránsito.</strong> Asegúrate de conocer y seguir las leyes de tránsito de tu estado.</li><li><strong>Mantén tu motocicleta en buen estado.</strong> Realiza el mantenimiento regular de tu motocicleta para asegurarte de que esté en buenas condiciones.</li><li><strong>Toma un curso de primeros auxilios.</strong> Saber cómo dar primeros auxilios puede salvar vidas en caso de accidente.</li></ul><p>Siguiendo estos consejos, puedes ayudar a garantizar una experiencia de conducción segura y agradable.</p>", 
        author: "Jesús Morán",
        category: "viajes en moto",
        createdAt: new Date(),
        updatedAt: new Date()
    }, "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3M2ZlNDU0OTE2OGQ4ZmIwYTA2N2E5ZCIsIm5hbWUiOiJqYW1lMjkxMTA0Iiwicm9sZSI6InN1cGVyYWRtaW4iLCJpYXQiOjE3MzQ2NDI2ODcsImV4cCI6MTczNDY0NjI4N30.sRyKM4xVDK6wLbFQgUdX-1y6rgJb4KKJ2r2so51Vvy8")
  }

  onMount(async () => {
    await getArticle()
  })
</script>

<h1>This is de admin extension with svelte</h1>
<button on:click={() => goto("article-edition-view")}>Editar</button>
<button on:click={() => goto("create-article-view")}>Crear</button>
<button on:click={() => createArticle()}>CREAR PRUEBA</button>
