import styles from "./style.module.scss";
export default function index({ index, image, manageModal, year, location }) {
  return (
    <div
      onMouseEnter={(e) => {
        manageModal(false, index, e.clientX, e.clientY);
      }}
      onMouseLeave={(e) => {
        manageModal(false, index, e.clientX, e.clientY);
      }}
      className={styles.project}
    >
      <div className={styles.projectsection__content}>
        <div className={styles.projectsection__content__svg}>svg</div>
        <div className={styles.projectsection__content__info}>
          <div className={styles.projectsection__content__info__heading}>
            User Experience Design
          </div>
          <div className={styles.projectsection__content__info__subheading}>
            01
          </div>
        </div>
        <div className={styles.projectsection__content__info__detail}>
          Continue indulged speaking the was out horrible for domestic position.
          Seeing rather her you not esteem men settle genius excuse. Deal say
          over you age from. Comparison new.
        </div>
      </div>

      {/* <h3>{year}</h3> <p className="subheadinggcolor">{location}</p> */}
    </div>
  );
}
