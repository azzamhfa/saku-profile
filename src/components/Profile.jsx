import React from "react";
import unnamed from "../assets/unnamed.png";
import CountUp from "react-countup";
import { ResponsivePie, Pie } from "@nivo/pie";

const data = [
  {
    id: "Nobody's Fault",
    label: "Nobody's Fault",
    value: 8,
    color: "hsl(357, 70%, 50%)",
  },
  {
    id: "BAN",
    label: "BAN",
    value: 8,
    color: "hsl(51, 70%, 50%)",
  },
  {
    id: "Nagaredama",
    label: "Nagaredama",
    value: 2,
    color: "hsl(122, 70%, 50%)",
  },
  {
    id: "Samidare yo",
    label: "Samidare yo",
    value: 5,
    color: "hsl(100, 70%, 50%)",
  },
  {
    id: "Sakurazuki",
    label: "Sakurazuki",
    value: 5,
    color: "hsl(262, 70%, 50%)",
  },
];
const data2 = [
  {
    id: "Sakura 8",
    label: "Sakura 8",
    value: 4,
    color: "hsl(357, 70%, 50%)",
  },
  {
    id: "Back's Member",
    label: "Back's Member",
    value: 1,
    color: "hsl(51, 70%, 50%)",
  },
];

const commonProperties = {
  width: 400,
  height: 120,
  animate: true,
  activeOuterRadiusOffset: 1,
};

const CenteredMetric = ({ dataWithArc, centerX, centerY }) => {
  let total = 0;
  dataWithArc.forEach((datum) => {
    total += datum.value;
  });

  return (
    <text
      x={centerX}
      y={centerY}
      textAnchor="middle"
      dominantBaseline="central"
      style={{
        fontSize: "20px",
        fontWeight: 600,
      }}
    >
      {total}
    </text>
  );
};

function Profile() {
  return (
    <div className="h-full flex p-10 lg:flex-row flex-col">
      <div
        className="ccard shadow-drop-2-center border-2 shadow-xl shadow-pink-100 border-pink-200 
      flex w-full h-full rounded-[50px] p-8 flex-col md:flex-row xl:flex-col items-center 
       lg:w-[580px] 
      "
      >
        <div className="lg:m-0 mr-10">
          <img
            src="https://sakurazaka46.com/images/14/3c0/4c3cd9839ab59685fbae74a5b8596/1000_1000_102400.jpg"
            alt=""
            className="rounded-full object-cover object-top sm:w-[250px] sm:h-[250px] 
          w-[240px] h-[240px] m-2 border-8 border-solid drop-shadow-2xl ring-4 ring-pink-300 border-zinc-50"
          />
          <p className="text-sm font-poppins text-center">
            Copyright. Seed & Flowers LLC
          </p>
        </div>

        <div className="font-poppins lg:text-center text-left">
          <div className="name mt-5">
            <h1 className="font-semibold text-pink-400 sm:text-[24px] text-[15px]">
              小池 美波
            </h1>
            <h1 className="font-bold  text-pink-400 sm:text-[30px] text-[20px]">
              Koike Minami
            </h1>
          </div>
          <p className="text-left font-semibold my-3">Details {">"}</p>
          <table className="table-auto text-left">
            <tr>
              <td>Generation</td>
              <td>:</td>
              <td>1st Generation Member</td>
            </tr>
            <tr>
              <td>Birthdate</td>
              <td>:</td>
              <td>November 14, 1998</td>
            </tr>
            <tr>
              <td>Birth place</td>
              <td>:</td>
              <td>Hyogo</td>
            </tr>
            <tr>
              <td>Height</td>
              <td>:</td>
              <td>158cm</td>
            </tr>
            <tr>
              <td>Lightstick Color</td>
              <td>:</td>
              <td></td>
            </tr>
          </table>
          <p className="text-left font-semibold my-3">
            Social Media Account {">"}
          </p>
          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="currentColor"
              class="bi bi-instagram"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
            </svg>
            <img
              src="https://play-lh.googleusercontent.com/AKKnVMfKzyuPK2QLY3WDhhfBKyhW8nq5KjYARLcDgcub4ue5B9RSBzjv4-nU5EA1debu"
              alt=""
              className="w-[50px] h-[50px] rounded-xl ml-4"
            />
          </div>
        </div>
      </div>

      <div
        id="card_detail"
        className=" h-full w-full sm:w-[30%] md:w-[45%] lg:w-[68%] xl:w-full flex-col flex ml-6"
      >
        <section className="h-full w-full flex mb-4">
          <div
            id="Discography"
            className="bg-white w-[50%] p-5 border-2 shadow-xl shadow-pink-100 border-pink-200 rounded-2xl mr-2 ccard shadow-drop-2-center "
          >
            <p className="font-poppins font-bold">Discography {">"}</p>
            <div className="xl:w-[90%] h-full flex flex-col items-center justify-evenly ">
              <div
                id="songs_participation"
                className="w-full p-4 cursor-pointer"
              >
                <div
                  className="flex w-full  flex-col items-center text-[10px] font-semibold"
                  style={{ transform: `translate(${-50}px,0)` }}
                >
                  <Pie
                    {...commonProperties}
                    data={data}
                    theme={{
                      legends: {
                        text: {
                          fontSize: 13,
                          fill: "#333333",
                        },
                      },
                    }}
                    innerRadius={0.6}
                    enableArcLabels={true}
                    activeInnerRadiusOffset={1}
                    style={{ transform: `translate(${-100}px, ${0}px)` }}
                    layers={["arcs", "arcLabels", CenteredMetric, "legends"]}
                    legends={[
                      {
                        anchor: "right",
                        direction: "column",
                        justify: false,
                        translateX: -90,
                        translateY: 0,
                        itemsSpacing: 0,
                        itemWidth: 30,
                        itemHeight: 20,
                        itemTextColor: "#999",
                        itemDirection: "left-to-right",
                        itemOpacity: 1,
                        symbolSize: 10,
                        symbolShape: "square",
                        effects: [
                          {
                            on: "hover",
                            style: {
                              itemTextColor: "#000",
                              symbolSize: 13,
                            },
                          },
                        ],
                      },
                    ]}
                  />
                </div>
                <p className="font-poppins font-semibold text-center text-[16px]">
                  Total <br /> Songs Participation
                </p>
              </div>
              <div
                id="songs_participation"
                className="w-full p-4 cursor-pointer"
              >
                <div
                  className="flex w-full  flex-col items-center text-[10px] font-semibold"
                  style={{ transform: `translate(${-50}px,0)` }}
                >
                  <Pie
                    {...commonProperties}
                    data={data2}
                    theme={{
                      legends: {
                        text: {
                          fontSize: 13,
                          fill: "#333333",
                        },
                      },
                    }}
                    innerRadius={0.6}
                    enableArcLabels={true}
                    activeInnerRadiusOffset={1}
                    style={{ transform: `translate(${-100}px, ${0}px)` }}
                    layers={["arcs", "arcLabels", CenteredMetric, "legends"]}
                    legends={[
                      {
                        anchor: "right",
                        direction: "column",
                        justify: false,
                        translateX: -90,
                        translateY: 0,
                        itemsSpacing: 0,
                        itemWidth: 30,
                        itemHeight: 20,
                        itemTextColor: "#999",
                        itemDirection: "left-to-right",
                        itemOpacity: 1,
                        symbolSize: 10,
                        symbolShape: "square",
                        effects: [
                          {
                            on: "hover",
                            style: {
                              itemTextColor: "#000",
                              symbolSize: 13,
                            },
                          },
                        ],
                      },
                    ]}
                  />
                </div>
                <p className="font-poppins font-semibold text-center text-[16px]">
                  Total <br /> Songs Participation
                </p>
              </div>
            </div>
          </div>
          <div
            id="single"
            className="bg-white w-full p-5 border-2 shadow-xl shadow-pink-100 border-pink-200 rounded-2xl ccard shadow-drop-2-center"
          >
            <p className="font-poppins font-bold">Profile Photos {">"}</p>
            <div className="wrapper flex flex-wrap pt-3">
              <div
                id="image"
                className="pr-6 text-center font-poppins leading-5"
              >
                <img
                  className="w-[130px] h-auto rounded-xl shadow-xl"
                  src="https://sakurazaka46.com/images/14/3c0/4c3cd9839ab59685fbae74a5b8596/1000_1000_102400.jpg"
                  alt=""
                />
                <p>Sakurazuki</p>
                2023
              </div>
              <div
                id="image"
                className="pr-6 text-center font-poppins leading-5"
              >
                <img
                  className="w-[130px] h-auto rounded-xl"
                  src="https://sakurazaka46.com/images/14/3c0/4c3cd9839ab59685fbae74a5b8596/1000_1000_102400.jpg"
                  alt=""
                />
                <p>Sakurazuki</p>
                2023
              </div>
              <div
                id="image"
                className="pr-6 text-center font-poppins leading-5"
              >
                <img
                  className="w-[130px] h-auto rounded-xl"
                  src="https://sakurazaka46.com/images/14/3c0/4c3cd9839ab59685fbae74a5b8596/1000_1000_102400.jpg"
                  alt=""
                />
                <p>Sakurazuki</p>
                2023
              </div>
            </div>
          </div>
        </section>

        <section
          id="single "
          className="bg-white w-full p-5 border-2 shadow-xl shadow-pink-100 border-pink-200 rounded-2xl ccard shadow-drop-2-center"
        >
          <p className="font-poppins font-bold">Miichan's Latest Blogs {">"}</p>
          <div className="flex">
            <div className="w-[240px] p-2 my-2 shadow-xl border-[0.8px] border-pink-200 mr-4">
              <img
                className="w-[240px] h-[120px] object-fit "
                src={unnamed}
                alt="blog_image"
              />
              <p className="font-bold font-poppins">Judul Blog</p>
              Deserunt excepteur ipsum id incididunt ullamco veniam ut
              incididunt nulla elit veniam do.
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Profile;
