import './App.css'
import Header from './component/Header/Header'
import ButtonSubs from './component/Fraction/ButtonSubs'

const App = () => {
  return (
    <>
      <main>
        <Header/>
        <section className='container hero'>
          <p>hello, everyone!</p>
          <h1>i'm <span>lutfi aulia sidik</span></h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula bibendum purus, a suscipit arcu suscipit ac. Vivamus tristique purus nec tortor mattis, a gravida tortor accumsan</p>
          <form>
            <input type='email' name='email' autoComplete='off' placeholder='type your email address' />
            <ButtonSubs style={{ position: 'absolute', top: '5.7px', right: '76px' }}/>
          </form>
        </section>
      </main>
    </>
  )
}

export default App
