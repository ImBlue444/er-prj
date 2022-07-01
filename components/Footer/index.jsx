import style from "../Footer/style.module.scss";

function Footer() {
  return (
    <div className={style.Footer}>
      <hr />
      <h2>
        <b>Elden Ring Summary</b>
      </h2>
      <h3>developed by Dennis Badagliacca</h3>
      <h4>API from: https://eldenring.fanapis.com </h4>
      <h5>This app is a selfmade training with NextJs</h5>
    </div>
  );
}

export default Footer;
