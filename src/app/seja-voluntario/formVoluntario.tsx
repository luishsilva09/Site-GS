export function FormVoluntario(){
    return(
        <form className="flex flex-col justify-center items-center">
            <h3 className="text-green-base font-bold text-4xl">Tenho interesse</h3>
            <input type="text" name="name" id="name" placeholder="Nome"/>
            <input type="email" name="email" id="email" placeholder="E-mail" />
            <input type="text" name="celular" id="celular" placeholder="Celular" />
            <input type="text" name="cidade" id="cidade" placeholder="Cidade" />
            <button>Tenho interesse</button>
        </form>
    )
}