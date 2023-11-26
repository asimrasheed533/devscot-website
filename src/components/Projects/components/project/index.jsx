import styles from "./style.module.scss";
export default function index({ index, svg, heading, number, detail }) {
  return (
    <div
      onMouseEnter={(e) => {
        manageModal(true, index, e.clientX, e.clientY);
      }}
      onMouseLeave={(e) => {
        manageModal(false, index, e.clientX, e.clientY);
      }}
      className={styles.project}
    >
      <div className={styles.projectsection__content}>
        <div className={styles.projectsection__content__svg}>{svg}</div>
        <div className={styles.projectsection__content__info}>
          <div className={styles.projectsection__content__info__heading}>
            {heading}
          </div>
          <div className={styles.projectsection__content__info__subheading}>
            {number}
          </div>
        </div>
        <div className={styles.projectsection__content__info__detail}>
          {detail}
        </div>
      </div>
    </div>
  );
}
