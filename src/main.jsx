import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  Sprout,
  ArrowRight,
  ArrowUpRight,
  Menu,
  X,
  Leaf,
  Search,
  ChevronRight,
  BookOpen,
  Droplets,
  Sun,
  Shovel,
  Calculator,
  MessageCircle,
  Check,
  Plus,
  Minus,
  Info,
  ShieldCheck,
} from "lucide-react";
import "./style.css";
const pics = {
  hero: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=1800&q=85",
  coconut:
    "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=1200&q=85",
  nursery:
    "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1000&q=85",
  field:
    "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=900&q=85",
  plant:
    "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=85",
};
function App() {
  let [page, P] = useState("home"),
    [menu, M] = useState(false),
    [q, Q] = useState(""),
    [tab, T] = useState("Overview"),
    [modal, B] = useState(false),
    [sent, S] = useState(false),
    [qty, Y] = useState("492"),
    [landAcres, setLandAcres] = useState("1"),
    [plantSpacing, setPlantSpacing] = useState("8.5");
  const go = (x) => {
    P(x);
    M(false);
    T("Overview");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const whatsappNumber = "916309895702";
  const getWhatsAppLink = (plantName) => {
    const message = `Hey, I want to know about the ${plantName} plant cultivation. Could you please help me with soil requirements, planting distance, irrigation, fertilizers and plant care?`;
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  };
  const names = [
    "Hybrid Coconut",
    "Mango",
    "Guava",
    "Teak",
    "Lemon",
    "Drumstick",
  ];
  const matches = names.filter((x) =>
    x.toLowerCase().includes(q.toLowerCase()),
  );

  // Planning estimate only: assumes a square layout and does not deduct
  // land for boundaries, roads, drains or irrigation access.
  const acresValue = Math.max(0, Number(landAcres) || 0);
  const spacingValue = Math.max(0.1, Number(plantSpacing) || 8.5);
  const landAreaSqM = acresValue * 4046.856;
  const estimatedPlants =
    acresValue > 0 ? Math.floor(landAreaSqM / (spacingValue * spacingValue)) : 0;
  const waterPerIrrigation = estimatedPlants * 45;

  return (
    <div className="site">
      <div className="top">
        <span>Vijayawada, Andhra Pradesh</span>
        <span>Plant nursery · Growing knowledge · Bulk orders</span>
      </div>
      <header>
        <button className="logo" onClick={() => go("home")} aria-label="Sri Shanmukha Bio Plantic home">
          <img src="/logo.png" alt="Sri Shanmukha Bio Plantic — Grow Better. Live Greener." />
        </button>
        <nav className={`nav ${menu ? "show" : ""}`}>
          <button onClick={() => go("home")}>Home</button>
          <button
            onClick={() => {
              go("home");
              setTimeout(
                () =>
                  document
                    .getElementById("catalogue")
                    ?.scrollIntoView({ behavior: "smooth" }),
                100,
              );
            }}
          >
            Plants
          </button>
          <button onClick={() => go("coconut")}>Growing guides</button>
          <button onClick={() => B(true)}>Contact</button>
          <button className="mobile" onClick={() => B(true)}>
            Request a quotation <ArrowUpRight />
          </button>
        </nav>
        <div className="right">
          <span>EN⌄</span>
          <button className="quote" onClick={() => B(true)}>
            Get a quote <ArrowUpRight />
          </button>
          <button className="hamb" onClick={() => M(!menu)}>
            {menu ? <X /> : <Menu />}
          </button>
        </div>
      </header>
      {page === "home" ? (
        <main>
          <section className="hero">
            <img src={pics.hero} />
            <div className="shade" />
            <div className="heroText">
              <label>— &nbsp; GROW WITH CONFIDENCE</label>
              <h1>
                Good plants.
                <br />
                <em>Better growing.</em>
              </h1>
              <p>
                Find the right plants for your land, understand what they need,
                and plan your next growing season with confidence.
              </p>
              <div className="actions">
                <button
                  className="lightBtn"
                  onClick={() =>
                    document
                      .getElementById("catalogue")
                      .scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Explore the catalogue <ArrowRight />
                </button>
                <button className="ghostBtn" onClick={() => go("coconut")}>
                  View a cultivation guide <BookOpen />
                </button>
              </div>
              <div className="heroMeta">
                <span>
                  <Leaf /> Plant selection with purpose
                </span>
                <span>
                  <BookOpen /> Knowledge beyond the product
                </span>
              </div>
            </div>
            <div className="heroNum">01　—　PLANTS FOR YOUR PURPOSE</div>
          </section>
          <section className="intro wrap">
            <div className="introImg">
              <img src={pics.nursery} />
              <div className="stamp">
                <Leaf />
                <b>
                  Rooted in
                  <br />
                  better growing
                </b>
              </div>
            </div>
            <div>
              <label>— &nbsp; A MORE INFORMED WAY TO GROW</label>
              <h2>
                Not just a plant.
                <br />A <em>plan to grow.</em>
              </h2>
              <p>
                Choosing a sapling is only the first step. The right soil,
                planting distance, water and ongoing care all shape the result.
                We want every customer to have the information they need before
                they begin.
              </p>
              <div className="points">
                <span>
                  <b>01</b> Understand the plant
                </span>
                <span>
                  <b>02</b> Plan your land
                </span>
                <span>
                  <b>03</b> Grow with the right guidance
                </span>
              </div>
              <button className="link" onClick={() => go("coconut")}>
                Explore a sample plant guide <ArrowUpRight />
              </button>
            </div>
          </section>
          <section className="catalogue wrap" id="catalogue">
            <div className="sectionHead">
              <div>
                <label>— &nbsp; EXPLORE THE CATALOGUE</label>
                <h2>
                  Find a plant for your <em>purpose.</em>
                </h2>
                <p>
                  Start with what you want to grow. Explore plants and the
                  information that helps you choose well.
                </p>
              </div>
              <small>01 / PLANT COLLECTION</small>
            </div>
            <div className="search">
              <Search />
              <input
                value={q}
                onChange={(e) => Q(e.target.value)}
                placeholder="Search by plant name or variety"
              />
              <span>SEARCH PLANTS</span>
            </div>
            <div className="cards">
              {matches.map((n, i) => (
                <article onClick={() => go("coconut")}>
                  <div className="cardImg">
                    <img
                      src={
                        i === 0 ? pics.coconut : i % 2 ? pics.field : pics.plant
                      }
                    />
                    <small>
                      {i === 0 ? "FEATURED GUIDE" : "NURSERY COLLECTION"}
                    </small>
                    <button>
                      <ArrowUpRight />
                    </button>
                  </div>
                  <div className="cardBody">
                    <label>
                      {i === 0 ? "FRUIT PLANT · COCONUT" : "PLANT COLLECTION"}
                    </label>
                    <h3>{n}</h3>
                    <p>
                      {i === 0
                        ? "Explore growing conditions, spacing, water, nutrition and ongoing care."
                        : "Plant details and availability can be confirmed with the nursery."}
                    </p>
                    <b>
                      View plant details <ArrowRight />
                    </b>
                  </div>
                </article>
              ))}
            </div>
            <div className="catalogueFoot">
              Sample catalogue for presentation{" "}
              <button onClick={() => go("coconut")}>
                Explore featured plant <ArrowRight />
              </button>
            </div>
          </section>
          <section className="knowledge">
            <div className="wrap knowGrid">
              <div>
                <label>— &nbsp; INFORMATION THAT HELPS YOU PLAN</label>
                <h2>
                  Know what your
                  <br />
                  <em>plant needs.</em>
                </h2>
                <p>
                  From choosing the right soil to understanding irrigation and
                  nutrition, explore the essentials before planting.
                </p>
                <button className="lightBtn" onClick={() => go("coconut")}>
                  Explore coconut guide <ArrowRight />
                </button>
              </div>
              <div className="knowList">
                {[
                  [Shovel, "Soil & land preparation"],
                  [Droplets, "Water & irrigation"],
                  [Leaf, "Fertilizer & nutrition"],
                  [Sun, "Care through the seasons"],
                ].map(([I, t], i) => (
                  <div>
                    <small>0{i + 1}</small>
                    <I />
                    <b>{t}</b>
                    <ArrowUpRight />
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section className="process wrap">
            <label>— &nbsp; A CLEARER WAY TO BEGIN</label>
            <h2>
              From choosing to <em>growing.</em>
            </h2>
            <div className="processGrid">
              {[
                [
                  Sprout,
                  "Explore",
                  "Discover plants by category, purpose and growing needs.",
                ],
                [
                  BookOpen,
                  "Understand",
                  "Read practical information about the plant before purchasing.",
                ],
                [
                  Calculator,
                  "Plan",
                  "Estimate planting positions and discuss your land requirements.",
                ],
                [
                  MessageCircle,
                  "Enquire",
                  "Request a quotation for individual or bulk sapling needs.",
                ],
              ].map(([I, t, d], i) => (
                <div>
                  <small>0{i + 1}</small>
                  <I />
                  <h3>{t}</h3>
                  <p>{d}</p>
                </div>
              ))}
            </div>
          </section>
          <section className="featured wrap">
            <div className="featureImg">
              <img src={pics.coconut} />
              <small>FEATURED CULTIVATION GUIDE</small>
            </div>
            <div>
              <label>— &nbsp; START WITH A REAL EXAMPLE</label>
              <h2>
                Hybrid Coconut.
                <br />
                <em>Know before you grow.</em>
              </h2>
              <p>
                Explore a detailed plant page built around the questions farmers
                ask: soil, spacing, water, fertilizers, maintenance and harvest
                expectations.
              </p>
              <div className="stats">
                <b>
                  01 <small>Plant profile</small>
                </b>
                <b>
                  08 <small>Guide sections</small>
                </b>
                <b>
                  01 <small>Sample product</small>
                </b>
              </div>
              <button className="darkBtn" onClick={() => go("coconut")}>
                View coconut details <ArrowRight />
              </button>
            </div>
          </section>
          <section className="bulk">
            <div className="wrap bulkInner">
              <div>
                <label>— &nbsp; FOR FARMERS & BULK BUYERS</label>
                <h2>Planning a larger plantation?</h2>
                <p>
                  Tell us what you want to grow, how many saplings you need and
                  where they should be delivered. Request a quotation from the
                  nursery.
                </p>
              </div>
              <button className="lightBtn" onClick={() => B(true)}>
                Request a bulk quotation <ArrowUpRight />
              </button>
            </div>
          </section>
        </main>
      ) : (
        <main>
          <div className="crumb wrap">
            <button onClick={() => go("home")}>Home</button>
            <ChevronRight />
            <button onClick={() => go("home")}>Plants</button>
            <ChevronRight />
            Hybrid Coconut
          </div>
          <section className="detailTop wrap">
            <div className="detailImg">
              <img src={pics.coconut} />
              <small>FRUIT PLANT · CULTIVATION GUIDE</small>
            </div>
            <div className="detailSummary">
              <label>— &nbsp; PLANT PROFILE / COCONUT</label>
              <h1>
                Hybrid <em>Coconut</em>
              </h1>
              <p>
                A long-term plantation choice that deserves careful planning.
                Understand its growing conditions and management needs before
                selecting a variety.
              </p>
              <div className="facts">
                <div>
                  <small>PLANT CATEGORY</small>
                  <b>Fruit plant</b>
                </div>
                <div>
                  <small>BUYING OPTION</small>
                  <b>Bulk quotation</b>
                </div>
                <div>
                  <small>VARIETY DETAILS</small>
                  <b>Confirm with nursery</b>
                </div>
                <div>
                  <small>PRICE</small>
                  <b>Request current price</b>
                </div>
              </div>
              <div className="plantActions">
                <button className="darkBtn" onClick={() => B(true)}>
                  Request bulk quotation <ArrowRight />
                </button>
                <a
                  className="plantChatLink"
                  href={getWhatsAppLink("Hybrid Coconut")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle /> Chat about this plant
                </a>
              </div>
              <small className="caution">
                <ShieldCheck /> Exact hybrid, sapling age, height and
                availability must be confirmed.
              </small>
            </div>
          </section>
          <section className="plantationCalculator wrap" id="plantation-calculator">
            <div className="calculatorIntro">
              <label>— &nbsp; PLAN YOUR COCONUT PLANTATION</label>
              <h2>
                Calculate your <em>plantation needs.</em>
              </h2>
              <p>
                Enter your land area and planting distance to estimate the
                number of coconut palms and the water required for one
                irrigation cycle.
              </p>
            </div>

            <div className="calculatorPanel">
              <div className="calculatorInputs">
                <label>
                  Land area
                  <div className="calculatorInputUnit">
                    <input
                      type="number"
                      min="0.01"
                      step="0.01"
                      value={landAcres}
                      onChange={(e) => setLandAcres(e.target.value)}
                      placeholder="Enter land area"
                    />
                    <span>ACRES</span>
                  </div>
                </label>

                <label>
                  Plant spacing
                  <div className="calculatorInputUnit">
                    <select
                      value={plantSpacing}
                      onChange={(e) => setPlantSpacing(e.target.value)}
                    >
                      <option value="8.5">8.5 m × 8.5 m</option>
                      <option value="7.5">7.5 m × 7.5 m</option>
                      <option value="8">8 m × 8 m</option>
                      <option value="9">9 m × 9 m</option>
                    </select>
                    <span>METRES</span>
                  </div>
                </label>
              </div>

              <div className="calculatorResults">
                <div className="calculatorResultMain">
                  <small>ESTIMATED PLANTING CAPACITY</small>
                  <strong>{estimatedPlants.toLocaleString("en-IN")}</strong>
                  <span>coconut plants</span>
                </div>

                <div className="calculatorResultItem">
                  <Droplets />
                  <div>
                    <small>WATER PER IRRIGATION CYCLE</small>
                    <strong>{waterPerIrrigation.toLocaleString("en-IN")} litres</strong>
                    <span>Based on 45 litres per young palm</span>
                  </div>
                </div>

                <div className="calculatorResultItem">
                  <Calculator />
                  <div>
                    <small>PLANTING DISTANCE</small>
                    <strong>{spacingValue} m × {spacingValue} m</strong>
                    <span>Square layout estimate</span>
                  </div>
                </div>
              </div>

              <div className="calculatorNote">
                <Info />
                <p>
                  <b>Important:</b> This is a preliminary estimate. It assumes
                  square spacing across the full land area and does not account
                  for boundaries, roads, drains or other unusable space. The
                  45-litre figure is an illustrative young-palm dry-summer
                  irrigation reference, not a year-round schedule. Actual
                  planting and watering recommendations must be confirmed for
                  the exact hybrid, soil, rainfall and irrigation system.
                </p>
              </div>

              <button className="darkBtn calculatorEnquiry" onClick={() => { Y(String(estimatedPlants)); B(true); }}>
                Enquire about {estimatedPlants.toLocaleString("en-IN")} saplings
                <ArrowRight />
              </button>
            </div>
          </section>

          <section className="guideLayout wrap">
            <aside>
              <b>IN THIS GUIDE</b>
              {[
                "Overview",
                "Soil & climate",
                "Land preparation",
                "Water management",
                "Fertilizer management",
                "Plant care",
                "Harvest & yield",
                "FAQs",
              ].map((t, i) => (
                <button
                  className={tab === t ? "active" : ""}
                  onClick={() => {
                    T(t);
                    document
                      .getElementById("guide")
                      .scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  <small>0{i + 1}</small>
                  {t}
                  <ChevronRight />
                </button>
              ))}
              <div className="asideBox">
                <Leaf />
                <b>Planning your orchard?</b>
                <p>
                  Share your land area and sapling requirement with the nursery.
                </p>
                <button onClick={() => B(true)}>
                  Make an enquiry <ArrowRight />
                </button>
              </div>
            </aside>
            <article id="guide">
              <label>— &nbsp; HYBRID COCONUT · GROWING KNOWLEDGE</label>
              {tab === "Overview" ? (
                <>
                  <h2>
                    Understand the plant before you <em>plant it.</em>
                  </h2>
                  <p className="lead">
                    Coconut is a perennial plantation crop. Successful
                    establishment depends on selecting suitable planting
                    material, well-drained soil, reliable water and consistent
                    management.
                  </p>
                  <div className="callout">
                    <Info />
                    <p>
                      <b>Important variety note</b>
                      <br />
                      “Hybrid Coconut” is a broad product label. Confirm the
                      exact hybrid name, parentage and recommended package of
                      practices with the nursery or an agricultural specialist
                      before purchase.
                    </p>
                  </div>
                  <h3>What should you check before buying?</h3>
                  <div className="ticks">
                    <span>
                      <Check /> Exact variety and source
                    </span>
                    <span>
                      <Check /> Sapling age and health
                    </span>
                    <span>
                      <Check /> Local suitability
                    </span>
                    <span>
                      <Check /> Farm water availability
                    </span>
                  </div>
                  <h3>Quick cultivation overview</h3>
                  <div className="guideCards">
                    <div>
                      <Shovel />
                      <b>Soil & drainage</b>
                      <p>
                        Assess soil depth, drainage and moisture-holding
                        capacity.
                      </p>
                    </div>
                    <div>
                      <Droplets />
                      <b>Water planning</b>
                      <p>
                        Plan irrigation around plant age, rainfall and soil
                        conditions.
                      </p>
                    </div>
                    <div>
                      <Sun />
                      <b>Climate</b>
                      <p>
                        Check local climate suitability against the selected
                        variety.
                      </p>
                    </div>
                  </div>
                </>
              ) : tab === "Soil & climate" ? (
                <>
                  <h2>
                    Soil and climate <em>requirements.</em>
                  </h2>
                  <p className="lead">
                    Coconut generally performs best where roots can explore a
                    sufficiently deep soil profile and excess water can drain
                    away.
                  </p>
                  <div className="guideCards">
                    <div>
                      <Shovel />
                      <b>Soil texture</b>
                      <p>
                        Deep loamy, alluvial and suitably managed lateritic
                        soils may support coconut where drainage is adequate.
                      </p>
                    </div>
                    <div>
                      <Droplets />
                      <b>Drainage</b>
                      <p>
                        Avoid prolonged waterlogging. Assess the field during
                        heavy rainfall.
                      </p>
                    </div>
                    <div>
                      <Info />
                      <b>Soil pH</b>
                      <p>
                        Test soil pH and nutrient status before planning
                        amendments.
                      </p>
                    </div>
                  </div>
                  <div className="callout">
                    <Info />
                    <p>
                      Obtain a soil test and confirm variety suitability with a
                      local horticulture specialist. Add exact ranges only after
                      variety verification.
                    </p>
                  </div>
                </>
              ) : tab === "Land preparation" ? (
                <>
                  <h2>
                    Prepare the land and <em>plant correctly.</em>
                  </h2>
                  <p className="lead">
                    A good layout makes irrigation, movement and maintenance
                    easier. Final spacing must follow the selected hybrid's
                    verified recommendations.
                  </p>
                  <ol className="steps">
                    <li>
                      <b>Survey the field</b>
                      <p>
                        Mark boundaries, slope, drainage routes, access paths
                        and water points.
                      </p>
                    </li>
                    <li>
                      <b>Confirm spacing</b>
                      <p>
                        Use variety-specific spacing. Consider square or
                        triangular layouts as appropriate.
                      </p>
                    </li>
                    <li>
                      <b>Prepare planting pits</b>
                      <p>
                        Follow local agricultural recommendations for pit
                        dimensions and planting season.
                      </p>
                    </li>
                    <li>
                      <b>Plant healthy saplings</b>
                      <p>
                        Inspect root health, stem condition and nursery source.
                      </p>
                    </li>
                  </ol>
                </>
              ) : tab === "Water management" ? (
                <>
                  <h2>
                    Water management for <em>healthy establishment.</em>
                  </h2>
                  <p className="lead">
                    Water needs vary with plant age, soil texture, rainfall,
                    temperature and irrigation method. Avoid applying a single
                    fixed schedule to every farm.
                  </p>
                  <div className="guideCards">
                    <div>
                      <Droplets />
                      <b>Establishment</b>
                      <p>
                        Keep the root zone adequately moist while preventing
                        standing water.
                      </p>
                    </div>
                    <div>
                      <Sun />
                      <b>Dry periods</b>
                      <p>
                        Monitor soil moisture more frequently during hot and dry
                        weather.
                      </p>
                    </div>
                    <div>
                      <Droplets />
                      <b>Drip irrigation</b>
                      <p>
                        Consider drip where suitable, with design based on water
                        source and field conditions.
                      </p>
                    </div>
                  </div>
                </>
              ) : tab === "Fertilizer management" ? (
                <>
                  <h2>
                    Fertilizer and nutrient <em>management.</em>
                  </h2>
                  <p className="lead">
                    A balanced nutrient plan supports growth, but fertilizer
                    type and dose should be based on plant age, soil test
                    results and local recommendations.
                  </p>
                  <div className="callout">
                    <Info />
                    <p>
                      <b>Soil-test-led approach</b>
                      <br />
                      Do not apply generic fertilizer doses to every coconut
                      plant. Obtain soil-test-based recommendations for the
                      selected variety.
                    </p>
                  </div>
                  <div className="ticks">
                    <span>
                      <Check /> Soil nutrient status
                    </span>
                    <span>
                      <Check /> Plant age and growth stage
                    </span>
                    <span>
                      <Check /> Organic matter and manure
                    </span>
                    <span>
                      <Check /> Local fertilizer schedule
                    </span>
                  </div>
                </>
              ) : tab === "Plant care" ? (
                <>
                  <h2>
                    Ongoing plant care and <em>maintenance.</em>
                  </h2>
                  <p className="lead">
                    Consistent monitoring helps identify problems early and
                    keeps orchard operations manageable.
                  </p>
                  <ol className="steps">
                    <li>
                      <b>Weed management</b>
                      <p>
                        Manage the basin and surrounding area without damaging
                        roots.
                      </p>
                    </li>
                    <li>
                      <b>Mulching</b>
                      <p>
                        Use suitable organic mulch to conserve moisture, away
                        from direct stem contact.
                      </p>
                    </li>
                    <li>
                      <b>Regular inspection</b>
                      <p>
                        Monitor leaves, stem and growing point for signs of
                        stress, pests or disease.
                      </p>
                    </li>
                    <li>
                      <b>Drainage maintenance</b>
                      <p>
                        Keep drainage channels functional during heavy rainfall.
                      </p>
                    </li>
                  </ol>
                </>
              ) : tab === "Harvest & yield" ? (
                <>
                  <h2>
                    Harvest expectations and <em>production.</em>
                  </h2>
                  <p className="lead">
                    Bearing time and yield depend on the exact hybrid, planting
                    material, climate, water, nutrition and orchard management.
                  </p>
                  <div className="callout">
                    <Info />
                    <p>
                      <b>Avoid guaranteed yield claims</b>
                      <br />
                      Ask for the exact hybrid name and documented performance
                      information. Validate bearing age and yield with credible
                      variety-specific sources.
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <h2>
                    Frequently asked <em>questions.</em>
                  </h2>
                  <FAQ />
                </>
              )}
              <div className="sourceNote">
                <Info /> Educational demonstration content. Final agronomic
                recommendations must be reviewed against the exact hybrid and
                current Andhra Pradesh horticultural guidance.
              </div>
            </article>
          </section>
          <section className="bulk">
            <div className="wrap bulkInner">
              <div>
                <label>— &nbsp; READY TO DISCUSS YOUR PLANTATION?</label>
                <h2>Planning a coconut orchard?</h2>
                <p>
                  Share your land area, location and sapling requirement to
                  request a quotation.
                </p>
              </div>
              <button className="lightBtn" onClick={() => B(true)}>
                Request a quotation <ArrowRight />
              </button>
            </div>
          </section>
        </main>
      )}
      <footer>
        <div className="wrap foot">
          <div>
            <div className="logo footerLogo">
              <img src="/logo.png" alt="Sri Shanmukha Bio Plantic — Grow Better. Live Greener." />
            </div>
            <p>
              Plant selection, growing knowledge and support for your next
              plantation.
            </p>
            <small>⌖ Vijayawada, Andhra Pradesh</small>
          </div>
          <div>
            <b>EXPLORE</b>
            <button onClick={() => go("home")}>Home</button>
            <button onClick={() => go("home")}>Plant catalogue</button>
            <button onClick={() => go("coconut")}>Growing guides</button>
          </div>
          <div>
            <b>GET IN TOUCH</b>
            <button onClick={() => B(true)}>Bulk enquiries</button>
            <button onClick={() => B(true)}>Contact nursery</button>
            <button onClick={() => go("coconut")}>Hybrid Coconut guide</button>
          </div>
          <div>
            <h3>
              Let's grow
              <br />
              something good.
            </h3>
            <button className="darkBtn" onClick={() => B(true)}>
              Get a quotation <ArrowUpRight />
            </button>
          </div>
        </div>
        <div className="wrap copyright">
          © 2026 Sri Shanmukha Bio Plantic · Presentation demo{" "}
          <span>Designed around the farmer's growing journey.</span>
        </div>
      </footer>
      {modal && (
        <div className="overlay" onClick={() => B(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="close" onClick={() => B(false)}>
              <X />
            </button>
            {!sent ? (
              <>
                <label>— &nbsp; BULK PLANT ENQUIRY</label>
                <h2>
                  Tell us what you <em>need.</em>
                </h2>
                <p>
                  Share your requirement and delivery location. The nursery can
                  review availability and prepare a quotation.
                </p>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    const formData = new FormData(e.currentTarget);
                    const customerName =
                      formData.get("customerName")?.toString().trim() || "";
                    const mobile =
                      formData.get("mobile")?.toString().trim() || "";
                    const plant =
                      formData.get("plant")?.toString().trim() ||
                      "Not specified";
                    const quantity =
                      formData.get("quantity")?.toString().trim() ||
                      "Not specified";
                    const location =
                      formData.get("location")?.toString().trim() || "";
                    const requirements =
                      formData.get("requirements")?.toString().trim() || "None";
                    const message = `Hello Sri Shanmukha Bio Plantic, I would like to request a bulk quotation.\n\nName: ${customerName}\nMobile: ${mobile}\nPlant: ${plant}\nQuantity: ${quantity}\nDelivery location: ${location}\nAdditional requirements: ${requirements}\n\nPlease share the price and availability. Thank you.`;
                    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
                    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
                    S(true);
                  }}
                >
                  <label>
                    Your name
                    <input
                      name="customerName"
                      required
                      placeholder="Enter your name"
                    />
                  </label>
                  <div className="two">
                    <label>
                      Mobile number
                      <input
                        name="mobile"
                        required
                        pattern="[0-9+ ]{10,15}"
                        placeholder="Mobile number"
                      />
                    </label>
                    <label>
                      Plant
                      <select name="plant">
                        <option>Hybrid Coconut</option>
                        <option>Other plant</option>
                      </select>
                    </label>
                  </div>
                  <div className="two">
                    <label>
                      Quantity
                      <input
                        name="quantity"
                        type="number"
                        min="1"
                        value={qty}
                        onChange={(e) => Y(e.target.value)}
                        required
                      />
                    </label>
                    <label>
                      Delivery location
                      <input
                        name="location"
                        defaultValue="Vijayawada"
                        required
                      />
                    </label>
                  </div>
                  <label>
                    Additional requirements
                    <textarea
                      name="requirements"
                      placeholder="Tell us about your land or delivery needs."
                    />
                  </label>
                  <button className="darkBtn submit" type="submit">
                    Continue to WhatsApp <MessageCircle />
                  </button>
                  <small>
                    WhatsApp will open with your enquiry filled in. Review it
                    and press Send to contact the nursery.
                  </small>
                </form>
              </>
            ) : (
              <div className="success">
                <Check />
                <h2>
                  WhatsApp <em>opened.</em>
                </h2>
                <p>
                  Your enquiry details have been added to a WhatsApp message
                  addressed to the nursery. Please review the message in
                  WhatsApp and press Send to submit your enquiry.
                </p>
                <button
                  className="darkBtn"
                  onClick={() => {
                    B(false);
                    S(false);
                  }}
                >
                  Done
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
function FAQ() {
  let [o, O] = useState(0);
  let a = [
    [
      "How many coconut plants fit in one acre?",
      "At 8.5 m × 8.5 m square spacing, a simple gross-area estimate is about 56 palms per acre. Actual capacity will be lower where boundaries, roads, drains and irrigation access take space. Confirm spacing for the exact hybrid.",
    ],
    [
      "Which soil is suitable for coconut?",
      "Several soil types may support coconut where soil depth, moisture and drainage are suitable. A soil test is recommended.",
    ],
    [
      "How often should I water coconut plants?",
      "Frequency depends on plant age, soil, rainfall, temperature and irrigation method. Avoid a fixed schedule without field context.",
    ],
    [
      "Which fertilizer should I use?",
      "Use soil-test-based recommendations for the exact variety and plant age. Confirm doses with a qualified local expert.",
    ],
    [
      "Can I request a bulk quotation?",
      "Yes. Share your quantity and delivery location through the enquiry form so the nursery can confirm pricing and availability.",
    ],
  ];
  return (
    <div className="faqs">
      {a.map(([q, d], i) => (
        <div>
          <button onClick={() => O(o === i ? -1 : i)}>
            {q}
            {o === i ? <Minus /> : <Plus />}
          </button>
          {o === i && <p>{d}</p>}
        </div>
      ))}
    </div>
  );
}
createRoot(document.getElementById("root")).render(<App />);
