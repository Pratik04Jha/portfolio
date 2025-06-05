import Image from "next/image";

const Page = () => {
  return (
    <div className="min-h-screen flex text-white bg-[#0a0a0a]">
      {/* Left Side - Sticky */}
      <div className="w-1/2">
        <div className="sticky top-20 h-fit p-8 space-y-6 border-r border-zinc-800">
          <Image
            src="/school.png"
            alt="Akash Model Senior Secondary School"
            width={400}
            height={400}
            className="object-cover rounded-2xl shadow-xl"
          />
          <div className="text-left space-y-2">
            <h1 className="text-3xl font-bold">
              Akash Model Senior Secondary School
            </h1>
            <p className="text-sm text-white italic">
              2017 – Present (Unfortunately)
            </p>

            <div className="text-sm md:text-base text-white space-y-3">
              <p className="">
                <span className="font-semibold text-white">Skills:</span>

                {[
                  " Physics",
                  "Chemistry",
                  "Maths",
                  "English",
                  "Physical Education",
                ].join(" • ")}
              </p>

              <p>
                <span className="font-semibold text-white">Grade:</span> 93.3%
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Scrollable Content */}
      <div className="w-1/2 p-10 space-y-10 pt-20 text-white">
        <h2 className="text-4xl font-bold">The Great Academic Escape</h2>

        <div className="space-y-8 text-base leading-relaxed">
          <div>
            <h3 className="text-2xl font-semibold mb-2">
              Time Does not Fly, It Crawls
            </h3>
            <p>
              You ever been in a place so boring that you start questioning the
              fabric of time itself? That is my school. Time does not fly — it
              crawls like a wounded snail dragging a heavy bag of homework. Walk
              into class at 9 AM, blink, and it is still 9:01. Einstein is
              theory of relativity lives here. Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Iusto, labore aperiam consectetur
              repellat quas nostrum iste fuga soluta nulla cupiditate. <br />{" "}
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Blanditiis ex, dicta iure, assumenda aliquid, culpa quo deleniti
              hic officia perspiciatis cupiditate! Rerum quo deserunt recusandae
              unde sint accusantium repudiandae est.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-2">
              The Bell Rings... or Does It?
            </h3>
            <p>
              The bell is just a formality. Assembly speeches go on for so long,
              I have memorized the pitch and tone of the principal is
              throat-clears. Lip-syncing Good morning dear students became
              an Olympic skill. Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Fugit vitae sint maiores inventore quia? Optio
              quibusdam asperiores, maxime quos quia inventore magni! Pariatur
              nobis eligendi eum ullam deserunt ex alias amet voluptatibus,
              aperiam fugit id rerum blanditiis placeat adipisci repellat quam
              saepe nesciunt ut magni. Quod repellat tempore esse obcaecati.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-2">
              Uniform or Prison Suit?
            </h3>
            <p>
              Shirts so stiff you could stand them up like cardboard. Ties tight
              enough to activate trauma. And god forbid your socks are not
              snow-white. If they put this much energy into teaching, we would
              be writing code for NASA.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-2">The Lab from 2003</h3>
            <p>
              Ah yes, the computer lab. Pentium processors running Windows 7
              with keyboards that sound like broken maracas. Half the machines
              crash if you open two tabs. And yeah — Python? “Is not that a
              snake?” Java? “Coffee?” 
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-2">
              {" "}
              PE: Pretend Exercise
            </h3>
            <p>
              PE is not physical education. It is Passive Existence. Sit under
              the shade, do not talk, do not move. Real strength was tested in
              holding your bladder, not on the field. We trained in patience,
              not push-ups.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-2">
              The Best Years of Our Lives?
            </h3>
            <p>
              They say “these are the best years of your life.” If that is true,
              then someone owes me a refund. These were not golden years, these
              were chalk-dust-colored. A cycle of memorization, humiliation, and
              missed toilet breaks.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-2">The Real Education</h3>
            <p>
              YouTube taught me code. GitHub showed me how to build. Debugging
              at 2 AM gave me grit. School gave me rules, ranks, and repetition.
              The real syllabus? Learned outside those walls. Education happened
              in private tabs, not public lectures.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-2">
              Skills I Actually Learned
            </h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>How to whisper jokes at 2dB below detection range</li>
              <li>How to daydream while maintaining eye contact</li>
              <li>
                How to multitask during boring speeches (planning escape routes)
              </li>
              <li>How to survive on 4 cashews and 1 drop of water</li>
              <li>How to fake enthusiasm with Oscar-level acting</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-2">Final Grade</h3>
            <p>
              Mental Survival: A+
              <br />
              Pretending I Care: C-
              <br />
              Uniform Compliance: B (due to one sock incident)
              <br />
              Sarcasm Development: S-tier
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-2">Final Thoughts</h3>
            <p>
              I may hate it with the heat of a thousand suns, but every moment
              in that jail of a school built the rebel I am today. It did not
              educate me — it forged me. So… thanks, school. Not for the
              lessons, but for making me run so far away that I tripped and fell
              into my purpose.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
