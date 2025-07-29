import styles from "./About.module.css";

const Project = () => {
  return (
    <>
      <div className={styles.aboutWrapper}>
        <h2>About me</h2>
        <div className={styles.aboutContainer}>
          <div className={styles.subWrapper}>
            <div className={styles.subContainer}>
              <p className={styles.headP}>[웹 페이지의 얼굴 프론트엔드]</p>
              <p className={styles.subP}>
                대학생 시절 웹프로그래밍 수업 때 가고싶은 나라에 대해 소개하는
                웹페이지를 만드는 과제를 하며 웹 개발에 흥미를 느끼게
                되었습니다.
                <br />
                내가 사용한다면 어떤 점이 불편할까? 에 대해 늘 생각하며 사용자
                친화적 웹 페이지를 구현하기 위해 노력할 것 입니다.
              </p>
            </div>
            <div className={styles.subContainer}>
              <p className={styles.headP}>
                [다양한 도구를 다룰 줄 아는 개발자가 되고 싶습니다]
              </p>
              <p className={styles.subP}>
                '흑백요리사' 두부지옥을 시청하며 두부라는 재료를 통해 다양한
                음식을 만드는 것을 보고 같은 프론트엔드 개발자더라도 <br />
                타개발자에 비해 다양한 라이브러리와 같은 기술을 알고 있다면 큰
                도움이 될 것이라고 생각하였습니다.
              </p>
            </div>
            <div className={styles.subContainer}>
              <p className={styles.headP}>
                [끊임없이 성장하는 개발자가 될 것입니다]
              </p>
              <p className={styles.subP}>
                취직을 하고난 뒤에도 현실에 안주하지 않고 매일 매일 발전하는
                기술에 발 맞춰 열심히 발전하는 개발자가 되고 싶습니다. <br />
                새로운 개발 트렌드 및 현황을 선두하는 개발자가 되고 싶습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
