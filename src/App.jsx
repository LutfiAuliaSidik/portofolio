import './App.css'
import Header from './component/Header/Header'
import { ButtonGradient } from './component/Fraction/Button';
import * as Icon from 'react-bootstrap-icons';

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
            <ButtonGradient text="subscribe" style={{ position: 'absolute', top: '6px', right: '6px' }} icon={<Icon.ArrowRight size={13} style={{ paddingLeft: '2px'}} />}/>
          </form>
        </section>
        <section className='container skill'>
          <article className='skill-card'>
            <svg xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" clip-rule="evenodd" viewBox="0 0 64 64" id="icon-web-development">
              <path d="M49 8l-2 0c-.552 0-1 .448-1 1 0 .552.448 1 1 1l2 0c.552 0 1-.448 1-1 0-.552-.448-1-1-1zM43 8l-2 0c-.552 0-1 .448-1 1 0 .552.448 1 1 1l2 0c.552 0 1-.448 1-1 0-.552-.448-1-1-1zM37 8l-2 0c-.552 0-1 .448-1 1 0 .552.448 1 1 1l2 0c.552 0 1-.448 1-1 0-.552-.448-1-1-1zM53 12l-42 0c-.552 0-1 .448-1 1 0 .552.448 1 1 1l42 0c.552 0 1-.448 1-1 0-.552-.448-1-1-1zM11 14l-4 0c-1.656 0-3 1.344-3 3 0 0 0 32 0 32 0 1.656 1.344 3 3 3 0 0 50 0 50 0 1.656 0 3-1.344 3-3l0-32c0-1.656-1.344-3-3-3l-4 0c-.552 0-1 .448-1 1 0 .552.448 1 1 1l4 0c.552 0 1 .448 1 1 0 0 0 32 0 32 0 .552-.448 1-1 1l-50 0c-.552 0-1-.448-1-1l0-32c0-.552.448-1 1-1 0 0 4 0 4 0 .552 0 1-.448 1-1 0-.552-.448-1-1-1z"></path><path d="M27.064 50.649l-3 8c-.194.517.068 1.094.585 1.287.517.194 1.094-.068 1.287-.585l3-8c.194-.517-.068-1.094-.585-1.287-.517-.194-1.094.068-1.287.585zM35.064 51.351l3 8c.193.517.77.779 1.287.585.517-.193.779-.77.585-1.287l-3-8c-.193-.517-.77-.779-1.287-.585-.517.193-.779.77-.585 1.287z"></path><path d="M23 60l18 0c.552 0 1-.448 1-1 0-.552-.448-1-1-1l-18 0c-.552 0-1 .448-1 1 0 .552.448 1 1 1zM54 45l0-38c0-1.656-1.344-3-3-3l-38 0c-1.656 0-3 1.344-3 3 0 0 0 38 0 38 0 .552.448 1 1 1 .552 0 1-.448 1-1l0-38c0-.552.448-1 1-1 0 0 38 0 38 0 .552 0 1 .448 1 1 0 0 0 38 0 38 0 .552.448 1 1 1 .552 0 1-.448 1-1z"></path><path d="M5 46l54 0c.552 0 1-.448 1-1 0-.552-.448-1-1-1l-54 0c-.552 0-1 .448-1 1 0 .552.448 1 1 1zM29 19.459l0-2.459c0-.552.448-1 1-1l4 0c.552 0 1 .448 1 1l0 2.459c.565.178 1.108.404 1.624.674l1.74-1.74c.39-.39 1.024-.39 1.414 0l2.829 2.829c.39.39.39 1.024 0 1.414l-1.74 1.74c.27.516.497 1.059.674 1.624l2.459 0c.552 0 1 .448 1 1l0 4c0 .552-.448 1-1 1l-2.459 0c-.178.565-.404 1.108-.674 1.624l1.74 1.74c.39.39.39 1.024 0 1.414l-2.829 2.829c-.39.39-1.024.39-1.414 0l-1.74-1.74c-.516.27-1.059.497-1.624.674l0 2.459c0 .552-.448 1-1 1l-4 0c-.552 0-1-.448-1-1l0-2.459c-.565-.178-1.108-.404-1.624-.674l-1.74 1.74c-.39.39-1.024.39-1.414 0l-2.829-2.829c-.39-.39-.39-1.024 0-1.414l1.74-1.74c-.27-.516-.497-1.059-.674-1.624l-2.459 0c-.552 0-1-.448-1-1l0-4c0-.552.448-1 1-1l2.459 0c.178-.565.404-1.108.674-1.624l-1.74-1.74c-.39-.39-.39-1.024 0-1.414l2.829-2.829c.39-.39 1.024-.39 1.414 0l1.74 1.74c.516-.27 1.059-.497 1.624-.674zm4-1.459l-2 0 0 2.223c0 .467-.323.872-.778.976-.892.202-1.728.554-2.479 1.028-.395.249-.91.192-1.241-.139l-1.573-1.573-1.414 1.414 1.573 1.573c.331.331.388.846.139 1.241-.474.751-.826 1.587-1.028 2.479-.104.455-.509.778-.976.778l-2.223 0 0 2 2.223 0c.467 0 .872.323.976.778.202.892.554 1.728 1.028 2.479.249.395.192.91-.139 1.241l-1.573 1.573 1.414 1.414 1.573-1.573c.331-.331.846-.388 1.241-.139.751.474 1.587.826 2.479 1.028.455.104.778.509.778.976l0 2.223 2 0 0-2.223c0-.467.323-.872.778-.976.892-.202 1.728-.554 2.479-1.028.395-.249.91-.192 1.241.139l1.573 1.573 1.414-1.414-1.573-1.573c-.331-.331-.388-.846-.139-1.241.474-.751.826-1.587 1.028-2.479.104-.455.509-.778.976-.778l2.223 0 0-2-2.223 0c-.467 0-.872-.323-.976-.778-.202-.892-.554-1.728-1.028-2.479-.249-.395-.192-.91.139-1.241l1.573-1.573-1.414-1.414-1.573 1.573c-.331.331-.846.388-1.241.139-.751-.474-1.587-.826-2.479-1.028-.455-.104-.778-.509-.778-.976l0-2.223z"></path><path d="M32,23c-3.311,0 -6,2.689 -6,6c0,3.311 2.689,6 6,6c3.311,0 6,-2.689 6,-6c0,-3.311 -2.689,-6 -6,-6Zm0,2c2.208,0 4,1.792 4,4c0,2.208 -1.792,4 -4,4c-2.208,0 -4,-1.792 -4,-4c0,-2.208 1.792,-4 4,-4Z"></path>
            </svg>
            <h1>web development</h1>
            <p>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Sed Vehicula Bibendum Purus, A Suscipit Arcu Suscipit Ac.</p>
          </article>
          <article className='skill-card'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" id="icon-programming">
              <path d="M59 6H5a3.111 3.111 0 0 0-3 3.205V42.8A3.111 3.111 0 0 0 5 46h22v4h-7a1 1 0 0 0-1 1v5h-2v2h30v-2h-2v-5a1 1 0 0 0-1-1h-7v-4h22a3.111 3.111 0 0 0 3-3.2V9.205A3.111 3.111 0 0 0 59 6ZM5 8h54a1.119 1.119 0 0 1 1 1.205V38H4V9.205A1.119 1.119 0 0 1 5 8Zm38 48H21v-4h22Zm-8-6h-6v-4h6Zm24-6H5a1.119 1.119 0 0 1-1-1.2V40h56v2.8a1.119 1.119 0 0 1-1 1.2Z"></path><path d="M55 41h2v2h-2zM34 26h2.522a9.266 9.266 0 0 0 .362.873L35.1 28.657a1 1 0 0 0 0 1.414l2.829 2.829a1 1 0 0 0 1.414 0l1.784-1.783a9.266 9.266 0 0 0 .873.362V34a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-2.522a9.266 9.266 0 0 0 .873-.362l1.784 1.784a1 1 0 0 0 1.414 0l2.829-2.829a1 1 0 0 0 0-1.414l-1.783-1.784a9.266 9.266 0 0 0 .361-.873H56a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2.522a9.266 9.266 0 0 0-.362-.873l1.784-1.784a1 1 0 0 0 0-1.414L52.071 13.1a1 1 0 0 0-1.414 0l-1.784 1.783a9.266 9.266 0 0 0-.873-.361V12a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v2.522a9.266 9.266 0 0 0-.873.362L39.343 13.1a1 1 0 0 0-1.414 0L35.1 15.929a1 1 0 0 0 0 1.414l1.783 1.784a9.266 9.266 0 0 0-.362.873H34a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1Zm1-4h2.262a1 1 0 0 0 .968-.75 7 7 0 0 1 .745-1.8 1 1 0 0 0-.154-1.216l-1.6-1.6 1.414-1.414 1.6 1.6a1 1 0 0 0 1.216.154 7 7 0 0 1 1.8-.745 1 1 0 0 0 .75-.968V13h2v2.262a1 1 0 0 0 .75.968 7 7 0 0 1 1.8.745 1 1 0 0 0 1.216-.154l1.6-1.6 1.414 1.414-1.6 1.6a1 1 0 0 0-.154 1.216 7 7 0 0 1 .745 1.8 1 1 0 0 0 .968.75H55v2h-2.262a1 1 0 0 0-.968.75 7 7 0 0 1-.745 1.8 1 1 0 0 0 .154 1.216l1.6 1.6-1.414 1.414-1.6-1.6a1 1 0 0 0-1.216-.154 7 7 0 0 1-1.8.745 1 1 0 0 0-.75.968V33H44v-2.262a1 1 0 0 0-.75-.968 7 7 0 0 1-1.8-.745 1 1 0 0 0-1.216.154l-1.6 1.6-1.414-1.414 1.6-1.6a1 1 0 0 0 .154-1.216 7 7 0 0 1-.745-1.8 1 1 0 0 0-.968-.75H35Z"></path><path d="M45 28a5 5 0 1 0-5-5 5.006 5.006 0 0 0 5 5zm0-8a3 3 0 1 1-3 3 3 3 0 0 1 3-3zM9.293 16.707l1.414-1.414L9.414 14l1.293-1.293-1.414-1.414-2 2a1 1 0 0 0 0 1.414zM12.2 15.4l3-4 1.6 1.2-3 4zM19.707 16.707l2-2a1 1 0 0 0 0-1.414l-2-2-1.414 1.414L19.586 14l-1.293 1.293ZM24 15h2v2h-2zM9 19h4v2H9zM15 19h2v2h-2zM19 19h6v2h-6zM27 19h2v2h-2zM11 23h2v2h-2zM15 23h4v2h-4zM21 23h2v2h-2zM25 23h4v2h-4zM9 29h4v2H9zM15 29h2v2h-2zM19 29h6v2h-6zM27 29h2v2h-2zM11 33h2v2h-2zM15 33h4v2h-4zM21 33h2v2h-2zM25 33h4v2h-4z"></path>
            </svg>
            <h1>programming</h1>
            <p>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Sed Vehicula Bibendum Purus, A Suscipit Arcu Suscipit Ac.</p>
          </article>
        </section>
        <section className='container project'>
          <h1>my latest projects</h1>
          <p>the convention is the main event of the year for professionals in the world of example and example.</p>
          <article className='project-card'>
            <figure>
              <figcaption></figcaption>
            </figure>
          </article>
        </section>
      </main>
    </>
  )
}

export default App
