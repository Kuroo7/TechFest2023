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
          <h1>Frequently asked questions</h1>
          <div className="content-box">
            <label htmlFor="ques-1" className="label">
              <span>Question 1</span>
              <input type="checkbox" name="ques-1" id="ques-1" />
              <div className="content">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo porro corporis illum ullam quidem repudiandae molestias voluptates repellat, architecto quos.</p>
              </div>
            </label>

          </div>
          <div className="content-box">
            <label htmlFor="ques-2" className="label">
              <span>Question 2</span>
              <input type="checkbox" className="inp" name="ques-2" id="ques-2" />
              <div className="content">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo porro corporis illum ullam quidem repudiandae molestias voluptates repellat, architecto quos.</p>
              </div>
            </label>

          </div>
          <div className="content-box">
            <label htmlFor="ques-3" className="label">
              <span>Question 3</span>
              <input type="checkbox" name="ques-3" id="ques-3" />
              <div className="content">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo porro corporis illum ullam quidem repudiandae molestias voluptates repellat, architecto quos.</p>
              </div>
            </label>

          </div>
          <div className="content-box">
            <label htmlFor="ques-4" className="label">
              <span>Question 4</span>
              <input type="checkbox" name="ques-4" id="ques-4" />
              <div className="content">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo porro corporis illum ullam quidem repudiandae molestias voluptates repellat, architecto quos.</p>
              </div>
            </label>

          </div>
        </div>
      </div>
    </>
  )
}

export default Faq