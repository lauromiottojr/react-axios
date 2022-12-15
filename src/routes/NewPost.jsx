import './NewPost.css'

const NewPost = () => {
    return (
        <div className="newPost">
            <h2>Inserir novo post:</h2>
            <form>
                <div className="formControl">
                    <label htmlFor="title">Título:</label>
                    <input type="text" name="title" id="title" placeholder="Digite o título" />
                </div>
                <div className="formControl">
                    <label htmlFor="body">Conteúdo:</label>
                    <textarea type="text" name="body" id="body" placeholder="Digite o conteúdo"></textarea>
                </div>
                <input type="submit" value="Criar post" className="btn" />
            </form>
        </div>
    )
}

export default NewPost