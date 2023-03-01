import './skillCard.scss';

export const SkillCard = ({ title , desc , tag } : Record<string, string>) => {
    return (
        <div className="skill">
            <h2 className='skill__title'>{ title }</h2>
            <div className='skill__content'>
                <span className='skill__fragment'>
                    <p>&lt;{tag}&gt;</p>
                    <div className='skill__line' />
                    <p>&lt;{tag}&gt;</p>
                </span>
                <p className='skill__desc'>{ desc }</p>

            </div>
        </div>
    );
}
