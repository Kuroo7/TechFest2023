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
        <div className="accordion">
          <h4>Frequently asked questions</h4>
          <div className="content-box">
            <div className="label">Question One</div>
            <div className="content">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                facilis odio aspernatur itaque dolore quasi nulla eius eaque sint
                sunt?
              </p>
            </div>
          </div>
          <div className="content-box">
            <div className="label">Question Two</div>
            <div className="content">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                facilis odio aspernatur itaque dolore quasi nulla eius eaque sint
                sunt?
              </p>
            </div>
          </div>
          <div className="content-box">
            <div className="label">Question Three</div>
            <div className="content">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                facilis odio aspernatur itaque dolore quasi nulla eius eaque sint
                sunt?
              </p>
            </div>
          </div>
          <div className="content-box">
            <div className="label">Question four</div>
            <div className="content">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                facilis odio aspernatur itaque dolore quasi nulla eius eaque sint
                sunt?
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Faq