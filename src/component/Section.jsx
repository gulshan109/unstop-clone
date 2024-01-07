import React from "react";

export default function Section({ userImg }) {
  return (
    <section>
      <article className="box-1">
        <main>
          <h1>
            Connecting
            <span>
              {userImg.map((value) => (
                <img src={value.img} />
              ))}
            </span>
          </h1>
          <h1>Talent, Colleges, Recuruiters</h1>
        </main>
        <main>
          <p>
            Explore opportunities from across the globe to learn, showcase
            skills, gain CV points & get hired by your dream company.
          </p>
          <button>
            <span>
              <img src="https://d8it4huxumps7.cloudfront.net/uploads/images/655edc8c1fab9_diamond_1.png?d=82x84" />
            </span>
            <span>
              <small>Rahul</small>
              <strong>Just Went Unstop Pro !</strong>
            </span>
          </button>
        </main>
      </article>
      <article className="box-2">
        <div className="top-img">{/* bg-image */}</div>
        <main>
          <div>
            <h4>Learn</h4>
            <h5>Expand</h5>
            <p>Knowledge Base</p>
          </div>
          <div>
            <h4>Practice</h4>
            <h5>Refine</h5>
            <p>Skills Daily</p>
          </div>
          <div>
            <h4>Mentorship</h4>
            <h5>Guidance</h5>
            <p>From Top Mentors</p>
          </div>
        </main>
        <main>
          <div>
            <h4>Jobs</h4>
            <h5>Explore</h5>
            <p>Diverse Careers</p>
          </div>
          <div>
            <h4>Compete</h4>
            <h5>Battle</h5>
            <p>For Excellence</p>
          </div>
        </main>
        <div className="bottom-img">{/* bg-image */}</div>
      </article>
    </section>
  );
}
