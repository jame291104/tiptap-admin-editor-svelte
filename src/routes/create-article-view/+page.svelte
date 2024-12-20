<script lang="ts">
    import '../../scss/tiptap.scss';
    import { api as articleApi, state as articleState } from "../../stores/articles.store";
    import { page } from "$app/stores";
    import { onMount } from "svelte";
    import TiptapCreator from "../../components/tiptapCreator.svelte";

    
    let token: string  = $page.url.searchParams.get('token') ?? "null";
    $articleState.token_received = token

    let image_url: string = ""
    let title: string = ""
    let description: string = ""
    let author: string = ""
    let category: string = ""


    // const getArticle = async () => {
    // let res = await articleApi.getArticleById(
    //   { article_id: article_id }, token);

    //   console.log("RES", res);

    //   if (res) {
    //     $articleState.article_id = article_id
    //     $articleState.article = res
    //     $articleState.token_received = token
    //     console.log("STATE", $articleState);
        
    //   } else {
    //     alert("Falló la consulta de articulo por su id")
    //   }
    // };
    
    onMount(async () => {
        
    })

</script>

<div class="edit-article-container">  
    <h2>Crear Articulos:</h2>

    <h4>Ingresa los datos:</h4>

    <div class="input-group">

        <div class="input-field">
            <p>Imagen:</p>
            <input type="text" placeholder="https://examplelink.com.png" bind:value={image_url}>
        </div>
        <div class="input-field">
            <p>Titulo:</p>
            <input type="text" placeholder="Ingresa un titulo" bind:value={title}>
        </div>
        <div class="input-field">
            <p>Description:</p>
            <input type="text" placeholder="Ingresa una descrip..." bind:value={description}>
        </div>
        <div class="input-field">
            <p>Autor:</p>
            <input type="text" placeholder="Pepito Pérez" bind:value={author}>
        </div>
        <div class="input-field">
            <p>Categoria:</p>
            <input type="text" placeholder="Principiante, motos, avanzados" bind:value={category}>
        </div>

    </div>

    <div class="tiptap">
        <TiptapCreator defaultContent={""} image_url={image_url}, title={title} description={description} author={author} category={category}/>
    </div>
    
</div>

<style lang="scss">

    .input-group{
        width: 80vw;
        max-width: 1200px;
        padding: 20px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-around;
    }
    .input-field{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 6px;
        padding: 6px;
        input{
            border: 1px solid #777777;
            border-radius: 5px;
            height: 20px;
            width: max-content;
        }
    }
    .edit-article-container{
        width: 80vw;
        margin: auto;
        max-width: 1200px;
    }
</style>