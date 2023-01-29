const Sobre = () => {
  return (
    <div className='sobre-container'>
      <div className='sobre-text'>
        <h1>Sobre</h1>
        <p>
          Este projeto foi criado no âmbito da disciplina Desenvolvimento Web do
          1º ano do mestrado Design e Multimédia da Universidade de Coimbra,
          onde o objetivo era criar um website de caráter editorial. Versus é um
          website dedicado à vida e obra de Fernando Pessoa e dos seus
          heterónimos, onde é possível ler ambos os poemas como as suas
          respetivas análises. Temos como propósito servir de auxilio para quem
          quiser aprender mais sobre este poeta.
        </p>
      </div>

      <div className='sobre-text'>
        
        <div className='equipa-container'>
            <h1>Equipa</h1>
            <img id='duda' src='imgs/duda.png' />
            <img id='bea' src='imgs/bea.png' />
        </div>
      </div>
    </div>
  )
}

export default Sobre
