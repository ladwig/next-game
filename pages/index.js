import styles from './styles.js'
import Settings from './settings.js'

export default () => (
<div>
    <h1>First game!</h1>
    <Settings/>
    <a href="game"><button type="button">Start</button></a>
    <style jsx global>{styles}</style>
</div>
)
