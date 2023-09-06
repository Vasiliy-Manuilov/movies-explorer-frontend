import './AboutProject.css';

function AboutProject() {
  return (
    <section className="about-project" id="about-project">
      <h2 className="about-project__title">О проекте</h2>

      <div className="about-project__container">
        <div className="about-project__info">
          <h3 className="about-project__info-title">Дипломный проект включал 5 этапов</h3>
          <p className="about-project__info-text">
            Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
          </p>
        </div>

        <div className="about-project__info">
          <h3 className="about-project__info-title">На выполнение диплома ушло 5 недель</h3>
          <p className="about-project__info-text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>

      <div className="about-project__container">
        <div className="about-project__timeline">
          <h4 className="about-project__timeline-title">1 неделя</h4>
          <p className="about-project__timeline-text">Back-end</p>
        </div>

        <div className="about-project__timeline">
          <h4 className="about-project__timeline-title about-project__timeline-title_type_light">4 недели</h4>
          <p className="about-project__timeline-text">Front-end</p>
        </div>
      </div>
    </section>
  );
};

export default AboutProject;