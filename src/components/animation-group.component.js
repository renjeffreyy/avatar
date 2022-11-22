import { FlyingWords } from "./flying-words.component"

export const AnimationGroup = ({ children,flyingWordsText }) =>{
    return (
        <section>
            <FlyingWords>{flyingWordsText }</FlyingWords>
            { children }
        </section>
    )
}