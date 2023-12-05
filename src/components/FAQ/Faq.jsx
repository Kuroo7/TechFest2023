import "./faq.css"
// import faqBackground from "../../assets/TechFest.png"
const Faq = () => {

  {/* <script>
      const accordion = document.querySelectorAll(".label");
      for (let i = 0; i < accordion.length; i++) {
        accordion[i].addEventListener("click", function () {
          for (let i = 0; i < accordion.length; i++) {
            if (accordion[i].classList.contains("active")) {
              if (accordion[i] != this) {
                accordion[i].classList.remove("active");
              }
            }
          }
          this.classList.toggle("active");
        });
      }
    </script> */}

  return (
    <>
      <div className="faq" id="faq_carousel">
        <div className="accordian">
          <h1 className="faq-heading" >Frequently asked questions</h1>
          <div className="content-box">
            <label htmlFor="ques-1" className="label">
              <span>What is the theme of TechFest 2023?</span>
              <input type="checkbox" name="ques-1" id="ques-1" />
              <div className="content">
                <p>The theme of TechFest is Hack The Future. It represents the future technology.</p>
              </div>
            </label>
          </div>
          <div className="content-box">
            <label htmlFor="ques-2" className="label">
              <span>Can students from other colleges also participate in TechFest?</span>
              <input type="checkbox" className="inp" name="ques-2" id="ques-2" />
              <div className="content">
                <p>Yes, students from other colleges can also participate in TechFest.</p>
              </div>
            </label>

          </div>
          <div className="content-box">
            <label htmlFor="ques-3" className="label">
              <span>What is the date and location of the college fest?</span>
              <input type="checkbox" name="ques-3" id="ques-3" />
              <div className="content">
                <p>The location of the college fest is ABES Engineering college campus, and the dates for TechFest is on 22th and 23th of December 2023.</p>
              </div>
            </label>

          </div>
        </div>
      </div>
    </>
  )
}

export default Faq