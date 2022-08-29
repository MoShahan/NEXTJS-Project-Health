import styles from "../styles/TOS.module.css";

const tos = () => {
  return (
    <>
      <div className={styles.backBtn}>
        <a href="/login">{"< "} Back</a>
      </div>
      <h1 className={styles.tosHeading}>Terms of Service</h1>
      <div className={styles.tosBody}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste harum
        architecto consectetur in mollitia, aliquam magnam animi placeat
        voluptate rem suscipit delectus explicabo voluptates velit iusto fugiat
        ex quaerat atque nobis praesentium, quia distinctio sunt at? Fuga
        tempora magnam asperiores a eligendi. Nam ad rerum harum odio suscipit
        nisi expedita quasi doloribus ea ipsum! Necessitatibus similique cumque
        quam voluptatem suscipit? Accusamus voluptas a nobis sit animi aperiam
        reprehenderit nesciunt? Officiis eos possimus ipsam sint pariatur
        consectetur quod sit quis earum rem dolor sunt, hic porro nobis
        doloribus vel tempora nesciunt! Explicabo eaque delectus dolore?
        Nesciunt rerum iure nihil magni accusamus?
      </div>
    </>
  );
};

export default tos;
