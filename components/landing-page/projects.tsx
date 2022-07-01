import styles from '../../styles/components/landing-page/projects.module.css';

const projects = [
    {
        title: 'Natural Calibrated White',
        className: 'project1'
    },
    {
        title: '1522',
        className: 'project2'
    },
    {
        title: 'Brigade Arcade',
        className: 'project3'
    },
    {
        title: 'Concrete',
        className: 'project4'
    }
]

export default function Projects() {
    return (
        <section className={styles.section}>
            <h2 className="landing-section-header" style={{paddingTop:"50px"}}>Our projects</h2>
            <div>
                {
                    projects.map((project, idx) => (
                        <div key={project.className}>
                            {
                                idx % 2 === 0 ? (
                                    <div className={styles.parallaxBoxWrapper}>
                                        <div className={`${styles.parallaxBox} ${project.className}`}></div>
                                        <h3 className={styles.parallaxBoxHeader}>{project.title}</h3>
                                    </div>
                                ) : (
                                    <div className={styles.parallaxBoxWrapper}>
                                        <h3 className={styles.parallaxBoxHeader}>{project.title}</h3>
                                        <div className={`${styles.parallaxBox} ${project.className}`}></div>
                                    </div>
                                )
                            }
                        </div>
                    ))
                }
            </div>
        </section>
    )
}