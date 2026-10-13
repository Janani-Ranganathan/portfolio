/* Portfolio logic: ported from the Portfolio.dc.html design reference. */
(function () {
  "use strict";

  var PROJECTS = [
      { num: "01", category: "MUPD", categoryColor: "#6c436a", title: "Sand Matters — satellite platform for detecting sand mining", meta: "India · IAAC, Master in Advanced Urban Planning and Data Analytics", year: "2026", color: "#0c2036", href: "#sandmatters-detail", id: "work-02", detailId: "sandmatters-detail", cursorEmoji: "⏳", img: "assets/cards/01.jpg", desc: "A satellite-based platform detecting sand mining across Indian rivers using spectral change analysis and YOLO detection.",
        quick: {
          tags: [["URBAN ANALYTICS", "#3a78d0"], ["GEOAI", "#0c2036"], ["IAAC, MUPD01", "#c47ac0"]],
          banner: "assets/sandmatters/hero.jpg",
          result: "A satellite platform that spots sand mining on Indian rivers and tells a regulated river from one in collapse.",
          links: [["READ THE BLOG POST \u2197", "https://blog.iaac.net/sand-matters/"]],
          stats: [["2", "rivers studied: one regulated, one heavily documented"], ["4", "satellite indices: NDVI, BSI, MNDWI and NDBI"], ["9", "stages from drawn area to validated map"], ["83%", "of an independent measurement matched on the Ken"]],
          role: [["PROGRAMME", "IAAC, Master in Advanced Urban Planning and Data Analytics"], ["LOCATION", "Dwarakeswar & Ken Rivers, India"], ["YEAR", "2026"], ["TOOLS", "GIS, Remote Sensing, Python, Earth Engine, YOLO"]],
          groups: [
            { label: "The result: the platform", rows: [
              { kind: "hero", tiles: [
                { src: "assets/sandmatters/website-tour.webp", big: true, alt: "Tour of the Sand Matters Studio website: home page, interactive map console and detection panel", caption: "<b>Sand Matters Studio.</b> A walk through the website: the forum, the map console and the detection panel." },
                { src: "assets/sandmatters/platform.jpg", alt: "Sand Matters Studio dashboard", caption: "<b>The tool.</b> Draw an area, set dates and sensitivity, and run the detection." },
                { src: "assets/sandmatters/qr.jpg", qr: true, alt: "QR code linking to the Sand Matters website", caption: "<b>Try it.</b> Scan to visit the website." }
              ] },
              { kind: "tri", tiles: [
                { src: "assets/sandmatters/w17-console-tools.jpg", alt: "The map console with the draw-polygon tool and results panel marked", caption: "<b>The console.</b> A drawing tool and a results panel." },
                { src: "assets/sandmatters/w20-console-run.jpg", alt: "A drawn polygon over a river, with the river corridor shaded and the run button", caption: "<b>Draw and run.</b> Pick a stretch of river and start the analysis." },
                { src: "assets/sandmatters/w19-console-results.jpg", alt: "Results panel with the spectral swipe and YOLO detection", caption: "<b>The answer.</b> A spectral layer and object detections for the area." }
              ] }
            ] },
            { label: "The problem", rows: [
              { kind: "five", tiles: [
                { src: "assets/sandmatters/s00-title.jpg", alt: "Sand Matters: a satellite based platform for detecting sand mining across India", caption: "<b>The project.</b> Detecting sand mining across India from satellite imagery." },
                { src: "assets/sandmatters/s01-what-is.jpg", alt: "What is sand mining: types of mining", caption: "<b>What it is.</b> Sand taken from pits, beaches and river beds." },
                { src: "assets/sandmatters/s02-india-regions.jpg", alt: "Major sand mining regions of India", caption: "<b>Where.</b> Gangetic plains, peninsular and Himalayan rivers." },
                { src: "assets/sandmatters/s03-impact-matrix.jpg", alt: "Relationship matrix between mining stages and impacts", caption: "<b>The damage.</b> Each stage of the supply chain mapped to its impacts." },
                { src: "assets/sandmatters/s04-regulating-tech.jpg", alt: "Mining Surveillance System and its critical gap", caption: "<b>The gap.</b> The state's surveillance system targets major minerals, not sand." }
              ] },
              { kind: "tri", tiles: [
                { src: "assets/sandmatters/g24-the-gap.jpg", alt: "Governance network: the technical regulator has no jurisdiction over sand", caption: "<b>The network.</b> Who governs what, and where the link to sand is missing." },
                { src: "assets/sandmatters/g23-we-bridge.jpg", alt: "Governance network with Sand Matters connecting the regulators", caption: "<b>Our intervention.</b> Sand Matters connects the bodies that see with the bodies that act." },
                { src: "assets/sandmatters/g22-citizens.jpg", alt: "Citizens and institutions connected to Sand Matters", caption: "<b>Beyond government.</b> Citizens report; institutions validate." }
              ] }
            ] },
            { label: "The method", rows: [
              { kind: "wide", tiles: [
                { src: "assets/sandmatters/s05-workflow.jpg", alt: "Nine-stage detection workflow", caption: "<b>Nine stages, from drawn area to validated detection.</b>" }
              ], note: "A user draws an area. The platform builds a landscape context, gathers imagery, computes NDVI, BSI, MNDWI and NDBI change, masks out floodplain, built-up and farmland, sets adaptive thresholds, adds a YOLO layer for pits, haul roads and trucks, and flags each result as validated or conflicting." }
            ] },
            { label: "Study area: Dwarakeswar River", rows: [
              { kind: "solo", tiles: [
                { src: "assets/sandmatters/layers.gif?v=2", big: true, alt: "Satellite image of the Dwarakeswar River turning into NDVI, MNDWI and disturbance-mask layers", caption: "<b>From satellite image to mining signal.</b> Layers of vegetation, bare-soil and water change are stacked into a disturbance mask." }
              ] },
              { kind: "tri", tiles: [
                { src: "assets/sandmatters/s06-satellite.jpg", alt: "Satellite view of the Dwarakeswar River", caption: "<b>1. Satellite view.</b>" },
                { src: "assets/sandmatters/s07-grid.jpg", alt: "Analysis grid over the river", caption: "<b>2. Analysis grid.</b>" },
                { src: "assets/sandmatters/s08-ndvi.jpg", alt: "NDVI change map", caption: "<b>3. Change in NDVI</b> (vegetation)." }
              ] },
              { kind: "tri", tiles: [
                { src: "assets/sandmatters/s09-bsi.jpg", alt: "BSI change map", caption: "<b>4. Change in BSI</b> (bare soil)." },
                { src: "assets/sandmatters/s10-mndwi.jpg", alt: "MNDWI change map", caption: "<b>5. Change in MNDWI</b> (water)." },
                { src: "assets/sandmatters/s11-mask.jpg", alt: "Disturbance mask", caption: "<b>6. Disturbance mask.</b> Flagged zones in red." }
              ] },
              { kind: "solo", tiles: [
                { src: "assets/sandmatters/s12-change.jpg", alt: "Dwarakeswar River channel 2015 vs 2025, with pits, trucks and haul roads detected", caption: "<b>The detection.</b> River channel 2015 vs 2025, with pits, trucks and haul roads detected." }
              ] }
            ] },
            { label: "Study area: Ken River", rows: [
              { kind: "solo", tiles: [
                { src: "assets/sandmatters/ken-layers.webp", big: true, alt: "Layers building up on the Ken River, from satellite image to disturbance mask", caption: "<b>The same method, a second river.</b> With a new built-up mask (NDBI) so roads and buildings are not flagged." }
              ] },
              { kind: "tri", tiles: [
                { src: "assets/sandmatters/k33-satellite.jpg", alt: "Satellite view of the Ken River", caption: "<b>1. Satellite view.</b>" },
                { src: "assets/sandmatters/k32-grid.jpg", alt: "Analysis grid over the Ken River", caption: "<b>2. Analysis grid.</b>" },
                { src: "assets/sandmatters/k31-ndvi.jpg", alt: "NDVI change map, Ken River", caption: "<b>3. Change in NDVI</b> (vegetation)." }
              ] },
              { kind: "tri", tiles: [
                { src: "assets/sandmatters/k30-bsi.jpg", alt: "BSI change map, Ken River", caption: "<b>4. Change in BSI</b> (bare soil)." },
                { src: "assets/sandmatters/k29-mndwi.jpg", alt: "MNDWI change map, Ken River", caption: "<b>5. Change in MNDWI</b> (water)." },
                { src: "assets/sandmatters/k28-mask.jpg", alt: "Disturbance mask, Ken River", caption: "<b>6. Disturbance mask.</b> Flagged zones in red." }
              ] },
              { kind: "solo", tiles: [
                { src: "assets/sandmatters/k27-change-detect.jpg", alt: "Ken River channel 2015 vs 2024, with pits, trucks and haul roads detected", caption: "<b>The detection.</b> River channel 2015 vs 2024, with pits, trucks and haul roads detected." }
              ] }
            ] }
          ]
        },
        images: [
          { src: "assets/sandmatters/hero.jpg", caption: "Detecting illegal sand mining from space" },
          { src: "assets/sandmatters/mining-photo.jpg", caption: "Rivers under pressure across India" },
          { src: "assets/sandmatters/detection-dwarakeswar.jpg", caption: null },
          { src: "assets/sandmatters/detection-ken.jpg", caption: "Spectral change reveals what the eye misses" },
          { src: "assets/sandmatters/comparison-table.jpg", caption: null },
          { src: "assets/sandmatters/platform.jpg", caption: "A platform built to flag mining activity in near real time" }
        ] },
      { num: "02", category: "MUPD", categoryColor: "#6c436a", title: "Wing It — microclimatic corridor for non-humans", meta: "Barcelona · IAAC, Master in Advanced Urban Planning and Data Analytics", year: "2026", color: "#935c90", href: "#wingit-detail", id: "work-01", detailId: "wingit-detail", isWingit: true, cursorEmoji: "🦋", img: "assets/cards/02.jpg", desc: "Transforming Carrer de Rocafort into a climate shelter that helps butterflies survive and move through the city.",
        quick: {
          tags: [["DATA DRIVEN DESIGN", "#935c90"], ["MORE THAN HUMANS", "#0c2036"], ["IAAC, MUPD01", "#c47ac0"]],
          banner: "assets/wingit/banner.svg",
          result: "A climate-shelter corridor that lets butterflies and other non-human city dwellers shelter, feed and move through a hot, fragmented Barcelona neighbourhood.",
          links: [["READ THE BLOG POST \u2197", "https://blog.iaac.net/wing-it-microclimatic-corridor-for-non-humans/"]],
          stats: [["10", "butterfly species mapped from public records"], ["8", "design guidelines for the street"], ["34% \u2192 62%", "permeable surface, existing to proposed"], ["\u22129%", "absorbed heat: 1,296,000 to 1,181,700 kWh a year"]],
          role: [["PROGRAMME", "IAAC, Master in Advanced Urban Planning and Data Analytics"], ["SITE", "Jardins de Montserrat & Carrer de Rocafort, Barcelona"], ["YEAR", "2026"], ["SKILLS", "Urban analytics, GIS, Photoshop"]],
          groups: [
            { label: "The problem", rows: [
              { kind: "html", html: "<div class=\"wi-chain\"><div><svg class=\"wi-ic\" viewBox=\"0 0 32 32\" aria-hidden=\"true\"><rect x=\"13\" y=\"3\" width=\"6\" height=\"18\" rx=\"3\" fill=\"#e63027\"/><circle cx=\"16\" cy=\"24\" r=\"6\" fill=\"#e63027\"/></svg><b>Hotter and drier</b><span>Rising temperatures, longer droughts</span></div><i class=\"arr\">&rsaquo;</i><div><svg class=\"wi-ic\" viewBox=\"0 0 32 32\" aria-hidden=\"true\"><path d=\"M5 27 C5 12 14 5 27 5 C27 18 20 27 5 27z\" fill=\"#4f8a47\"/><line x1=\"6\" y1=\"26\" x2=\"18\" y2=\"14\" stroke=\"#fff\" stroke-width=\"2\"/></svg><b>Stressed plants</b><span>Water and heat stress; vegetation loses vitality</span></div><i class=\"arr\">&rsaquo;</i><div><svg class=\"wi-ic\" viewBox=\"0 0 32 32\" aria-hidden=\"true\"><rect x=\"14\" y=\"17\" width=\"4\" height=\"12\" fill=\"#6b4a36\"/><circle cx=\"16\" cy=\"12\" r=\"9\" fill=\"#4f8a47\"/></svg><b>Degraded habitats</b><span>Ecological processes are disrupted</span></div><i class=\"arr\">&rsaquo;</i><div><svg class=\"wi-ic\" viewBox=\"0 0 32 32\" aria-hidden=\"true\"><circle cx=\"16\" cy=\"16\" r=\"6\" fill=\"#ee9b3a\"/><line x1=\"25.0\" y1=\"16.0\" x2=\"29.0\" y2=\"16.0\" stroke=\"#ee9b3a\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"22.4\" y1=\"22.4\" x2=\"25.2\" y2=\"25.2\" stroke=\"#ee9b3a\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"16.0\" y1=\"25.0\" x2=\"16.0\" y2=\"29.0\" stroke=\"#ee9b3a\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"9.6\" y1=\"22.4\" x2=\"6.8\" y2=\"25.2\" stroke=\"#ee9b3a\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"7.0\" y1=\"16.0\" x2=\"3.0\" y2=\"16.0\" stroke=\"#ee9b3a\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"9.6\" y1=\"9.6\" x2=\"6.8\" y2=\"6.8\" stroke=\"#ee9b3a\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"16.0\" y1=\"7.0\" x2=\"16.0\" y2=\"3.0\" stroke=\"#ee9b3a\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"22.4\" y1=\"9.6\" x2=\"25.2\" y2=\"6.8\" stroke=\"#ee9b3a\" stroke-width=\"2.4\" stroke-linecap=\"round\"/></svg><b>Nowhere to survive</b><span>Few spaces let species cope with new conditions</span></div><i class=\"arr\">&rsaquo;</i><div class=\"end\"><svg class=\"wi-ic\" viewBox=\"0 0 32 32\" aria-hidden=\"true\"><path d=\"M16 16 C6 3 -1 10 4 18 C8 24 14 22 16 16z\" fill=\"#ee9b3a\"/><path d=\"M16 16 C26 3 33 10 28 18 C24 24 18 22 16 16z\" fill=\"#ee9b3a\"/><rect x=\"15\" y=\"10\" width=\"2\" height=\"14\" rx=\"1\" fill=\"#0c2036\"/></svg><b>Butterflies decline</b><span>An indicator species for stress</span></div></div>" },
              { kind: "html", html: "<div class=\"wi-question\"><span>THE QUESTION</span><p>How can streets be transformed into a <mark>climate shelter</mark> that supports the survival and movement of climate-sensitive species such as <mark>butterflies</mark>?</p></div>" }
            ] },
            { label: "The idea: a climate shelter", rows: [
              { kind: "solo", tiles: [
                { src: "assets/wingit/climate-shelter.jpg", alt: "Hand-drawn gradient from hot, sun-baked ground, through a dense canopy, to a cool core of understory", caption: "<b>A gradient of shelter.</b> From open, sun-baked ground, through a dense canopy that cools and blocks the wind, to a cool core of permeable ground and understory.", fit: "contain" }
              ] },
              { kind: "html", html: "<div class=\"wi-three\"><div class=\"wi-who\"><h4>The butterfly</h4><ul><li>Host plants</li><li>Permeable soil</li><li>Flowering plants</li><li>No disturbance</li></ul></div><div class=\"wi-who\"><h4>Residents</h4><ul><li>Shade and cooling</li><li>Accessibility</li><li>Safe crossings</li><li>Green space</li></ul></div><div class=\"wi-who\"><h4>The city council</h4><ul><li>Emergency lane access</li><li>Maintenance</li><li>Superilla policy</li></ul></div></div><p class=\"um-cap\"><b>Their tensions became the design drivers.</b> Foot traffic and maintenance disturb butterfly life cycles; a biodiversity corridor fits the city's climate strategy; Superilla resolves the mobility conflict.</p>" }
            ] },
            { label: "The site", rows: [
              { kind: "html", html: "<div class=\"wi-facts\"><div><b>6</b><span>streets around the park</span></div><div><b>15</b><span>field observation points</span></div><div><b>10</b><span>butterfly species recorded</span></div><div><b>200 m</b><span>to a green space, the Superilla aim</span></div></div>" },
              { kind: "duo", tiles: [
                { src: "assets/wingit/detail/site-jardins.jpg", alt: "Jardins de Montserrat and its uses", caption: "<b>The park.</b> Flowers, but too much sun and exposure.", fit: "cover" },
                { src: "assets/wingit/detail/site-streets.jpg", alt: "The surrounding streets and the site boundary", caption: "<b>The streets.</b> The green does not connect.", fit: "cover" }
              ] },
              { kind: "html", html: "<div class=\"wi-voices\"><blockquote>There are flowers here, but no place to lay eggs. Too much sun, too much exposure.<cite>A butterfly, in the park</cite></blockquote><blockquote>I can't cross these streets. Too hot, too exposed, no place to stop. What's green here doesn't connect.<cite>A butterfly, on the streets</cite></blockquote></div>" },
              { kind: "html", html: "<p class=\"um-sub\">THE SUPERILLA FRAME</p><p class=\"um-cap\"><b>Green axes with pedestrian priority.</b> Every home has access to a park or green corridor within a maximum of 200 metres.</p><div class=\"wi-cards\"><div class=\"wi-card\"><h4>Green axes (streets)</h4><p>Calm streets, prioritised for pedestrians, with places to stay, more greenery, and spaces for socialising, play and enjoyment.</p></div><div class=\"wi-card\"><h4>Squares</h4><p>At the intersections of the axes, new squares emerge, turned into comfortable places to stay, with more greenery and a children's playground.</p></div></div>" },
              { kind: "duo", tiles: [
                { src: "assets/wingit/detail/superilla-map.jpg", alt: "Superilla green axes and the site", caption: "<b>The axes and the site.</b> Green: Superilla streets. Hatched: the site.", fit: "contain" },
                { src: "assets/wingit/detail/superilla-photo.jpg", alt: "A Superilla square with a playground", caption: "<b>A square.</b> Greenery, places to stay and a playground.", fit: "cover" }
              ] }
            ] },
            { label: "The butterflies", rows: [
              { kind: "html", html: "<div class=\"wi-life\"><div><svg class=\"wi-ic\" viewBox=\"0 0 32 32\" aria-hidden=\"true\"><ellipse cx=\"16\" cy=\"17\" rx=\"7\" ry=\"9\" fill=\"#f6e7a8\" stroke=\"#c9b35a\" stroke-width=\"2\"/></svg><h4>Egg</h4><p>Laid on a host plant. Needs warmth and no disturbance.</p></div><div><svg class=\"wi-ic\" viewBox=\"0 0 32 32\" aria-hidden=\"true\"><circle cx=\"6\" cy=\"18\" r=\"4.5\" fill=\"#8cc45e\" stroke=\"#2b5a2b\" stroke-width=\"1.5\"/><circle cx=\"12\" cy=\"15\" r=\"4.5\" fill=\"#8cc45e\" stroke=\"#2b5a2b\" stroke-width=\"1.5\"/><circle cx=\"18\" cy=\"18\" r=\"4.5\" fill=\"#8cc45e\" stroke=\"#2b5a2b\" stroke-width=\"1.5\"/><circle cx=\"24\" cy=\"15\" r=\"4.5\" fill=\"#8cc45e\" stroke=\"#2b5a2b\" stroke-width=\"1.5\"/><circle cx=\"30\" cy=\"18\" r=\"4.5\" fill=\"#8cc45e\" stroke=\"#2b5a2b\" stroke-width=\"1.5\"/></svg><h4>Larva</h4><p>Eats the host plant. Needs food, shade and cover.</p></div><div><svg class=\"wi-ic\" viewBox=\"0 0 32 32\" aria-hidden=\"true\"><path d=\"M16 3 C23 9 24 20 16 29 C8 20 9 9 16 3z\" fill=\"#7fae62\" stroke=\"#3f7a3f\" stroke-width=\"2\"/><line x1=\"16\" y1=\"1\" x2=\"16\" y2=\"5\" stroke=\"#6b4a36\" stroke-width=\"2\"/></svg><h4>Pupa</h4><p>Hangs in leaf litter or dense vegetation. Needs shelter, left alone.</p></div><div><svg class=\"wi-ic\" viewBox=\"0 0 32 32\" aria-hidden=\"true\"><path d=\"M16 16 C6 3 -1 10 4 18 C8 24 14 22 16 16z\" fill=\"#ee9b3a\"/><path d=\"M16 16 C26 3 33 10 28 18 C24 24 18 22 16 16z\" fill=\"#ee9b3a\"/><rect x=\"15\" y=\"10\" width=\"2\" height=\"14\" rx=\"1\" fill=\"#0c2036\"/></svg><h4>Adult</h4><p>Feeds on nectar. Needs sun, warmth and a connected route.</p></div></div><p class=\"um-cap\"><b>A short life, mostly out of sight.</b> Six to twelve months in all, most of it as egg, caterpillar or pupa. Residents overwinter in leaf litter; migrants fly to Africa in autumn as adults and return in spring.</p>" },
              { kind: "html", html: "<p class=\"um-sub\">TEN SPECIES ON THE SITE, BY NUMBER OF PUBLIC RECORDS (GBIF)</p><div class=\"wi-bars\"><div class=\"b\"><span class=\"n\">Red Admiral</span><span class=\"t\"><i style=\"width:100.0%\"></i></span><span class=\"v\">136</span></div><div class=\"b\"><span class=\"n\">Geranium Bronze</span><span class=\"t\"><i style=\"width:55.1%\"></i></span><span class=\"v\">75</span></div><div class=\"b\"><span class=\"n\">Speckled Wood</span><span class=\"t\"><i style=\"width:50.7%\"></i></span><span class=\"v\">69</span></div><div class=\"b\"><span class=\"n\">Wall Brown</span><span class=\"t\"><i style=\"width:41.2%\"></i></span><span class=\"v\">56</span></div><div class=\"b\"><span class=\"n\">Small White</span><span class=\"t\"><i style=\"width:41.2%\"></i></span><span class=\"v\">56</span></div><div class=\"b\"><span class=\"n\">Old World Swallowtail</span><span class=\"t\"><i style=\"width:38.2%\"></i></span><span class=\"v\">52</span></div><div class=\"b\"><span class=\"n\">Painted Lady</span><span class=\"t\"><i style=\"width:37.5%\"></i></span><span class=\"v\">51</span></div><div class=\"b\"><span class=\"n\">Cleopatra</span><span class=\"t\"><i style=\"width:23.5%\"></i></span><span class=\"v\">32</span></div><div class=\"b\"><span class=\"n\">Clouded Yellow</span><span class=\"t\"><i style=\"width:20.6%\"></i></span><span class=\"v\">28</span></div><div class=\"b\"><span class=\"n\">Large White</span><span class=\"t\"><i style=\"width:12.5%\"></i></span><span class=\"v\">17</span></div></div>" }
            ] },
            { label: "Reading the site", rows: [
              { kind: "duo", tiles: [
                { src: "assets/wingit/detail/heat-annual.jpg", alt: "Annual solar heat on the site, in 3D", caption: "<b>Annual heat.</b> Hot spots at the open junctions and paved areas.", fit: "cover" },
                { src: "assets/wingit/detail/heat-seasons.jpg", alt: "Summer and winter heat side by side", caption: "<b>Summer and winter.</b> The same surfaces, season by season.", fit: "cover" }
              ] },
              { kind: "duo", tiles: [
                { src: "assets/wingit/detail/trees-map.jpg", alt: "Tree species and canopy", caption: "<b>Trees.</b> Species and canopy across the site.", fit: "cover" },
                { src: "assets/wingit/detail/permeability-map.jpg", alt: "Permeable and impermeable surfaces", caption: "<b>Permeability.</b> Where the ground can hold moisture.", fit: "cover" }
              ] },
              { kind: "html", html: "<div class=\"wi-facts\"><div><b>40&deg;C</b><span>above this, butterflies cannot fly</span></div><div><b>34%</b><span>of the ground is permeable today</span></div><div><b>3</b><span>maps read together: trees, ground, heat</span></div></div>" }
            ] },
            { label: "The design", rows: [
              { kind: "html", html: "<p class=\"um-sub\">SIX STRATEGIES</p><div class=\"wi-cards\"><div class=\"wi-card\"><svg class=\"wi-ic\" viewBox=\"0 0 32 32\" aria-hidden=\"true\"><circle cx=\"7\" cy=\"9\" r=\"4\" fill=\"#4f8a47\"/><circle cx=\"25\" cy=\"9\" r=\"4\" fill=\"#ee9b3a\"/><circle cx=\"16\" cy=\"25\" r=\"4\" fill=\"#d98ab0\"/><line x1=\"7\" y1=\"9\" x2=\"25\" y2=\"9\" stroke=\"#0c2036\" stroke-width=\"2\"/><line x1=\"7\" y1=\"9\" x2=\"16\" y2=\"25\" stroke=\"#0c2036\" stroke-width=\"2\"/><line x1=\"25\" y1=\"9\" x2=\"16\" y2=\"25\" stroke=\"#0c2036\" stroke-width=\"2\"/></svg><h4>Connections</h4><p>Place species so the habitat becomes one continuous corridor.</p></div><div class=\"wi-card\"><svg class=\"wi-ic\" viewBox=\"0 0 32 32\" aria-hidden=\"true\"><path d=\"M16 5 A11 11 0 1 1 6 20\" fill=\"none\" stroke=\"#4f8a47\" stroke-width=\"3.2\" stroke-linecap=\"round\"/><polygon points=\"3,16 11,21 4,26\" fill=\"#4f8a47\"/></svg><h4>Butterfly life cycle</h4><p>Support pollinators with food, shelter and habitat.</p></div><div class=\"wi-card\"><svg class=\"wi-ic\" viewBox=\"0 0 32 32\" aria-hidden=\"true\"><circle cx=\"10\" cy=\"16\" r=\"7\" fill=\"#ee9b3a\"/><circle cx=\"22\" cy=\"16\" r=\"7\" fill=\"#d98ab0\" opacity=\".9\"/></svg><h4>Human and non-human</h4><p>Buffers let both coexist.</p></div><div class=\"wi-card\"><svg class=\"wi-ic\" viewBox=\"0 0 32 32\" aria-hidden=\"true\"><ellipse cx=\"16\" cy=\"9\" rx=\"12\" ry=\"4.5\" fill=\"#3f7a3f\"/><ellipse cx=\"16\" cy=\"17\" rx=\"10\" ry=\"4\" fill=\"#6aa352\"/><ellipse cx=\"16\" cy=\"24\" rx=\"8\" ry=\"3.5\" fill=\"#a5cf8b\"/></svg><h4>Canopy layers</h4><p>A vertical structure for shade, cooling and biodiversity.</p></div><div class=\"wi-card\"><svg class=\"wi-ic\" viewBox=\"0 0 32 32\" aria-hidden=\"true\"><path d=\"M4 28 L4 16 A12 12 0 0 1 28 16 L28 28z\" fill=\"#4f8a47\"/><path d=\"M10 28 L10 18 A6 6 0 0 1 22 18 L22 28z\" fill=\"#fff\"/></svg><h4>Climate shelters</h4><p>A network of shaded rest and cooling spots.</p></div><div class=\"wi-card\"><svg class=\"wi-ic\" viewBox=\"0 0 32 32\" aria-hidden=\"true\"><rect x=\"3\" y=\"5\" width=\"26\" height=\"6\" fill=\"#9a948f\"/><rect x=\"3\" y=\"13\" width=\"26\" height=\"6\" fill=\"#c8b78a\"/><rect x=\"3\" y=\"21\" width=\"26\" height=\"6\" fill=\"#4f8a47\"/></svg><h4>Surface variation</h4><p>Mix permeable and non-permeable ground to manage water and comfort.</p></div></div>" },
              { kind: "html", html: "<p class=\"um-sub\">EIGHT GUIDELINES</p><div class=\"wi-guides\"><div><span class=\"n\">1</span><h4>Thermal sinks</h4><p>Replace unused asphalt in green patches with permeable topsoil, moss and low groundcover.</p></div><div><span class=\"n\">2</span><h4>Two-species canopy</h4><p>A tall plane tree over a flowering or host mid-story tree.</p></div><div><span class=\"n\">3</span><h4>Wind-buffering borders</h4><p>Dense, low, wind-resistant shrubs along open street edges.</p></div><div><span class=\"n\">4</span><h4>Life-cycle patches</h4><p>A 50/50 mix of host plants and nectar plants.</p></div><div><span class=\"n\">5</span><h4>Coexistence shelters</h4><p>At junctions, a shaded human zone around a protected non-human core.</p></div><div><span class=\"n\">6</span><h4>A food calendar</h4><p>Blooms overlap across all four seasons: no gaps.</p></div><div><span class=\"n\">7</span><h4>Protected entrances</h4><p>Zero-intervention buffers around doors, ramps, benches and terraces.</p></div><div><span class=\"n\">8</span><h4>Basking stones</h4><p>Flat, dark stones in the sun-exposed margins.</p></div></div>" }
            ] },
            { label: "The street", rows: [
              { kind: "tri", tiles: [
                { src: "assets/wingit/detail/plan-surfaces.jpg", alt: "Plan of surface types", caption: "<b>Surfaces.</b> Pavement, semipermeable, permeable.", fit: "cover" },
                { src: "assets/wingit/detail/plan-street.jpg", alt: "Street design plan", caption: "<b>Street design.</b> Planters and pedestrian paths.", fit: "cover" },
                { src: "assets/wingit/detail/plan-vegetation.jpg", alt: "Vegetation layers and climate shelters", caption: "<b>Planting.</b> Layers and shelters.", fit: "cover" }
              ] },
              { kind: "tri", tiles: [
                { src: "assets/wingit/detail/section-a.jpg", alt: "Section A", caption: "<b>Section A.</b> Human and non-human zones.", fit: "cover" },
                { src: "assets/wingit/detail/section-b.jpg", alt: "Section B", caption: "<b>Section B.</b> Seating beside flowering planters.", fit: "cover" },
                { src: "assets/wingit/detail/section-c.jpg", alt: "Section C", caption: "<b>Section C.</b> Canopy layers.", fit: "cover" }
              ] },
              { kind: "solo", tiles: [
                { src: "assets/wingit/detail/longitudinal.jpg", alt: "Longitudinal section with a water mist installation and stair seating", caption: "<b>Along the street.</b> A water-mist installation and stair seating at the junction.", fit: "cover" }
              ] }
            ] },
            { label: "What it achieves", rows: [
              { kind: "html", html: "<div class=\"wa-grid\"><div class=\"wa-card\"><p class=\"k\">PERMEABLE SURFACE</p><p class=\"big\">34% &rarr; 62%</p><div class=\"wa-row\"><span class=\"who\">Today</span><span class=\"t\"><i class=\"a\" style=\"width:34%\"></i></span><b>34%</b></div><div class=\"wa-row\"><span class=\"who\">Proposed</span><span class=\"t\"><i class=\"b\" style=\"width:62%\"></i></span><b>62%</b></div><p class=\"s\">Almost double.</p></div><div class=\"wa-card\"><p class=\"k\">ABSORBED HEAT, KWH A YEAR</p><p class=\"big\">&minus;9%</p><div class=\"wa-row\"><span class=\"who\">Today</span><span class=\"t\"><i class=\"a\" style=\"width:100%\"></i></span><b>1,296,000</b></div><div class=\"wa-row\"><span class=\"who\">Proposed</span><span class=\"t\"><i class=\"b\" style=\"width:91.2%\"></i></span><b>1,181,700</b></div><p class=\"s\">About 9% less: 114,300 kWh a year.</p></div></div>" }
            ] }
          ]
        },
        images: [
          { src: "assets/wingit/hero.jpg", caption: "A microclimatic corridor for butterflies through the city" },
          { src: "assets/wingit/plan.jpg", caption: null },
          { src: "assets/wingit/site-map.jpg", caption: null },
          { src: "assets/wingit/permeability.jpg", caption: "Reading the street for permeability and shade" },
          { src: "assets/wingit/lifecycle.jpg", caption: "Following the butterfly life cycle, step by step" },
          { src: "assets/wingit/butterfly.jpg", caption: null },
          { src: "assets/wingit/shelter-sketch.jpg", caption: "Shade, shelter, and stepping stones for pollinators" }
        ] },
      { num: "03", category: "MUPD", categoryColor: "#6c436a", title: "Urban Mirror — a community art game for Trinitat Nova & Vella", meta: "Barcelona · IAAC, Master in Advanced Urban Planning and Data Analytics", year: "2026", color: "#c47ac0", href: "#urbanmirror-detail", id: "work-03", detailId: "urbanmirror-detail", cursorEmoji: "🟥🟨🟦🟩", img: "assets/cards/03.jpg", desc: "A participatory art installation on the pedestrian bridge between Trinitat Nova and Vella, where residents rearrange movable tiles to compose a living mosaic.",
        quick: {
          tags: [["PLACEMAKING", "#c47ac0"], ["COMMUNITY ART", "#935c90"], ["IAAC, MUPD01", "#0c2036"]],
          banner: "assets/urbanmirror/mosaic.jpg",
          result: "A wall game where passers-by slide art tiles to match their day, turning the everyday routes of Trinitat Nova and Trinitat Vella into a living, shared mosaic.",
          links: [["READ THE BLOG POST \u2197", "https://blog.iaac.net/urban-mirror/"]],
          stats: [["4", "locations along the pedestrian routes"], ["1", "rule: movement. There is no winning"], ["1\u2013\u221e", "players, building up over days"], ["2", "neighbourhoods linked: Trinitat Nova and Trinitat Vella"]],
          role: [["PROGRAMME", "IAAC, Master in Advanced Urban Planning and Data Analytics"], ["SITE", "Trinitat Nova & Trinitat Vella, Barcelona"], ["YEAR", "2026"], ["SKILLS", "Placemaking, participatory design, fabrication"]],
          groups: [
            { label: "The game", rows: [
              { kind: "html", html: "<p class=\"um-statement\">Walk up to a wall of small everyday moments, find one that matches your day, and slide an art tile over it. Another moment appears where the tile was, and the artwork changes. Nobody wins, and the wall is never finished.</p>" },
              { kind: "split", tiles: [
                { src: "assets/urbanmirror/players-render.jpg", alt: "People at the wall, sliding tiles", caption: "<b>People at the wall.</b> An impression of the installation in use.", big: true, fit: "cover" },
                { src: "assets/urbanmirror/prototype-final.jpg", alt: "The final prototype: a black frame holding art tiles", caption: "<b>The final prototype.</b> Art tiles on a grid of everyday moments.", fit: "cover" },
                { src: "assets/urbanmirror/playtest-wall.jpg", alt: "The paper prototype of the wall", caption: "<b>The paper prototype.</b> Each square holds a moment.", fit: "contain" }
              ] },
              { kind: "solo", tiles: [
                { src: "assets/urbanmirror/tile-gallery.jpg", alt: "The same wall rearranged into four compositions", caption: "<b>One wall, many pictures.</b> The same tiles, rearranged four ways.", fit: "contain" }
              ] }
            ] },
            { label: "How it works", rows: [
              { kind: "html", html: "<div class=\"um-demo\" aria-label=\"How the game works, in 12 seconds\"><div class=\"um-wall\"><div class=\"c\" style=\"grid-area:1/1\">Waited at Trinitat Nova at rush hour</div><div class=\"c\" style=\"grid-area:1/2\">Changed lines before sunset</div><div class=\"c\" style=\"grid-area:1/3\">Walked the park on a windy afternoon</div><div class=\"c\" style=\"grid-area:1/4\">Stood beneath the flyovers</div><div class=\"c\" style=\"grid-area:1/5\">Followed the river at dawn</div><div class=\"c\" style=\"grid-area:2/1\">Crossed the C-58 underpass at night</div><div class=\"c\" style=\"grid-area:2/2\">Shopped at the weekly market</div><div class=\"c\" style=\"grid-area:2/3\">Picked up my child from school</div><div class=\"c hit\" style=\"grid-area:2/4\">Waited at the bus stop in the rain</div><div class=\"c\" style=\"grid-area:2/5\">Rested on a bench at noon</div><div class=\"c\" style=\"grid-area:3/1\">Cycled along the river edge</div><div class=\"c\" style=\"grid-area:3/2\">Crossed the bridge to Verdun</div><div class=\"c\" style=\"grid-area:3/3\">Walked through a social-housing courtyard</div><div class=\"c\" style=\"grid-area:3/4\">Watched children play</div><div class=\"c\" style=\"grid-area:3/5\">Watered plants on my balcony</div><img class=\"t t-a\" src=\"assets/urbanmirror/tiles/a.jpg\" alt=\"\" style=\"grid-area:2/3\"><img class=\"t t-b\" src=\"assets/urbanmirror/tiles/b.jpg\" alt=\"\" style=\"grid-area:3/1\"><img class=\"t t-c\" src=\"assets/urbanmirror/tiles/c.jpg\" alt=\"\" style=\"grid-area:1/2\"><img class=\"t t-d\" src=\"assets/urbanmirror/tiles/d.jpg\" alt=\"\" style=\"grid-area:3/5\"><img class=\"t t-e\" src=\"assets/urbanmirror/tiles/e.jpg\" alt=\"\" style=\"grid-area:1/5\"></div><div class=\"um-caps\"><p class=\"cap cap1\"><b>1</b>Find a moment that matches your day.</p><p class=\"cap cap2\"><b>2</b>Slide any tile over it.</p><p class=\"cap cap3\"><b>3</b>A new moment appears where the tile was.</p><p class=\"cap cap4\"><b>4</b>Keep going. The wall keeps changing, and nobody wins.</p></div></div>" }
            ] },
            { label: "What the wall asks", rows: [
              { kind: "html", html: "<div class=\"um-prompts\"><span>If you waited at Trinitat Nova during rush hour.</span><span>If you changed lines at Trinitat Vella before sunset.</span><span>If you walked along Parc de la Trinitat on a windy afternoon.</span><span>If you stood beneath the flyovers of Nus de la Trinitat.</span><span>If you followed the path beside the Besòs River at dawn.</span><span>If you crossed the underpass of the C-58 Motorway at night.</span><span>If you shopped at the weekly market on Via Favència.</span><span>If you picked up your child from Escola Sant Jordi in Trinitat Nova.</span><span>If you climbed uphill from Plaça de la Trinitat.</span><span>If you rested on a bench in Parc de la Trinitat at noon.</span></div><p class=\"um-cap\"><b>A few of the moments on the wall.</b> Each location gets its own set, drawn from what happens there.</p>" }
            ] },
            { label: "Where it lives", rows: [
              { kind: "html", html: "<div class=\"um-nodes\"><figure class=\"um-node\"><div class=\"um-img\"><img src=\"assets/urbanmirror/node-tamariu.jpg\" alt=\"Child And Caretaker Node\" loading=\"lazy\"></div><figcaption><span class=\"tag\">CHILD AND CARETAKER NODE</span>Between a school and open public space, at Plaza at Carrer de Tamariu.</figcaption></figure><figure class=\"um-node\"><div class=\"um-img\"><img src=\"assets/urbanmirror/node-sarajevo.jpg\" alt=\"Exchange Node\" loading=\"lazy\"></div><figcaption><span class=\"tag\">EXCHANGE NODE</span>On the pedestrian bridge at Sarajevo Bridge.</figcaption></figure><figure class=\"um-node\"><div class=\"um-img\"><img src=\"assets/urbanmirror/node-elderly.jpg\" alt=\"Elderly Node\" loading=\"lazy\"><i class=\"ill\">Google Street View</i></div><figcaption><span class=\"tag\">ELDERLY NODE</span>A shaded seating plaza among orange and cherry blossom avenues, in front of the Civic Centre in Trinitat Vella.</figcaption></figure><figure class=\"um-node\"><div class=\"um-img\"><img src=\"assets/urbanmirror/node-metro.jpg\" alt=\"Mobility Node\" loading=\"lazy\"></div><figcaption><span class=\"tag\">MOBILITY NODE</span>Outside Trinitat Vella metro station, at Via de Barcino 95.</figcaption></figure></div>" }
            ] },
            { label: "Who plays, when, and how it is found", rows: [
              { kind: "html", html: "<p class=\"um-sub\">WHO PLAYS</p>" },
              { kind: "six", tiles: [
                { src: "assets/urbanmirror/who-01.png", alt: "Parents and children", caption: "<b>Parents and children</b>", fit: "contain" },
                { src: "assets/urbanmirror/who-02.png", alt: "Neighbours taking a break", caption: "<b>Neighbours taking a break</b>", fit: "contain" },
                { src: "assets/urbanmirror/who-03.png", alt: "Remote workers", caption: "<b>Remote workers</b>", fit: "contain" },
                { src: "assets/urbanmirror/who-04.png", alt: "Couples", caption: "<b>Couples</b>", fit: "contain" },
                { src: "assets/urbanmirror/who-05.png", alt: "Elders", caption: "<b>Elders</b>", fit: "contain" },
                { src: "assets/urbanmirror/who-06.png", alt: "Friendly neighbours", caption: "<b>Friendly neighbours</b>", fit: "contain" },
                { src: "assets/urbanmirror/who-07.png", alt: "Writers and artists", caption: "<b>Writers and artists</b>", fit: "contain" },
                { src: "assets/urbanmirror/who-08.png", alt: "Grandfathers", caption: "<b>Grandfathers</b>", fit: "contain" },
                { src: "assets/urbanmirror/who-09.png", alt: "Students", caption: "<b>Students</b>", fit: "contain" },
                { src: "assets/urbanmirror/who-10.png", alt: "Gardeners", caption: "<b>Gardeners</b>", fit: "contain" },
                { src: "assets/urbanmirror/who-11.png", alt: "Readers", caption: "<b>Readers</b>", fit: "contain" }
              ] },
              { kind: "html", html: "<p class=\"um-sub\">WHEN IT IS PLAYED</p>" },
              { kind: "quad", tiles: [
                { src: "assets/urbanmirror/when-1.png", alt: "School runs", caption: "<b>School runs.</b> Drop-off and pick-up hours.", fit: "contain" },
                { src: "assets/urbanmirror/when-2.png", alt: "Commuting peaks", caption: "<b>Commuting peaks.</b> Morning and evening.", fit: "contain" },
                { src: "assets/urbanmirror/when-3.png", alt: "Afternoon plazas", caption: "<b>Afternoon plazas.</b> Elderly residents at rest.", fit: "contain" },
                { src: "assets/urbanmirror/when-4.png", alt: "Weekends", caption: "<b>Weekends.</b> Neighbourhood activity.", fit: "contain" }
              ] },
              { kind: "html", html: "<p class=\"um-sub\">HOW IT IS FOUND</p>" },
              { kind: "found", tiles: [
                { src: "assets/urbanmirror/found-1.jpg", alt: "Visible on busy routes", caption: "<b>Visible on busy routes.</b> Passing pedestrians spot the installation along their regular path.", fit: "natural" },
                { src: "assets/urbanmirror/found-2.jpg", alt: "Curiosity from tile movement", caption: "<b>Curiosity from tile movement.</b> Someone notices the tiles, moves one, and the tile slides into a new spot.", fit: "natural" },
                { src: "assets/urbanmirror/found-3.jpg", alt: "Watching others", caption: "<b>Watching others.</b> Passing, curiosity, watching, participating.", fit: "natural" },
                { src: "assets/urbanmirror/found-4.jpg", alt: "Minimal signage", caption: "<b>Minimal signage.</b> A tile grid and a short instruction text prompt interaction.", fit: "natural" }
              ] }
            ] },
            { label: "What it opens up", rows: [
              { kind: "html", html: "<p class=\"um-statement\">It makes people pause and notice where they are, think back over their day, and start conversations. For planners it is a different kind of data: how people actually move, feel and linger.</p>" },
              { kind: "quad", tiles: [
                { src: "assets/urbanmirror/learn-1.svg", alt: "Two neighbourhoods and the paths between them", caption: "<b>Movement.</b> Key paths, barriers and social spaces.", fit: "contain" },
                { src: "assets/urbanmirror/learn-2.svg", alt: "A clock and bubbles for rushing, resting, talking and watching", caption: "<b>Rhythms.</b> Rushing, resting, socialising, observing.", fit: "contain" },
                { src: "assets/urbanmirror/learn-3.svg", alt: "A heart made of tiles", caption: "<b>Lived experience.</b> Where people pause and feel at ease.", fit: "contain" },
                { src: "assets/urbanmirror/learn-4.svg", alt: "A bar chart turning into tiles", caption: "<b>Beyond data.</b> Insight for welcoming public space.", fit: "contain" }
              ] }
            ] },
            { label: "Prototype and playtest", rows: [
              { kind: "duo", tiles: [
                { src: "assets/urbanmirror/model-3d.webp", alt: "A 3D model of the wall turning", caption: "<b>The wall in 3D.</b>", fit: "contain" },
                { src: "assets/urbanmirror/grid-top.webp", alt: "The grid seen from above, with tiles being moved", caption: "<b>From above.</b>", fit: "contain" }
              ] },
              { kind: "duo", tiles: [
                { src: "assets/urbanmirror/section.webp", alt: "The prototype in section: T-shaped pieces moving along the grid", caption: "<b>In section.</b> How the pieces move.", fit: "contain" },
                { src: "assets/urbanmirror/playtest-lap.jpg", alt: "The paper prototype held up for a playtest", caption: "<b>Playtest.</b> The paper prototype.", fit: "contain" }
              ] }
            ] },
            { label: "Watch", rows: [
              { kind: "html", html: "<div class=\"um-videos cards\"><a class=\"um-video\" href=\"https://drive.google.com/file/d/15zL0b8UHEhBVhrt6tDWAe3EMbGi5ytR5/view\" target=\"_blank\" rel=\"noopener\"><span class=\"play\">&#9654;</span><span class=\"tt\"><b>Our struggles</b><em>Making the prototype</em></span></a><a class=\"um-video\" href=\"https://drive.google.com/file/d/1_KPq3Z1mmoMOJTpY4zsAuQsdV4CazHkr/view\" target=\"_blank\" rel=\"noopener\"><span class=\"play\">&#9654;</span><span class=\"tt\"><b>Playtest, take 1</b><em>People moving tiles</em></span></a><a class=\"um-video\" href=\"https://drive.google.com/file/d/1-rp4Rm_l5NywAD-m527w7eYDtYrmXyNI/view\" target=\"_blank\" rel=\"noopener\"><span class=\"play\">&#9654;</span><span class=\"tt\"><b>Playtest, take 2</b><em>People moving tiles</em></span></a></div>" }
            ] }
          ]
        },
        images: [
          { src: "uploads/Screenshot 2026-09-08 182856.png", caption: "Everyday routines, composed into a living mosaic" },
          { src: "https://picsum.photos/seed/urbanmirror-mechanism/900/460", caption: "Movable tiles turn pause points into art" },
          { src: "https://picsum.photos/seed/urbanmirror-nodes/900/460", caption: "Four nodes, two neighbourhoods, one bridge" },
          { src: "https://picsum.photos/seed/urbanmirror-prototype/900/460", caption: "Tested on site, tile by tile" }
        ] },
      { num: "04", category: "MUPD", categoryColor: "#6c436a", title: "Collectively Forward — data-driven regeneration for Barcelona", meta: "Barcelona · IAAC, Master in Advanced Urban Planning and Data Analytics", year: "2026", color: "#6c436a", href: "#collectively-detail", id: "work-04", detailId: "collectively-detail", cursorEmoji: "🌱", img: "assets/cards/04.jpg", desc: "A twelve-layer spatial vulnerability model guiding ecological and social regeneration across two fragmented Barcelona neighbourhoods.",
        quick: {
          tags: [["C40 REINVENTING CITIES", "#6c436a"], ["SPATIAL DATA ANALYSIS", "#c47ac0"], ["IAAC, MUPD01", "#0c2036"]],
          banner: "assets/collectively/new/banner.jpg",
          result: "A masterplan for two Barcelona neighbourhoods divided by infrastructure. Twelve layers are scored on a 50 m grid to find where to act first, and every open space is scored out of 100.",
          stats: [["12", "layers, each scored 1 to 3 on a 50 \u00d7 50 m grid"], ["0.4 / 0.4 / 0.2", "weights: physical, ecological, social"], ["16", "kinds of open space scored out of 100"], ["15", "nodes on one continuous green loop"]],
          role: [["PROGRAMME", "IAAC, Master in Advanced Urban Planning and Data Analytics"], ["SITE", "Trinitat Nova & Trinitat Vella, Barcelona"], ["YEAR", "2026"], ["TEAM", "Group project, IAAC"]],
          groups: [
            { label: "Introduction", rows: [
              { kind: "html", html: "<div class=\"wi-facts\"><div><b>7,965</b><span>residents in Trinitat Nova, 0.56 km&sup2;</span></div><div><b>11,160</b><span>residents in Trinitat Vella, 0.81 km&sup2;</span></div><div><b>1.7 million</b><span>residents in Barcelona, 101.35 km&sup2;</span></div><div><b>332 &rarr; 95 ha</b><span>from study area to intervention area</span></div></div>" },
              { kind: "tri", tiles: [
                { src: "assets/collectively/deck/loc-spain.jpg", alt: "Barcelona in Spain", caption: "<b>Where is Trinitat?</b> Barcelona, in Catalonia.", fit: "contain" },
                { src: "assets/collectively/deck/loc-bcn.jpg", alt: "The districts of Barcelona", caption: "<b>The city.</b> Barcelona's districts.", fit: "contain" },
                { src: "assets/collectively/deck/loc-districts.jpg", alt: "Nou Barris, Sant Andreu and Santa Coloma de Gramenet", caption: "<b>The meeting point.</b> Nou Barris, Sant Andreu and Santa Coloma de Gramenet.", fit: "contain" }
              ] },
              { kind: "solo", tiles: [
                { src: "assets/collectively/deck/site-pano.jpg", alt: "Avinguda Meridiana between the two neighbourhoods", caption: "<b>Avinguda Meridiana.</b> A regional corridor, and a barrier to walking and ecology.", fit: "cover" }
              ] },
              { kind: "five", tiles: [
                { src: "assets/collectively/deck/site-1.jpg", alt: "Stairs with an escalator", caption: "<b>Stairs.</b>", fit: "cover" },
                { src: "assets/collectively/deck/site-2.jpg", alt: "A steel pergola", caption: "<b>Pergola.</b>", fit: "cover" },
                { src: "assets/collectively/deck/site-3.jpg", alt: "Brick housing beside steps", caption: "<b>Housing.</b>", fit: "cover" },
                { src: "assets/collectively/deck/site-4.jpg", alt: "A footpath", caption: "<b>Footpath.</b>", fit: "cover" },
                { src: "assets/collectively/deck/site-5.jpg", alt: "A building on the route", caption: "<b>On the route.</b>", fit: "cover" }
              ] },
              { kind: "html", html: "<p class=\"um-sub\">THE SITE AGAINST BARCELONA</p>" },
              { kind: "quad", tiles: [
{ src: "assets/collectively/deck/card-green.jpg?v=2", alt: "Green space per resident", caption: "<b>Green space.</b> Per resident.", fit: "contain" },
{ src: "assets/collectively/deck/card-income.jpg?v=2", alt: "Household income index", caption: "<b>Income.</b> Household index.", fit: "contain" },
{ src: "assets/collectively/deck/card-mental.jpg?v=2", alt: "Residents with mental health problems", caption: "<b>Mental health.</b> Trinitat Nova.", fit: "contain" },
{ src: "assets/collectively/deck/card-loneliness.jpg?v=2", alt: "Elderly suffering unwanted loneliness", caption: "<b>Loneliness.</b> Elderly residents.", fit: "contain" },
{ src: "assets/collectively/deck/card-school.jpg?v=2", alt: "Early school leaving rate", caption: "<b>School leaving.</b> Early rate.", fit: "contain" },
{ src: "assets/collectively/deck/card-unemployment.jpg?v=2", alt: "Registered unemployment rate", caption: "<b>Unemployment.</b> Registered.", fit: "contain" },
{ src: "assets/collectively/deck/card-foreign.jpg?v=2", alt: "Foreign-born population", caption: "<b>Foreign-born.</b> Share of residents.", fit: "contain" }
              ] },
              { kind: "html", html: "<p class=\"um-sub\">NEWS ALERTS</p>" },
              { kind: "html", html: "<p class=\"um-cap\">Public narratives point to inequality and infrastructural pressure. Community-led initiatives show the landscape can regenerate.</p>" },
              { kind: "quad", tiles: [
                { src: "assets/collectively/deck/news-caritas.jpg", alt: "Caritas report on social fragmentation", caption: "<b>Social fragmentation.</b> Caritas warns of a deepening divide.", fit: "contain" },
                { src: "assets/collectively/deck/news-bcn.jpg", alt: "Urban agriculture in Trinitat Nova", caption: "<b>Urban agriculture.</b> Nature and sustainability in Trinitat Nova.", fit: "contain" },
                { src: "assets/collectively/deck/news-housing.jpg", alt: "Public housing on the former prison site", caption: "<b>New homes.</b> Public housing on the former prison site.", fit: "contain" },
                { src: "assets/collectively/deck/news-chain.jpg", alt: "Human chain between the two neighbourhoods", caption: "<b>A human chain.</b> Residents ask for the L3 to be extended.", fit: "contain" }
              ] },
              { kind: "html", html: "<p class=\"um-sub\">THE C40 BRIEF</p>" },
              { kind: "html", html: "<div class=\"cf-brief\"><div class=\"h\"><span>THE C40 BRIEF</span><p>Reconnect a fragmented urban fabric through sustainable design and community-centred interventions.</p></div><div class=\"g\"><div><b>The challenge</b><ul><li>Disconnection caused by the highways</li><li>Scattered housing and underused green space</li><li>Weak links to nature and public space</li></ul></div><div><b>The task</b><ul><li>Reconnect and integrate infrastructure (mobility), community (social life) and landscape (ecology)</li></ul></div><div><b>The outcome</b><ul><li>A cohesive, inclusive, climate-responsive urban environment</li></ul></div><div><b>Already under way</b><ul><li>ReGreeneration Project: 8,640 m&sup2; of new green areas</li><li>Trinitat Vella prison redevelopment: 129 homes</li></ul></div></div></div>" },
              { kind: "duo", tiles: [
                { src: "assets/collectively/deck/brief-plan.jpg", alt: "ReGreeneration project plan", caption: "<b>ReGreeneration.</b> 8,640 m&sup2; of new green areas.", fit: "contain" },
                { src: "assets/collectively/deck/brief-prison.jpg", alt: "Work under way around the former Trinitat Vella prison", caption: "<b>The former prison.</b> 129 homes and open space.", fit: "contain" }
              ] }
            ] },
            { label: "Contextual inquiry", rows: [
              { kind: "duo", tiles: [
                { src: "assets/collectively/deck/site-aerial.jpg", alt: "Barcelona from above with the site marked", caption: "<b>The site.</b> In the north of Barcelona.", fit: "cover" },
                { src: "assets/collectively/deck/site-study.jpg", alt: "Study area and intervention area", caption: "<b>Two scales.</b> Study area 332 ha (dotted), intervention area 95 ha (red).", fit: "contain" }
              ] },
              { kind: "html", html: "<p class=\"um-sub\">HISTORY</p>" },
              { kind: "five", tiles: [
                { src: "assets/collectively/deck/hist-1950.jpg", alt: "Early housing blocks", caption: "<b>1950s.</b> Social housing begins under Franco-era policies; migration from the countryside.", fit: "cover" },
                { src: "assets/collectively/deck/hist-1960.jpg", alt: "Aerial view of the area", caption: "<b>1960s.</b> Migration influx and the expansion of Avinguda Meridiana: the first division.", fit: "cover" },
                { src: "assets/collectively/deck/hist-1970.jpg", alt: "Demonstration for autonomy", caption: "<b>1970s.</b> Democratic mobilisation and growing demand for services.", fit: "cover" },
                { src: "assets/collectively/deck/hist-1980.jpg", alt: "Metro Line 1 in 1975", caption: "<b>1980s.</b> Metro Line 1 extension and more densification.", fit: "contain" },
                { src: "assets/collectively/deck/hist-1990.jpg", alt: "The Trinitat Nova metro entrance", caption: "<b>1990s to now.</b> Housing renewal and infrastructure upgrades.", fit: "cover" }
              ] },
              { kind: "html", html: "<p class=\"um-sub\">SPATIAL CONTEXT</p>" },
              { kind: "solo", tiles: [
                { src: "assets/collectively/deck/spatial-map-marked.jpg", alt: "Collserola, the neighbourhoods, the Avinguda Meridiana corridor and the Besòs", caption: "<b>The setting.</b> The eastern foothills of Collserola, the Meridiana corridor, and the Besòs river.", fit: "contain" }
              ] },
              { kind: "quad", tiles: [
                { src: "assets/collectively/deck/ctx-collserola.jpg", alt: "The eastern foothill of Collserola", caption: "<b>Collserola.</b> Eastern foothill.", fit: "cover" },
                { src: "assets/collectively/deck/ctx-nova.jpg", alt: "Planned housing in Trinitat Nova", caption: "<b>Trinitat Nova.</b> Planned housing.", fit: "cover" },
                { src: "assets/collectively/deck/ctx-vella.jpg", alt: "Trinitat Vella", caption: "<b>Trinitat Vella.</b> Dense, historic fabric.", fit: "cover" },
                { src: "assets/collectively/deck/ctx-meridiana.jpg", alt: "Avinguda Meridiana", caption: "<b>Avinguda Meridiana.</b> The dividing corridor.", fit: "cover" }
              ] },
              { kind: "tri", tiles: [
                { src: "assets/collectively/deck/ctx-sarajevo.jpg", alt: "The Sarajevo bridge", caption: "<b>Pont de Sarajevo.</b> The only pedestrian link.", fit: "cover" },
                { src: "assets/collectively/deck/ctx-besos.jpg", alt: "The Besòs", caption: "<b>The Besòs.</b>", fit: "cover" },
                { src: "assets/collectively/deck/ctx-canzam.jpg", alt: "Parc Can Zam", caption: "<b>Parc Can Zam.</b>", fit: "cover" }
              ] },
              { kind: "html", html: "<p class=\"um-sub\">ECOLOGICAL CONTEXT</p>" },
              { kind: "html", html: "<div class=\"wi-facts\"><div><b>5,550</b><span>species in Serra de Collserola</span></div><div><b>15,000</b><span>residents served</span></div><div><b>35,000</b><span>annual visitors</span></div></div>" },
{ kind: "html", html: "<p class=\"um-sub\">CULTURAL CONTEXT</p>" },
              { kind: "five", tiles: [
                { src: "assets/collectively/deck/mural-1.jpg", alt: "Mural: women of the Trinitat", caption: "<b>Women of the Trinitat.</b> A tribute, with Matilde Climent.", fit: "cover" },
                { src: "assets/collectively/deck/mural-2.jpg", alt: "Mural: the elderly", caption: "<b>The elderly.</b> Memory and collective identity.", fit: "cover" },
                { src: "assets/collectively/deck/mural-3.jpg", alt: "Mural: creativity and participation", caption: "<b>Creativity.</b> Inclusion and community participation.", fit: "cover" },
                { src: "assets/collectively/deck/mural-4.jpg", alt: "Mural: 3D painting", caption: "<b>Memory.</b> Optical illusions in 3D painting.", fit: "cover" },
                { src: "assets/collectively/deck/mural-5.jpg", alt: "Mural: migrant families", caption: "<b>Migrant families.</b> Who arrived from the south of Spain.", fit: "cover" }
              ] },
              { kind: "html", html: "<p class=\"um-sub\">DEMOGRAPHIC CONTEXT</p>" },
              { kind: "html", html: "<div class=\"cf-demo\"><div><h4>Trinitat Nova</h4><p><b>7,965</b> residents</p><p>4,131 men (51.9%), 3,834 women (48.1%)</p><p>69.7% of working age</p><p>74.7% Spanish nationals</p></div><div><h4>Trinitat Vella</h4><p><b>11,160</b> residents</p><p>5,529 men (49.5%), 5,631 women (50.5%)</p><p>69.2% of working age</p><p>68.3% Spanish nationals</p></div></div>" },
              { kind: "html", html: "<p class=\"um-sub\">RESIDENT VOICES</p>" },
              { kind: "duo", tiles: [
                { src: "assets/collectively/interview-personas.png", alt: "Resident interviews", caption: "<b>Resident voices.</b> Both neighbourhoods; many origins.", fit: "contain" },
                { src: "assets/collectively/deck/voices-sentiment.jpg?v=2", alt: "Sentiment: 68% positive, 18% negative, 14% neutral", caption: "<b>Sentiment.</b> Largely positive: strong social resilience.", fit: "contain" }
              ] }
            ] },
            { label: "Research structure", rows: [
              { kind: "html", html: "<div class=\"wi-cards\"><div class=\"wi-card\"><h4>Urban issue</h4><p>City-scale infrastructure has fractured the neighbourhood fabric, breaking ecological continuity between Collserola and the Besòs and constraining everyday mobility.</p></div><div class=\"wi-card\"><h4>Research question</h4><p>How can spatial strategies restore ecological connectivity and urban integration across fragmented neighbourhoods?</p></div><div class=\"wi-card\"><h4>Vision</h4><p>A connected, living urban system where ecological continuity and social cohesion reinforce each other.</p></div></div>" },
              { kind: "html", html: "<div class=\"cf-verbs\"><div class=\"a\"><h4>Reconnect</h4><span>movement</span><p>Bridge over the Besòs, travelator, crossings, cycle lanes, shaded rest points, wayfinding.</p></div><div class=\"b\"><h4>Restore</h4><span>nature</span><p>Canopy planting, vegetation buffers, bioswales, permeable paving, ecological learning.</p></div><div class=\"c\"><h4>Reintegrate</h4><span>community</span><p>Gathering space, community gardens, art walls, heritage panels, and Urban Mirror.</p></div></div>" },
              { kind: "html", html: "<p class=\"um-sub\">RESEARCH METHODOLOGY</p>" },
              { kind: "html", html: "<p class=\"um-cap\">Four phases: contextual inquiry; data collection and analysis; identification of intervention sites; design. Stakeholder input refines each stage.</p>" },
              { kind: "html", html: "<div class=\"cf-flow\"><div><b>1</b>Frame</div><i class=\"arr\">&rsaquo;</i><div><b>2</b>Collect</div><i class=\"arr\">&rsaquo;</i><div><b>3</b>Analyse</div><i class=\"arr\">&rsaquo;</i><div><b>4</b>Identify</div><i class=\"arr\">&rsaquo;</i><div><b>5</b>Prioritise</div><i class=\"arr\">&rsaquo;</i><div><b>6</b>Strategise</div><i class=\"arr\">&rsaquo;</i><div><b>7</b>Design</div></div>" }
            ] },
            { label: "Data analysis and findings", rows: [
              { kind: "html", html: "<p class=\"um-cap\"><b>Twelve layers, one grid.</b> Each dataset is placed on a 50 &times; 50 m grid, and each cell gets a score from 1 to 3 against set thresholds. Each map below flips to its scored version, so you can see the measure become a score. For example, urban tissue is measured by streets per cell, from well connected to isolated.</p>" },
              { kind: "html", html: "<p class=\"um-sub\">PHYSICAL (P1 TO P4)</p>" },
              { kind: "quad", tiles: [
                { src: "assets/collectively/scoring/gif/p1-urban-tissue.gif", alt: "Street edge density", caption: "<b>P1 Urban tissue.</b> Street edge density.", fit: "cover" },
                { src: "assets/collectively/scoring/gif/p2-barriers.gif", alt: "Fragmentation by vehicular infrastructure", caption: "<b>P2 Physical barriers.</b> Fragmentation by roads.", fit: "cover" },
                { src: "assets/collectively/scoring/gif/p3-pedestrian.gif", alt: "Walking isochrone to the metro", caption: "<b>P3 Pedestrian access.</b> Walk to the metro.", fit: "cover" },
                { src: "assets/collectively/scoring/gif/p4-slope.gif", alt: "Contour count per cell", caption: "<b>P4 Slope.</b> Contours per cell.", fit: "cover" }
              ] },
              { kind: "html", html: "<p class=\"um-sub\">ECOLOGICAL (E1 TO E4)</p>" },
              { kind: "quad", tiles: [
                { src: "assets/collectively/scoring/gif/e3-natural-assets.gif", alt: "Closest neighbourhood from Collserola and the Besòs", caption: "<b>E1 Natural assets.</b> Closeness to Collserola and the Besòs.", fit: "cover" },
                { src: "assets/collectively/scoring/gif/e1-vegetation.gif", alt: "Vegetation cover", caption: "<b>E2 NDVI vegetation.</b> Vegetation cover.", fit: "cover" },
                { src: "assets/collectively/scoring/gif/e2-green-access.gif", alt: "Walking isochrone to parks", caption: "<b>E3 Green space access.</b> Neighbourhood grain and parks.", fit: "cover" },
                { src: "assets/collectively/scoring/gif/e4-noise.gif", alt: "Population exposed to noise", caption: "<b>E4 Noise stressors.</b> Population exposed.", fit: "cover" }
              ] },
              { kind: "html", html: "<p class=\"um-sub\">SOCIAL (S1 TO S4)</p>" },
              { kind: "quad", tiles: [
                { src: "assets/collectively/scoring/gif/s1-vulnerability.gif", alt: "Age and income per census tract", caption: "<b>S1 Vulnerability.</b> Age and income per tract.", fit: "cover" },
                { src: "assets/collectively/scoring/gif/s2-cohesion.gif", alt: "Potential for social cohesion", caption: "<b>S2 Social cohesion.</b> Among residents.", fit: "cover" },
                { src: "assets/collectively/scoring/gif/s3-community.gif", alt: "Civic facilities within 200 m", caption: "<b>S3 Community spaces.</b> Civic facilities within 200 m.", fit: "cover" },
                { src: "assets/collectively/scoring/gif/s4-building-age.gif", alt: "Mean construction year per cell", caption: "<b>S4 Building age.</b> Mean year per cell.", fit: "cover" }
              ] },
              { kind: "html", html: "<p class=\"um-sub\">THREE CUMULATIVE MAPS, ONE WEIGHTED MODEL</p>" },
              { kind: "tri", tiles: [
                { src: "assets/collectively/scoring/cum-physical.jpg", alt: "Cumulative physical score", caption: "<b>Physical.</b> P1 to P4.", fit: "cover" },
                { src: "assets/collectively/scoring/cum-ecological.jpg", alt: "Cumulative ecological score", caption: "<b>Ecological.</b> E1 to E4.", fit: "cover" },
                { src: "assets/collectively/scoring/cum-social.jpg", alt: "Cumulative social score", caption: "<b>Social.</b> S1 to S4.", fit: "cover" }
              ] },
              { kind: "html", html: "<div class=\"cf-stack\"><div style=\"flex:40\" class=\"p\"><b>Physical</b>&times; 0.40</div><div style=\"flex:40\" class=\"e\"><b>Ecological</b>&times; 0.40</div><div style=\"flex:20\" class=\"s\"><b>Social</b>&times; 0.20</div></div><p class=\"um-cap\"><b>Why these weights.</b> Physical and ecological count equally: a corridor depends on both access and ecological repair. Social counts less: it reflects impact more than spatial priority, and its vulnerability is high but uniform. A MAX aggregation step ensured that critical conditions were not averaged out.</p>" },
              { kind: "solo", tiles: [
                { src: "assets/collectively/scoring/composite.jpg", alt: "Final weighted model", caption: "<b>The final weighted model.</b> Scores of 1.0 to 3.0, split by Jenks natural breaks into low priority, moderate and critical.", fit: "contain" }
              ] },
              { kind: "html", html: "<p class=\"um-sub\">CRITICAL AND PRIORITY INTERVENTION ZONES</p>" },
              { kind: "html", html: "<p class=\"um-cap\">Laid over the site, the model shows the critical clusters. High-stress zones run along Avinguda Meridiana (noise, heat, fragmentation). More follow the B-10, which reinforces the separation between Trinitat Vella and the Besòs. Priority zones are not fully critical but still need targeted action.</p>" },
              { kind: "solo", tiles: [
{ src: "assets/collectively/deck/zones-map.jpg", alt: "Critical and priority zones over the site", caption: "<b>The zones.</b> Critical and priority areas on the site map.", fit: "contain" }
              ] },
              { kind: "duo", tiles: [
{ src: "assets/collectively/deck/zones-meridiana.jpg", alt: "Avinguda Meridiana", caption: "<b>Avinguda Meridiana.</b>", fit: "cover" },
{ src: "assets/collectively/deck/zones-besos.jpg", alt: "The Besòs edge", caption: "<b>The Besòs edge.</b>", fit: "cover" }
              ] },
              { kind: "html", html: "<p class=\"um-sub\">STAKEHOLDERS</p>" },
              { kind: "solo", tiles: [
                { src: "assets/collectively/stakeholders.png", alt: "Resources, project and beneficiaries", caption: "<b>Who makes it happen.</b> EU ReGreeneration and C40; the city, districts and TMB; neighbourhood associations and green maintenance.", fit: "contain" }
              ] },
              { kind: "html", html: "<p class=\"um-sub\">ENVIRONMENTAL INEQUITY</p>" },
              { kind: "duo", tiles: [
                { src: "assets/collectively/new/map-inequity-air.jpg", alt: "NO2 concentration, vulnerable population and green spaces", caption: "<b>Unequal air.</b> Major roads create unequal exposure.", fit: "contain" },
                { src: "assets/collectively/new/map-inequity-heat.jpg", alt: "Thermal comfort and vulnerable population", caption: "<b>Unequal heat.</b> Dense, treeless, sun-exposed places.", fit: "contain" }
              ] },
              { kind: "html", html: "<p class=\"um-sub\">OPEN SPACE TYPOLOGIES AND PERFORMANCE</p>" },
              { kind: "duo", tiles: [
                { src: "assets/collectively/new/map-openspace.jpg", alt: "Open space typologies", caption: "<b>Every open space typed.</b>", fit: "contain" },
                { src: "assets/collectively/new/map-openspace-scored.jpg", alt: "Open spaces scored out of 100", caption: "<b>Scored out of 100.</b> Traffic islands lowest, Collserola highest.", fit: "contain" }
              ] },
              { kind: "html", html: "<div class=\"wi-bars\"><div class=\"b\"><span class=\"n\">Biodiversity</span><span class=\"t\"><i style=\"width:100%\"></i></span><span class=\"v\">25%</span></div><div class=\"b\"><span class=\"n\">Ecological</span><span class=\"t\"><i style=\"width:100%\"></i></span><span class=\"v\">25%</span></div><div class=\"b\"><span class=\"n\">Environmental</span><span class=\"t\"><i style=\"width:80%\"></i></span><span class=\"v\">20%</span></div><div class=\"b\"><span class=\"n\">Social</span><span class=\"t\"><i style=\"width:60%\"></i></span><span class=\"v\">15%</span></div><div class=\"b\"><span class=\"n\">Connectivity</span><span class=\"t\"><i style=\"width:60%\"></i></span><span class=\"v\">15%</span></div></div>" }
            ] },
            { label: "Design framework and masterplan", rows: [
              { kind: "html", html: "<p class=\"um-sub\">PLANT PALETTE</p>" },
              { kind: "html", html: "<p class=\"um-cap\">Species were scored on <b>13 urban performance traits</b>, then grouped and matched to five kinds of place.</p>" },
              { kind: "duo", tiles: [
                { src: "assets/collectively/deck/palette-13.jpg", alt: "The 13 traits", caption: "<b>13 traits.</b> From pollution tolerance to maintenance burden.", fit: "contain" },
                { src: "assets/collectively/deck/palette-pca.jpg", alt: "Species grouped by cluster", caption: "<b>Clusters.</b> Social, productive, multi-use and island species.", fit: "contain" }
              ] },
              { kind: "html", html: "<div class=\"cf-pal\"><div><h4>Road and street corridors</h4><p class=\"k\">Pollution tolerance, shade, low root damage, salt resistance</p><p>Carob, olive, European hackberry, London plane, holm oak</p></div><div><h4>Traffic islands and medians</h4><p class=\"k\">Drought, low fire risk, low maintenance, compact form</p><p>Bermuda grass, sea squill, Mediterranean fan palm, common ivy, oleander</p></div><div><h4>Productive landscapes</h4><p class=\"k\">Edible value, pollinator support, biodiversity, fragrance</p><p>Mastic, rosemary, lavender, black locust, olive</p></div><div><h4>Parks and green reserves</h4><p class=\"k\">Biodiversity, canopy, noise buffer, low maintenance</p><p>Aleppo pine, stone pine, European hackberry, London plane, holm oak, Italian cypress</p></div><div><h4>Public social nodes</h4><p class=\"k\">Shade, fragrance, low allergen, structural form</p><p>London plane, holm oak, magnolia, tipuana</p></div></div>" },
              { kind: "html", html: "<p class=\"um-sub\">DESIGN STRATEGIES</p>" },
              { kind: "html", html: "<div class=\"wi-cards\"><div class=\"wi-card\"><h4>Climate adaptation and cooling</h4><p>Layered canopy and microclimate pockets.</p></div><div class=\"wi-card\"><h4>Ecological continuity</h4><p>Multi-scalar habitat stitching, with layered habitat structure.</p></div><div class=\"wi-card\"><h4>Community and culture</h4><p>Micro-public spaces and a layered narrative landscape.</p></div><div class=\"wi-card\"><h4>Mobility and walkability</h4><p>A pedestrian-first, continuous mobility spine.</p></div></div>" },
              { kind: "html", html: "<p class=\"um-sub\">DESIGN ELEMENTS</p>" },
              { kind: "solo", tiles: [
                { src: "assets/collectively/new/design-icons.jpg", alt: "Isometric icons for each design element", caption: "<b>The toolkit.</b> Movement, nature and community, drawn as small icons.", fit: "contain" }
              ] },
              { kind: "html", html: "<p class=\"um-sub\">MASTERPLAN</p>" },
              { kind: "html", html: "<div class=\"cf-seg\"><div class=\"e\"><h4>Ecological nodes</h4><ul><li>Hiking path and ecological corridor</li><li>Shaded mobility green corridors</li><li>Mobility corridors with planting, stormwater and cycling</li><li>Edible and productive landscapes</li><li>Formal urban parks</li><li>Dense layered vegetation buffer</li><li>Tree-planted hardscape</li><li>Narrow lanes, edge-based</li><li>Citrus and cherry blossom avenues</li><li>Landscaped lawns with trees</li><li>River edge</li><li>Former penitentiary edge</li></ul></div><div class=\"s\"><h4>Social nodes</h4><ul><li>Metro Trinitat Nova trailhead</li><li>Social node activation, with urban games</li><li>Children's playscapes (ecological learning)</li><li>Community centre plaza, Trinitat Vella</li><li>Community-led pocket park</li></ul></div><div class=\"c\"><h4>Connections</h4><ul><li>Besòs Bridge across the river and highway</li><li>Sarajevo widening: a green pedestrian and cycling bridge</li></ul></div></div>" }
            ] },
            { label: "Intervention sites and conclusion", rows: [
              { kind: "html", html: "<p class=\"um-sub\">A HIKE FROM TRINITAT NOVA TO COLLSEROLA</p>" },
              { kind: "html", html: "<div class=\"cf-route\"><div><b>1</b>Trinitat Nova metro</div><i class=\"arr\">&rsaquo;</i><div><b>2</b>Castell de Torre Baró</div><i class=\"arr\">&rsaquo;</i><div><b>3</b>Passeig de les Aigües</div><i class=\"arr\">&rsaquo;</i><div><b>4</b>Font Vella</div><i class=\"arr\">&rsaquo;</i><div><b>5</b>Font Nova</div><i class=\"arr\">&rsaquo;</i><div><b>6</b>Església de Sant Iscle i Santa Victòria</div><i class=\"arr\">&rsaquo;</i><div><b>7</b>Can Catà masía</div></div>" },
              { kind: "duo", tiles: [
                { src: "assets/collectively/new/r-hike.jpg", alt: "A signed hike point with information boards", caption: "<b>The trail.</b> Wayfinding, boards and shaded rest points.", fit: "cover" },
                { src: "assets/collectively/new/r-metro.jpg", alt: "Metro Trinitat Nova as a trailhead gateway", caption: "<b>Metro Trinitat Nova.</b> From transit stop to trailhead and civic plaza.", fit: "cover" }
              ] },
              { kind: "duo", tiles: [
                { src: "assets/collectively/new/r-sarajevo.jpg", alt: "Sarajevo Bridge as a planted shared landscape", caption: "<b>Sarajevo Bridge.</b> A shared, planted landscape with play and seating.", fit: "cover" },
                { src: "assets/collectively/new/r-vella-green.jpg", alt: "A green street in Trinitat Vella", caption: "<b>Green streets.</b> A pollution buffer along Meridiana.", fit: "cover" }
              ] },
              { kind: "duo", tiles: [
                { src: "assets/collectively/new/r-vella-lane.jpg", alt: "A narrow lane with slim planters and seating", caption: "<b>Narrow lanes.</b> Slim planters, small seats, no widening.", fit: "cover" },
                { src: "assets/collectively/new/r-loop.jpg", alt: "People sliding tiles on the wall installation", caption: "<b>Urban Mirror.</b> Residents rearrange movable tiles on a wall.", fit: "cover" }
              ] },
              { kind: "html", html: "<p class=\"um-cap\"><b>Also proposed: a footbridge.</b> A 530 m Y-shaped walking and cycling bridge links Trinitat Vella to Park Can Zam over the Besòs and a nine-lane highway.</p>" },
              { kind: "html", html: "<p class=\"um-cap\"><b>Urban Mirror.</b> A participatory art system: residents answer a daily question by moving tiles. One player is enough; over time any number can take part. There is no correct pattern. The only rule is movement.</p>" },
              { kind: "html", html: "<p class=\"um-sub\">THE LOOP</p>" },
              { kind: "duo", tiles: [
                { src: "assets/collectively/new/loop-map.jpg", alt: "The green loop: fifteen nodes on one continuous route", caption: "<b>The loop, mapped.</b> One route and fifteen nodes (six primary, nine ecological).", fit: "contain" },
                { src: "assets/collectively/deck/loop-render.jpg", alt: "The green loop connecting the neighbourhoods", caption: "<b>The loop, drawn.</b> Connecting the neighbourhoods.", fit: "contain" }
              ] },
              { kind: "html", html: "<p class=\"um-cap\"><b>In conclusion.</b> The interventions form one continuous loop that reconnects access, mobility, public space and ecology. They answer the infrastructure fragmentation between Collserola and the Besòs, and the research question: restoring ecological and urban connectivity through spatial strategies, for a connected, living system where ecology and social life are integrated.</p>" }
            ] }
          ]
        },
        images: [
          { src: "assets/collectively/hero.jpg", caption: "Twelve layers of data, one regeneration plan" },
          { src: "assets/collectively/site-map.png", caption: "Fragmented neighbourhoods, reconnected" },
          { src: "assets/collectively/ndvi-map.png", caption: "Reading green cover from satellite data" },
          { src: "assets/collectively/site-photo.jpg", caption: null },
          { src: "assets/collectively/collserola-view.jpg", caption: null },
          { src: "assets/collectively/context-disconnection.jpg", caption: null },
          { src: "assets/collectively/stakeholders.png", caption: null },
          { src: "assets/collectively/interview-personas.png", caption: null },
          { src: "assets/collectively/scoring-table.png", caption: null },
          { src: "assets/collectively/design-elements.png", caption: null },
          { src: "assets/collectively/green-street.jpg", caption: null },
          { src: "assets/collectively/masterplan.png", caption: "A masterplan grounded in data, not assumption" },
          { src: "assets/collectively/stat-loneliness.png", caption: "Isolation has a measurable cost" },
          { src: "assets/collectively/stat-mentalhealth.png", caption: null }
        ] },
      { num: "05", category: "MUPD", categoryColor: "#6c436a", title: "What's Happening to Our Downtowns — a study of urban cores in transition", meta: "Chicago, New York, LA, Houston, Phoenix, Washington D.C.", year: "2026", color: "#1f4f8f", href: "#downtowns-detail", id: "work-05", detailId: "downtowns-detail", cursorEmoji: "🏙️", img: "assets/cards/05.jpg?v=2", desc: "A quantitative and qualitative study of how hybrid work is reshaping six US downtowns, testing hundred-year-old urban theories against present-day spatial data.",
        quick: {
          tags: [["URBAN THEORY", "#1f4f8f"], ["SPATIAL DATA ANALYSIS", "#c47ac0"], ["IAAC, MUPD01", "#0c2036"]],
          banner: "assets/downtowns/satellite-chicago.jpg",
          result: "Four students from four cities, one shared feeling that downtowns feel emptier. A test of century-old urban theories against today's data: six downtowns mapped in full, 50 US cities clustered, then read against Jacobs and Gehl.",
          stats: [["50", "US cities clustered"], ["6", "downtowns mapped in full"], ["300 m", "grid cell, within 10 km"], ["22%", "commercial vacancy in North America"]],
          role: [["PROGRAMME", "IAAC, Master in Advanced Urban Planning and Data Analytics"], ["COURSE", "Urban Reading Studio, MUPD01 25/26"], ["YEAR", "2026"], ["TEAM", "Group project, IAAC"]],
          links: [["READ THE BLOG POST \u2197", "https://blog.iaac.net/whats-happening-to-our-downtowns/"]],
          groups: [
            { label: "It started in Barcelona", rows: [
              { kind: "html", html: "<p class=\"kc-quote\">Four of us met in Barcelona and swapped stories about home. In every story the old downtown felt quieter since the pandemic: favourite shops closed, streets empty because everyone works from home.</p>" },
              { kind: "html", html: "<div class=\"wi-facts\"><div><b>4</b><span>students, four home cities, one shared feeling</span></div><div><b>11,422</b><span>urban cores worldwide (Copernicus Human Settlements)</span></div><div><b>0.5&ndash;2</b><span>days a week worked from home, on average</span></div><div><b>22%</b><span>commercial vacancy in North America</span></div></div>" },
              { kind: "whole", tiles: [ { src: "assets/downtowns/final/pandemic-collage.png?v=1", alt: "News from cities around the world", caption: "<b>Struggling or bouncing back?</b> Some cities seemed to thrive, others to struggle, with no clear pattern.", fit: "contain" } ] }
            ] },
            { label: "Why empty offices matter", rows: [
              { kind: "html", html: "<p class=\"um-sub\">COMMERCIAL VACANCY BY REGION</p><div class=\"wi-bars kc-bars dt-vac\"><div class=\"b\"><span class=\"n\">North America</span><span class=\"t\"><i style=\"width:100%\"></i></span><span class=\"v\">22%</span></div><div class=\"b\"><span class=\"n\">South America</span><span class=\"t\"><i style=\"width:68%\"></i></span><span class=\"v\">15%</span></div><div class=\"b\"><span class=\"n\">Asia/Pacific</span><span class=\"t\"><i style=\"width:64%\"></i></span><span class=\"v\">14%</span></div><div class=\"b\"><span class=\"n\">Africa</span><span class=\"t\"><i style=\"width:64%\"></i></span><span class=\"v\">14%</span></div><div class=\"b\"><span class=\"n\">Europe</span><span class=\"t\"><i style=\"width:41%\"></i></span><span class=\"v\">9%</span></div></div>" },
              { kind: "whole", tiles: [ { src: "assets/downtowns/final/wfh-chart.jpg?v=2", alt: "Days worked from home by country", caption: "<b>Working from home.</b> Average days a week, by country. Higher remote work goes with higher commercial vacancy. Sources: Aksoy et al. (2022), JLL (2025), Knight Frank (2025).", fit: "contain" } ] },
              { kind: "html", html: "<p class=\"um-sub\">THE URBAN DOOM LOOP</p><div class=\"kc-issues dt-doom\"><div><b>1 &middot; Less demand for space</b></div><div><b>2 &middot; Reduced foot traffic</b></div><div><b>3 &middot; Lower commercial activity</b></div><div><b>4 &middot; Increased vacancies</b></div><div><b>5 &middot; Lower property values</b></div><div><b>6 &middot; Declining tax revenues</b></div><div><b>7 &middot; Cuts to city services</b></div><div><b>8 &middot; Reduced quality of life</b></div><div><b>9 &middot; People leave the cities</b></div></div>" },
              { kind: "html", html: "<p class=\"kc-note\">Fewer visitors strain the local economy and shrink the tax base, so there is less money for the public. More residents leave, and those who stay get a lower quality of life. <b>Cycles like this have happened before,</b> but regionally. The pandemic set one off everywhere at once.</p>" }
            ] },
            { label: "What is an urban core?", rows: [
              { kind: "html", html: "<p class=\"um-sub\">STREET INTERVIEWS: WHAT DO YOU THINK OF WHEN YOU HEAR &ldquo;CENTRAL BUSINESS DISTRICT&rdquo;?</p><div class=\"dt-words\"><span>Tall buildings</span><span>Retail</span><span>Open spaces</span><span>Grey</span><span>City centre</span><span>Long commutes</span><span>Rush</span><span>Downtown</span><span>Chaotic</span><span>Multi-core</span><span>No personality</span><span>Fast cars</span></div>" },
              { kind: "html", html: "<p class=\"kc-note\">Peers, lecturers and people on the street gave very different answers. The idea of a CBD had become <b>vague</b>, so the team went to the academic theories behind it.</p>" },
              { kind: "whole", tiles: [ { src: "assets/downtowns/final/theory-origins.jpg", alt: "Origins of 50 urban theories", caption: "<b>A century of theory.</b> Fifty urban theories, 1890s to 2020s, plotted by place of origin: plenty of content, and very western.", fit: "contain" } ] }
            ] },
            { label: "The question and the method", rows: [
              { kind: "html", html: "<p class=\"kc-quote\">How can foundational urban theories guide our exploration of the elements that influence the structure of our urban cores?</p>" },
              { kind: "html", html: "<div class=\"kc-issues dt-method\"><div><b>Quantitative track</b><p>Burgess, Hoyt, Harris and Ullman give measurable parameters; the 50 biggest US cities are then clustered by type.</p></div><div><b>Qualitative track</b><p>Contemporary theory (Sassen, Jacobs, Gehl) reads the intangible patterns and tests how well the models still explain cities.</p></div><div><b>Together</b><p>Layered, separate readings, not one flattened map.</p></div></div>" }
            ] },
            { label: "Three theories, a century old", rows: [
              { kind: "html", html: "<p class=\"kc-note\">The best-known theories of the urban core are 80 to 100 years old, and <b>all come out of the University of Chicago</b>. Each builds on the one before.</p>" },
              { kind: "html", html: "<div class=\"dt-line\"><div><b>1925</b><span>Burgess</span><i>Concentric zones</i></div><div><b>1939</b><span>Hoyt</span><i>Sectors</i></div><div><b>1945</b><span>Harris &amp; Ullman</span><i>Multiple nuclei</i></div><div class=\"q\"><b>2025</b><span>?</span><i>What now?</i></div></div>" },
              { kind: "html", html: "<div class=\"dt-trow\"><img src=\"assets/downtowns/final/theory-burgess-d.png?v=2\" alt=\"Concentric zones &middot; Burgess, 1925\"><div><b>Concentric zones &middot; Burgess, 1925</b><p>A sociologist, one of the first studies of urban life: a commercial core, then industry, a transition zone of mixed industry and housing, and residential zones further out.</p><ul class=\"dt-leg\"><li><i class=\"sw\" style=\"background:#8f008f\"></i>CBD</li><li><i class=\"sw\" style=\"background:#eeeeee\"></i>Manufacturing zone</li><li><i class=\"sw sw-dot\"></i>Transition zone</li><li><i class=\"sw\" style=\"background:#feba80\"></i>Working-class residential</li><li><i class=\"sw\" style=\"background:#ebba52\"></i>Higher-class residential</li></ul></div></div><div class=\"dt-trow\"><img src=\"assets/downtowns/final/theory-hoyt-d.png?v=1\" alt=\"Sectors &middot; Hoyt, 1939\"><div><b>Sectors &middot; Hoyt, 1939</b><p>An economist: land use grows in wedges along the main transport corridors, shaped by proximity to transit.</p><ul class=\"dt-leg\"><li><i class=\"sw\" style=\"background:#fff54f\"></i>Higher-class residential</li><li><i class=\"sw\" style=\"background:#8f008f\"></i>CBD</li><li><i class=\"sw\" style=\"background:#fff1a2\"></i>Working-class residential</li><li><i class=\"sw\" style=\"background:#ecbb55\"></i>Middle-class residential</li><li><i class=\"sw\" style=\"background:#eeeeee\"></i>Factories and industry</li></ul></div></div><div class=\"dt-trow\"><img src=\"assets/downtowns/final/theory-harris-d.png?v=1\" alt=\"Multiple nuclei &middot; Harris and Ullman, 1945\"><div><b>Multiple nuclei &middot; Harris and Ullman, 1945</b><p>Geographers, building on the first two: not one core but many. The CBD still matters, but is not the only organising force.</p><ul class=\"dt-leg\"><li><i class=\"sw\" style=\"background:#8f008f\"></i>CBD</li><li><i class=\"sw\" style=\"background:#af7426\"></i>Wholesale, light manufacturing</li><li><i class=\"sw\" style=\"background:#f3b464\"></i>Low-class residential</li><li><i class=\"sw\" style=\"background:#b49c75\"></i>Medium-class residential</li><li><i class=\"sw sw-grid\"></i>High-class residential</li><li><i class=\"sw\" style=\"background:#bcb7b3\"></i>Heavy manufacturing</li><li><i class=\"sw\" style=\"background:#8f008f\"></i>Outlying suburb</li><li><i class=\"sw\" style=\"background:#ead1dc\"></i>Residential suburb</li><li><i class=\"sw\" style=\"background:#8e7cc3\"></i>Industrial suburb</li></ul></div></div>" },
              { kind: "html", html: "<p class=\"kc-note\">Cities are far more complex, but these simple diagrams still shape how we read them. They were drawn when research on urban space was far less empirical, long before today's open data.</p>" }
            ] },
            { label: "From theories to maps", rows: [
              { kind: "html", html: "<p class=\"kc-note\">The team pulled its parameters straight out of the three diagrams and drew <b>its own diagram, this time informed by open data</b>. It began in Chicago, where the theories were born, and the US, which has some of the highest work-from-home and vacancy rates.</p>" },
              { kind: "html", html: "<div class=\"wi-facts\"><div><b>10 km</b><span>radius from the OpenStreetMap city centre</span></div><div><b>300 m</b><span>pixel, a 300 &times; 300 m grid</span></div><div><b>4</b><span>layers per city</span></div><div><b>6 + 50</b><span>cities mapped in full, then clustered</span></div></div>" },
              { kind: "html", html: "<div class=\"kc-issues dt-layers\"><div><b>Transport corridors</b><p>White main routes; secondary routes show an organic or planned grid.</p></div><div><b>The CBD</b><p>Offices, retail and other business uses, as a purple density raster.</p></div><div><b>Industry</b><p>Production and logistics, in white.</p></div><div><b>Residential</b><p>Housing with building height, as a stand-in for density.</p></div></div>" }
            ] },
            { label: "Four layers, six cities", rows: [
              { kind: "duo", tiles: [ { src: "assets/downtowns/final/transport.jpg?v=2", alt: "Transport corridors", caption: "<b>Transport.</b> White: main corridors. Copper: secondary and tertiary.", fit: "contain" }, { src: "assets/downtowns/final/cbd.jpg?v=2", alt: "The central business district", caption: "<b>The CBD.</b> Commercial concentration, low to high, in purple.", fit: "contain" } ] },
              { kind: "duo", tiles: [ { src: "assets/downtowns/final/industry.jpg?v=2", alt: "Industrial zones", caption: "<b>Industry.</b> White blocks are industrial zones.", fit: "contain" }, { src: "assets/downtowns/final/residential.jpg?v=2", alt: "Residential areas", caption: "<b>Residential.</b> Yellow is building height, about 15 to 30 m.", fit: "contain" } ] },
              { kind: "html", html: "<p class=\"kc-note\">Land value would have shown class, as the theories describe, but the data was hard to get. <b>Building height</b> stands in for it, which may over-suggest, given how much public housing many cities have. <b>Tap a map to zoom.</b></p>" }
            ] },
            { label: "Six downtowns, read together", rows: [
              { kind: "six", tiles: [ { src: "assets/downtowns/satellite-chicago.jpg", alt: "Chicago", caption: "<b>Chicago</b>", fit: "cover" }, { src: "assets/downtowns/satellite-nyc.jpg", alt: "New York", caption: "<b>New York</b>", fit: "cover" }, { src: "assets/downtowns/satellite-la.jpg", alt: "Los Angeles", caption: "<b>Los Angeles</b>", fit: "cover" }, { src: "assets/downtowns/satellite-houston.jpg", alt: "Houston", caption: "<b>Houston</b>", fit: "cover" }, { src: "assets/downtowns/satellite-phoenix.jpg", alt: "Phoenix", caption: "<b>Phoenix</b>", fit: "cover" }, { src: "assets/downtowns/satellite-dc.jpg", alt: "Washington D.C.", caption: "<b>Washington D.C.</b>", fit: "cover" } ] },
              { kind: "whole", tiles: [ { src: "assets/downtowns/final/diagrammatic.jpg?v=2", alt: "All layers overlaid", caption: "<b>All four layers overlaid.</b> Activity, industry, residential height and main corridors.", fit: "contain" } ] },
              { kind: "html", html: "<div class=\"kc-issues dt-find\"><div><b>Sector</b><p>Chicago: residential and industrial zones follow the main transit corridors out from a dense centre. Not perfect, but it suggests the sector model.</p></div><div><b>Multi-nuclei</b><p>New York, Houston, Los Angeles, Washington D.C.: scattered high-activity areas and no emerging rings.</p></div><div><b>A mixture</b><p>Phoenix: growth around the main corridors, plus several nuclei.</p></div></div>" }
            ] },
            { label: "Fifty cities, clustered", rows: [
              { kind: "html", html: "<p class=\"kc-note\">Our eyes are not as precise as a computation. So the same maps were run on <b>the 50 most populous US cities</b>, and a clustering tool read the pixels of each raster to group them.</p>" },
              { kind: "whole", tiles: [ { src: "assets/downtowns/final/fifty-cities-final.jpg", alt: "Fifty US cities", caption: "<b>The 50 most populous US cities,</b> each as a 10 km raster of the four layers.", fit: "contain" } ] },
              { kind: "solo", tiles: [ { src: "assets/downtowns/final/clusters-final.jpg", alt: "Cities clustered by pattern", caption: "<b>Clustered by pattern.</b> Similar cities end up side by side.", fit: "contain" } ] },
              { kind: "html", html: "<p class=\"kc-note\">The team hoped the groups would match the three theories. The result was more interesting. One cluster scatters industrial zones, each with its own core: <b>multi-nuclei</b>. Another lines industry along the main transit routes, dividing the city into <b>sectors</b>. A shy third hints at <b>rings</b>, but with no clear concentric growth. Some cities even <b>blend</b> the sector and multi-nuclei models. The black zones are water, open space, and a reminder that data is not equally rich everywhere.</p>" }
            ] },
            { label: "Beyond the founding theories", rows: [
              { kind: "html", html: "<p class=\"kc-quote\">Global cities are strategic nodes where global economic processes are concentrated, managed and materialized, producing both connectivity and inequality.<br><span style=\"font-size:.8em\">Saskia Sassen</span></p>" },
              { kind: "html", html: "<p class=\"kc-note\">The urban core is not one business district but a <b>layered node, tangible and intangible</b>. So the study turned to the two most cited contemporary voices.</p>" },
              { kind: "html", html: "<div class=\"kc-issues dt-th\"><div><b>Jane Jacobs</b><p>Criticised planning that put efficiency and commercial interest before lived experience. Mixed land use, and how building and population density shape a core.</p></div><div><b>Jan Gehl</b><p>From the 1970s on, he reframed the core as a setting for public life: human scale, walkability and social interaction.</p></div></div>" },
              { kind: "whole", tiles: [ { src: "assets/downtowns/final/mixeduse.png?v=7", alt: "Mixed use and built density", caption: "<b>After Jacobs.</b> Built volume and population density meet at the core; mixed land use in pink.", fit: "contain" } ] },
              { kind: "whole", tiles: [ { src: "assets/downtowns/final/walkability.png?v=7", alt: "Walkability and open spaces", caption: "<b>After Gehl.</b> Open and in-between spaces, with sidewalks and crossings.", fit: "contain" } ] },
              { kind: "html", html: "<p class=\"kc-note\">These maps do not try to draw the intangible, only the parts that can be measured. Qualitative data is a recent practice and rarely available for earlier decades, so comparing it over the last century is an open question. Merging both readings into one image <b>hid more than it showed</b>, so they stay as separate layers.</p>" }
            ] },
            { label: "What it adds up to", rows: [
              { kind: "whole", tiles: [ { src: "assets/downtowns/final/conclusion-diagram.jpg", alt: "The study in one diagram", caption: "<b>From central business districts to the urban core.</b> Quantitative and qualitative tracks, side by side.", fit: "contain" } ] },
              { kind: "html", html: "<p class=\"kc-note\">So what is happening downtown, and how might hybrid work reshape it? There is <b>no single answer</b>. Cores come in a range of configurations. The foundational theories stay useful, not as prescriptions but as <b>tools for reading urban form</b>, and cities resist being reduced to one diagram.</p>" }
            ] }
          ]
        },
        images: [
          { src: "assets/downtowns/satellite-chicago.jpg", caption: "Hybrid work is reshaping the American downtown" },
          { src: "assets/downtowns/satellite-nyc.jpg", caption: null },
          { src: "assets/downtowns/satellite-la.jpg", caption: null },
          { src: "assets/downtowns/satellite-houston.jpg", caption: null },
          { src: "assets/downtowns/satellite-phoenix.jpg", caption: null },
          { src: "assets/downtowns/satellite-dc.jpg", caption: null },
          { src: "assets/downtowns/cluster-result.png", caption: "Clustering reveals which cores are recovering" },
          { src: "assets/downtowns/walkability-grid.png", caption: "Testing century-old urban theories against today's data" },
          { src: "assets/downtowns/mixed-use-grid.png", caption: null },
          { src: "assets/downtowns/diagrammatic-maps-grid.jpg", caption: null }
        ] },
      { num: "06", category: "UD", categoryColor: "#c47ac0", title: "Development Along the Main Arterial Road at Rajarhat, Kolkata — reading a new town through its main road", meta: "Kolkata · Group urban design laboratory, Jadavpur University", year: "2014", color: "#935c90", href: "#rajarhat-detail", id: "work-06", detailId: "rajarhat-detail", cursorEmoji: "🏗️", img: "assets/cards/06.jpg?v=5", desc: "A study of New Town, Rajarhat's planned township structure, land use, and the main arterial road shaping its three action areas.",
        quick: {
          tags: [["URBAN DESIGN", "#935c90"], ["NEW TOWN, KOLKATA", "#c47ac0"], ["JADAVPUR UNIVERSITY", "#0c2036"]],
          banner: "assets/rajarhat/new/banner.jpg",
          result: "A group study of a new town built in a decade on farmland and wetland, read along its main arterial road through paths, edges, nodes, land use and the lives of the people who were already there.",
          stats: [["3", "action areas"], ["1,292 ha", "residential, the largest use"], ["3,651 ha", "developed by 2008, up from 1,437"], ["85%+", "of farm workers in other jobs"]],
          role: [["PROGRAMME", "M.Arch, Urban Design, Jadavpur University"], ["SITE", "New Town, Rajarhat, Kolkata"], ["YEAR", "2014"], ["TEAM", "Group project, Jadavpur University"]],
          groups: [
            { label: "The place", rows: [
              { kind: "html", html: "<div class=\"wi-facts\"><div><b>3 &times;</b><span>the size of Salt Lake, set aside as Kolkata's second IT hub</span></div><div><b>3</b><span>action areas, planned as one township</span></div><div><b>1 km</b><span>from the airport</span></div><div><b>2</b><span>high-speed links to the city: E.M. Bypass and Kazi Nazrul Islam Avenue</span></div></div>" },
              { kind: "duo", tiles: [
                { src: "assets/rajarhat/new/map-links.jpg", alt: "Linkages of New Town", caption: "<b>Linkages.</b> Airport, E.M. Bypass, Kazi Nazrul Islam Avenue.", fit: "contain" },
                { src: "assets/rajarhat/new/map-areas.jpg", alt: "Layout of New Town", caption: "<b>Layout.</b> Action Areas I, II and III.", fit: "contain" }
              ] },
              { kind: "html", html: "<div class=\"kc-issues\"><div><b>Action Area I</b><p>Malls, a sub-CBD, planned residential and commercial plots.</p></div><div><b>Action Area II</b><p>The main CBD, institutional plots, IT parks such as DLF and Unitech, large apartment complexes.</p></div><div><b>Action Area III</b><p>High-rise residential complexes and mini sub-townships such as Uniworld City and Sukhobrishti.</p></div></div>" }
            ] },
            { label: "The study road", rows: [
              { kind: "duo", tiles: [
                { src: "assets/rajarhat/new/aerial.jpg", alt: "Aerial view with the main arterial road", caption: "<b>The main arterial road,</b> traced on the aerial view.", fit: "contain" },
                { src: "assets/rajarhat/new/road-fg.jpg", alt: "Figure-ground along the road", caption: "<b>Figure-ground.</b> Built mass either side of the road.", fit: "contain" }
              ] },
              { kind: "five", tiles: [
                { src: "assets/rajarhat/new/ph-road1.jpg", alt: "The road", caption: "<b>The road.</b>", fit: "cover" },
                { src: "assets/rajarhat/new/ph-flyover.jpg", alt: "The flyover", caption: "<b>The flyover.</b>", fit: "cover" },
                { src: "assets/rajarhat/new/ph-it2.jpg", alt: "An office block", caption: "<b>An office block.</b>", fit: "cover" },
                { src: "assets/rajarhat/new/ph-towers.jpg", alt: "Towers on the edge of the road", caption: "<b>Towers by the road.</b>", fit: "cover" },
                { src: "assets/rajarhat/new/ph-avenue.jpg", alt: "A green avenue", caption: "<b>A green avenue.</b>", fit: "cover" }
              ] }
            ] },
            { label: "Reading the road", rows: [
              { kind: "html", html: "<p class=\"um-sub\">READ WITH KEVIN LYNCH’S ELEMENTS OF THE CITY IMAGE: PATHS, EDGES, NODES AND LANDMARKS, MAPPED ON THE FIGURE-GROUND</p>" },
              { kind: "lynch", tiles: [
                { src: "assets/rajarhat/new/paths.jpg", alt: "Paths", caption: "<b>Paths.</b> The arterial and its branches.", fit: "contain" },
                { src: "assets/rajarhat/new/edges.jpg", alt: "Edges", caption: "<b>Edges.</b>", fit: "contain" },
                { src: "assets/rajarhat/new/nodes.jpg", alt: "Nodes", caption: "<b>Nodes.</b> Where routes meet.", fit: "contain" },
                { src: "assets/rajarhat/new/landmarks.jpg", alt: "Landmarks", caption: "<b>Landmarks.</b> Five, numbered below.", fit: "contain" }
              ] },
              { kind: "html", html: "<p class=\"um-sub\">LANDMARKS ALONG THE ROAD: 1 FINANCE CENTRE / ECO-PARK, 2 RABINDRA TIRTHA / NARKEL BAGAN, 3 NAZRUL TIRTHA / DLF 1, 4 HOME TOWN / AXIS MALL, 5 UNITECH</p>" },
              { kind: "tri", tiles: [
                { src: "assets/rajarhat/new/ph-facade.jpg", alt: "A facade lettered in Bengali script", caption: "<b>Script on the wall.</b>", fit: "cover" },
                { src: "assets/rajarhat/new/ph-mall.jpg", alt: "Towers and the road", caption: "<b>Towers and a taxi.</b>", fit: "cover" },
                { src: "assets/rajarhat/new/ph-gate.jpg", alt: "A gated entrance", caption: "<b>Gated entrances.</b>", fit: "cover" }
              ] }
            ] },
            { label: "Land use", rows: [
              { kind: "html", html: "<p class=\"um-sub\">A TOWNSHIP PLANNED IN LAYERS: COMMERCIAL, RESIDENTIAL, IT AND GREEN</p>" },
              { kind: "lu4", tiles: [
                { src: "assets/rajarhat/new/commercial.jpg?v=2", alt: "Commercial areas", caption: "<b>Commercial.</b>", fit: "contain" },
                { src: "assets/rajarhat/new/residential.jpg?v=2", alt: "Residential areas", caption: "<b>Residential.</b>", fit: "contain" },
                { src: "assets/rajarhat/new/it.jpg?v=2", alt: "IT hubs and industry", caption: "<b>IT and industry.</b>", fit: "contain" },
                { src: "assets/rajarhat/new/green.jpg?v=2", alt: "Green spaces", caption: "<b>Green.</b>", fit: "contain" }
              ] },
              { kind: "duo", tiles: [
                { src: "assets/rajarhat/new/landuse.jpg", alt: "Land use in three dimensions", caption: "<b>Land use in 3D.</b>", fit: "contain" },
                { src: "assets/rajarhat/new/functions.jpg", alt: "Functional split of Action Areas 1 to 3", caption: "<b>Functional split.</b> 1,292 ha residential, 436 ha open space, 360 ha roads.", fit: "contain" }
              ] },
              { kind: "html", html: "<p class=\"um-sub\">LAND COVER, 2001 AGAINST 2008 (HECTARES)</p><div class=\"lc-grid\"><div class=\"lc\"><p class=\"l\">Developed area</p><div class=\"r\"><span class=\"who\">2001</span><span class=\"t\"><i class=\"a\" style=\"width:39.4%\"></i></span><b>1,437</b></div><div class=\"r\"><span class=\"who\">2008</span><span class=\"t\"><i class=\"b\" style=\"width:100.0%\"></i></span><b>3,651</b></div></div><div class=\"lc\"><p class=\"l\">Agricultural land</p><div class=\"r\"><span class=\"who\">2001</span><span class=\"t\"><i class=\"a\" style=\"width:49.6%\"></i></span><b>1,809</b></div><div class=\"r\"><span class=\"who\">2008</span><span class=\"t\"><i class=\"b\" style=\"width:0.0%\"></i></span><b>0</b></div></div><div class=\"lc\"><p class=\"l\">Water bodies</p><div class=\"r\"><span class=\"who\">2001</span><span class=\"t\"><i class=\"a\" style=\"width:28.4%\"></i></span><b>1,035</b></div><div class=\"r\"><span class=\"who\">2008</span><span class=\"t\"><i class=\"b\" style=\"width:20.0%\"></i></span><b>731</b></div></div><div class=\"lc\"><p class=\"l\">Swamp area</p><div class=\"r\"><span class=\"who\">2001</span><span class=\"t\"><i class=\"a\" style=\"width:12.3%\"></i></span><b>448</b></div><div class=\"r\"><span class=\"who\">2008</span><span class=\"t\"><i class=\"b\" style=\"width:0.0%\"></i></span><b>0</b></div></div><div class=\"lc\"><p class=\"l\">Green & open space</p><div class=\"r\"><span class=\"who\">2001</span><span class=\"t\"><i class=\"a\" style=\"width:0.3%\"></i></span><b>10</b></div><div class=\"r\"><span class=\"who\">2008</span><span class=\"t\"><i class=\"b\" style=\"width:2.4%\"></i></span><b>87</b></div></div></div>" }
            ] },
            { label: "The people", rows: [
              { kind: "html", html: "<div class=\"wi-facts\"><div><b>&gt;85%</b><span>of agricultural labourers and cultivators are now in other jobs</span></div><div><b>~50%</b><span>of the population is Scheduled Caste</span></div><div><b>1.46%</b><span>Scheduled Tribe</span></div><div><b>2008</b><span>agricultural land in the study data: zero</span></div></div>" },
              { kind: "duo", tiles: [
                { src: "assets/rajarhat/new/chart-occupation.jpg?v=2", alt: "Occupational change", caption: "<b>Occupational change.</b> Cultivators fall; service and labour rise.", fit: "contain" },
                { src: "assets/rajarhat/new/chart-income.jpg?v=2", alt: "Income and satisfaction", caption: "<b>Income and satisfaction.</b> Lower-income groups are the most dissatisfied.", fit: "contain" }
              ] }
            ] },
            { label: "Sketches", rows: [
              { kind: "quad", tiles: [
                { src: "assets/rajarhat/new/sk-1.jpg", alt: "Sketch 1", caption: "", fit: "contain" },
                { src: "assets/rajarhat/new/sk-2.jpg", alt: "Sketch 2", caption: "", fit: "contain" },
                { src: "assets/rajarhat/new/sk-3.jpg", alt: "Sketch 3", caption: "", fit: "contain" },
                { src: "assets/rajarhat/new/sk-4.jpg", alt: "Sketch 4", caption: "", fit: "contain" }
              ] },
              { kind: "quad", tiles: [
                { src: "assets/rajarhat/new/sk-5.jpg", alt: "Sketch 5", caption: "", fit: "contain" },
                { src: "assets/rajarhat/new/sk-6.jpg", alt: "Sketch 6", caption: "", fit: "contain" },
                { src: "assets/rajarhat/new/sk-7.jpg", alt: "Sketch 7", caption: "", fit: "contain" },
                { src: "assets/rajarhat/new/sk-8.jpg", alt: "Sketch 8", caption: "", fit: "contain" }
              ] }
            ] }
          ]
        },
        images: [
          { src: "assets/rajarhat/hero.png", caption: "A planned township, one arterial road" },
          { src: "assets/rajarhat/zoning.png", caption: "Zoning across three action areas" },
          { src: "assets/rajarhat/streetscape.png", caption: "Reading the street from the ground" },
          { src: "assets/rajarhat/accessibility.png", caption: "Access is not evenly distributed" },
          { src: "assets/rajarhat/greenspace.png", caption: null },
          { src: "assets/rajarhat/landmarks.png", caption: null }
        ] },
      { num: "07", category: "UD", categoryColor: "#c47ac0", title: "Neighbourhood Study of Jodhpur Park, Kolkata — eight issues within 200 m of a lake", meta: "Kolkata · Neighbourhood study, Jadavpur University", year: "2014", color: "#6c436a", href: "#jodhpurpark-detail", id: "work-07", detailId: "jodhpurpark-detail", cursorEmoji: "🚦", img: "assets/cards/07.jpg?v=2", desc: "A neighbourhood-scale survey of Jodhpur Park's streets, land use, and pedestrian and vehicular circulation.",
        quick: {
          "tags": [
            [
              "URBAN DESIGN",
              "#935c90"
            ],
            [
              "NEIGHBOURHOOD STUDY",
              "#c47ac0"
            ],
            [
              "JADAVPUR UNIVERSITY",
              "#0c2036"
            ]
          ],
          "banner": "assets/jodhpurpark/new/banner-map.jpg",
          "result": "Eight map layers and a walk down every street, around a lake in south Kolkata: eight issues stood out, from poles on pavements to a lake nobody can reach.",
          "stats": [
            [
              "200 m",
              "radius studied"
            ],
            [
              "48%",
              "open area"
            ],
            [
              "8",
              "issues identified"
            ],
            [
              "8",
              "maps in the layers"
            ]
          ],
          "role": [
            [
              "PROGRAMME",
              "M.Arch, Urban Design, Jadavpur University"
            ],
            [
              "SITE",
              "Jodhpur Park and Salimpur, Kolkata"
            ],
            [
              "YEAR",
              "2014"
            ],
            [
              "PROJECT",
              "Laboratory assignment 1"
            ]
          ],
          "groups": [
            {
              "label": "The brief",
              "rows": [
                {
                  "kind": "html",
                  "html": "<p class=\"kc-lead\">The assignment was short: <b>identify the issues within a 200 m radius of your locality, in order to prepare an urban proposal.</b> Jodhpur Park was the locality: a green, mostly residential neighbourhood in south Kolkata, built around a lake. The study asks one plain question first, <b>what does the street ask of the people who use it?</b>, before anything is proposed.</p>"
                },
                {
                  "kind": "html",
                  "html": "<div class=\"jp-steps\"><div class=\"\"><b>1</b><h5>Base map</h5><p>Draw the 200 m area: streets, plots, buildings and the lake.</p></div><div class=\"\"><b>2</b><h5>Layers</h5><p>Map the fabric and green network, figure-ground, circulation, nodes, road hierarchy, drainage and electric boxes.</p></div><div class=\"\"><b>3</b><h5>Walk</h5><p>Photograph every street, by day and at night in the rain.</p></div><div class=\"\"><b>4</b><h5>Issues</h5><p>List what gets in people's way: eight issues.</p></div><div class=\"next\"><b>5</b><h5>Proposal</h5><p>The next step in the brief: an urban proposal.</p></div></div>"
                },
                {
                  "kind": "html",
                  "html": "<div class=\"wi-facts\"><div><b>200 m</b><span>radius around the locality</span></div><div><b>~16,000 m&sup2;</b><span>area studied, near Salimpur and South City</span></div><div><b>48%</b><span>of it open area</span></div><div><b>74%</b><span>residential</span></div></div>"
                }
              ]
            },
            {
              "label": "Where it is",
              "rows": [
                {
                  "kind": "html",
                  "html": "<div class=\"jp-loc\"><figure><img src=\"assets/jodhpurpark/new/location-map.jpg?v=2\" alt=\"Map of Jodhpur Park with the study boundary\" loading=\"lazy\"><figcaption><b>The map.</b> The study boundary on the street map.</figcaption></figure><figure><img src=\"assets/jodhpurpark/new/location-aerial.jpg?v=2\" alt=\"Aerial view of Jodhpur Park with the action area marked\" loading=\"lazy\"><figcaption><b>From above.</b> The action area, around the lake.</figcaption></figure></div>"
                },
                {
                  "kind": "html",
                  "html": "<p class=\"kc-p\">Jodhpur Park lies in south Kolkata, beside Dhakuria, Jadavpur, Lake Gardens and Gariahat Road, and is known for its lake. The study area is the stretch of Jadavpur Thana around Salimpur, close to South City.</p>"
                }
              ]
            },
            {
              "label": "Layers of Jodhpur Park",
              "rows": [
                {
                  "kind": "whole",
                  "tiles": [
                    {
                      "src": "assets/jodhpurpark/final/final-layers.gif?v=1",
                      "alt": "Eight final maps of Jodhpur Park in turn: urban fabric and green network, figure-ground, vehicular circulation, pedestrian circulation, nodes, road hierarchy, drainage and electric boxes",
                      "caption": "<b>Eight layers, one frame.</b> Urban fabric and green network, figure-ground, vehicular and pedestrian circulation, nodes, road hierarchy, drainage and electric boxes, in turn.",
                      "fit": "contain"
                    }
                  ]
                },
                {
                  "kind": "html",
                  "html": "<div class=\"wi-facts\"><div><b>Rings the lake</b><span>development sits around the edge, the lake stays open</span></div><div><b>Trees</b><span>line almost every street</span></div><div><b>Drains</b><span>run along every road</span></div><div><b>8</b><span>electric boxes, mostly on the pavement</span></div></div>"
                }
              ]
            },
            {
              "label": "Eight issues, on the ground",
              "rows": [
                {
                  "kind": "html",
                  "html": "<div class=\"jp-issues\"><figure class=\"jp-card\"><div class=\"ph\"><img src=\"assets/jodhpurpark/new/ph-boxes.jpg\" alt=\"Poles block the pavement\" loading=\"lazy\" style=\"object-position: 50% 50%\"><i class=\"pin\" style=\"left:47%;top:62%\">1</i></div><div class=\"tx\"><svg class=\"jp-sk\" viewBox=\"0 0 160 100\" role=\"img\" aria-label=\"A pole and a box stand in the footpath and the walker goes around\"><path d=\"M6 80 H154\" fill=\"none\" stroke=\"#0c2036\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><rect x=\"64\" y=\"76\" width=\"88\" height=\"6\" fill=\"#ead0e9\" stroke=\"#0c2036\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M103 24 V76 M97 24 H109\" fill=\"none\" stroke=\"#0c2036\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><rect x=\"116\" y=\"50\" width=\"22\" height=\"26\" fill=\"#c47ac0\" stroke=\"#0c2036\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M121 58 H133 M121 64 H133\" fill=\"none\" stroke=\"#0c2036\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"40\" cy=\"54\" r=\"4.5\" fill=\"none\" stroke=\"#0c2036\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M40 59 V71 M40 63 L34 68 M40 63 L46 68 M40 71 L36 80 M40 71 L44 80\" fill=\"none\" stroke=\"#0c2036\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M52 58 C56 38 82 38 90 56\" fill=\"none\" stroke=\"#935c90\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M86 52 L91 57 L83 59\" fill=\"none\" stroke=\"#935c90\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg><div><b>1 &middot; Poles block the pavement</b><p>Electric and light poles stand in the middle of the walkway.</p></div></div></figure><figure class=\"jp-card\"><div class=\"ph\"><img src=\"assets/jodhpurpark/new/ph-bus.jpg\" alt=\"No bus lane at the stop\" loading=\"lazy\" style=\"object-position: 50% 50%\"><i class=\"pin\" style=\"left:46%;top:44%\">2</i></div><div class=\"tx\"><svg class=\"jp-sk\" viewBox=\"0 0 160 100\" role=\"img\" aria-label=\"A bus shelter at the kerb, but no lane or bay for the bus to pull into\"><path d=\"M6 82 H154\" fill=\"none\" stroke=\"#0c2036\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M8 62 H152\" stroke=\"#935c90\" stroke-width=\"2\" stroke-dasharray=\"6 5\" fill=\"none\"/><rect x=\"96\" y=\"40\" width=\"48\" height=\"5\" rx=\"2\" fill=\"#c47ac0\" stroke=\"#0c2036\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M100 45 V80 M140 45 V80\" fill=\"none\" stroke=\"#0c2036\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M100 58 H140\" fill=\"none\" stroke=\"#0c2036\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M104 80 v-12 h8 v12 M118 80 v-12 h8 v12\" fill=\"none\" stroke=\"#0c2036\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M12 70 V54 Q12 48 20 48 H54 Q62 48 62 54 V70 Z\" fill=\"#ead0e9\" stroke=\"#0c2036\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M18 56 H56 M30 56 V66 M44 56 V66\" fill=\"none\" stroke=\"#0c2036\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"26\" cy=\"72\" r=\"5\" fill=\"none\" stroke=\"#0c2036\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"50\" cy=\"72\" r=\"5\" fill=\"none\" stroke=\"#0c2036\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M72 70 H92 M72 58 H92 M72 58 V70 M92 58 V70\" stroke=\"#935c90\" stroke-width=\"2\" stroke-dasharray=\"3 3\" fill=\"none\"/><path d=\"M80 66 q0 -6 5 -6 q5 0 5 5 q0 4 -5 6\" fill=\"none\" stroke=\"#935c90\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg><div><b>2 &middot; No bus lane at the stop</b><p>There is a bus stop, but no lane or bay for the bus to pull into.</p></div></div></figure><figure class=\"jp-card\"><div class=\"ph\"><img src=\"assets/jodhpurpark/new/ph-taxi.jpg\" alt=\"No bus or taxi stand\" loading=\"lazy\" style=\"object-position: 50% 50%\"><i class=\"pin\" style=\"left:62%;top:74%\">3</i></div><div class=\"tx\"><svg class=\"jp-sk\" viewBox=\"0 0 160 100\" role=\"img\" aria-label=\"Buses and taxis wait at the roadside with no stand\"><path d=\"M6 84 H154\" fill=\"none\" stroke=\"#0c2036\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M6 60 H154\" stroke=\"#935c90\" stroke-width=\"2\" stroke-dasharray=\"6 5\" fill=\"none\"/><path d=\"M16 76 V68 Q16 62 24 62 H44 L50 52 H66 L72 62 H82 Q88 62 88 68 V76 Z\" fill=\"#ead0e9\" stroke=\"#0c2036\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"30\" cy=\"78\" r=\"5\" fill=\"none\" stroke=\"#0c2036\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"70\" cy=\"78\" r=\"5\" fill=\"none\" stroke=\"#0c2036\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M98 76 V68 Q98 62 106 62 H122 L128 52 H140 L145 62 Q152 63 152 68 V76 Z\" fill=\"#c47ac0\" stroke=\"#0c2036\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"110\" cy=\"78\" r=\"5\" fill=\"none\" stroke=\"#0c2036\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"140\" cy=\"78\" r=\"5\" fill=\"none\" stroke=\"#0c2036\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"80\" cy=\"30\" r=\"14\" stroke=\"#935c90\" stroke-width=\"2.5\" fill=\"none\"/><path d=\"M71 39 L89 21\" stroke=\"#935c90\" stroke-width=\"2.5\"/><path d=\"M75 33 V27 H81 Q85 27 85 31 Q85 35 81 35 H75\" fill=\"none\" stroke=\"#0c2036\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg><div><b>3 &middot; No bus or taxi stand</b><p>Neither a bus stand at Salimpur nor a taxi stand.</p></div></div></figure><figure class=\"jp-card\"><div class=\"ph\"><img src=\"assets/jodhpurpark/new/ph-garbage.jpg\" alt=\"Garbage on the road\" loading=\"lazy\" style=\"object-position: 50% 50%\"><i class=\"pin\" style=\"left:48%;top:58%\">4</i></div><div class=\"tx\"><svg class=\"jp-sk\" viewBox=\"0 0 160 100\" role=\"img\" aria-label=\"A heap of garbage spilling onto the road\"><path d=\"M6 82 H154\" fill=\"none\" stroke=\"#0c2036\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M120 20 V82 M140 20 V82\" fill=\"none\" stroke=\"#0c2036\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M26 82 Q30 56 52 60 Q58 44 78 54 Q96 46 104 66 Q114 68 112 82 Z\" fill=\"#ead0e9\" stroke=\"#0c2036\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M44 70 l6 -4 M66 62 l7 3 M86 70 l6 -3\" fill=\"none\" stroke=\"#0c2036\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"34\" cy=\"90\" r=\"2\" fill=\"#0c2036\"/><circle cx=\"52\" cy=\"92\" r=\"2\" fill=\"#0c2036\"/><circle cx=\"82\" cy=\"91\" r=\"2\" fill=\"#0c2036\"/><circle cx=\"102\" cy=\"90\" r=\"2\" fill=\"#0c2036\"/><path d=\"M60 84 C62 94 80 96 96 92\" fill=\"none\" stroke=\"#935c90\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M91 88 L97 92 L90 95\" fill=\"none\" stroke=\"#935c90\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg><div><b>4 &middot; Garbage on the road</b><p>The garbage area spills over part of the road.</p></div></div></figure><figure class=\"jp-card\"><div class=\"ph\"><img src=\"assets/jodhpurpark/new/ph-lake-fence.jpg\" alt=\"The lake is cut off\" loading=\"lazy\" style=\"object-position: 50% 50%\"><i class=\"pin\" style=\"left:55%;top:43%\">5</i></div><div class=\"tx\"><svg class=\"jp-sk\" viewBox=\"0 0 160 100\" role=\"img\" aria-label=\"The lake behind a fence; the edge is closed\"><path d=\"M6 84 H154\" fill=\"none\" stroke=\"#0c2036\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M30 38 Q40 14 80 18 Q130 20 136 44 Q130 62 90 64 Q50 66 30 38 Z\" fill=\"#ead0e9\" stroke=\"#0c2036\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M52 40 q8 -5 16 0 M88 36 q8 -5 16 0 M70 52 q8 -5 16 0\" stroke=\"#935c90\" stroke-width=\"2\" fill=\"none\" stroke-linecap=\"round\"/><path d=\"M14 74 H150 M22 70 V78 M42 70 V78 M62 70 V78 M82 70 V78 M102 70 V78 M122 70 V78 M142 70 V78\" fill=\"none\" stroke=\"#0c2036\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M30 92 H8\" stroke=\"#935c90\" stroke-width=\"2.5\" stroke-linecap=\"round\"/></svg><div><b>5 &middot; The lake is cut off</b><p>The lake and the jogging area are not accessible.</p></div></div></figure><figure class=\"jp-card\"><div class=\"ph\"><img src=\"assets/jodhpurpark/new/ph-broken.jpg\" alt=\"Pavements are uneven\" loading=\"lazy\" style=\"object-position: 50% 100%\"><i class=\"pin\" style=\"left:45%;top:64%\">6</i></div><div class=\"tx\"><svg class=\"jp-sk\" viewBox=\"0 0 160 100\" role=\"img\" aria-label=\"A footpath that is walkable in parts and taken over by a parked car in another\"><rect x=\"6\" y=\"14\" width=\"148\" height=\"14\" fill=\"#ead0e9\" stroke=\"#0c2036\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M6 58 H154\" fill=\"none\" stroke=\"#0c2036\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M6 78 H154\" fill=\"none\" stroke=\"#0c2036\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M12 21 H52\" stroke=\"#935c90\" stroke-width=\"3\" stroke-linecap=\"round\"/><path d=\"M104 21 H146\" stroke=\"#935c90\" stroke-width=\"3\" stroke-linecap=\"round\"/><rect x=\"58\" y=\"32\" width=\"40\" height=\"18\" rx=\"4\" fill=\"#c47ac0\" stroke=\"#0c2036\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M62 32 L66 26 H90 L94 32\" fill=\"none\" stroke=\"#0c2036\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"68\" cy=\"52\" r=\"3\" fill=\"#0c2036\"/><circle cx=\"88\" cy=\"52\" r=\"3\" fill=\"#0c2036\"/><path d=\"M60 21 H96\" stroke=\"#0c2036\" stroke-width=\"2\" stroke-dasharray=\"3 4\"/><path d=\"M12 68 H148\" stroke=\"#935c90\" stroke-width=\"2\" stroke-dasharray=\"8 6\"/></svg><div><b>6 &middot; Pavements are uneven</b><p>Some can be walked on; others are broken, or taken by parked cars.</p></div></div></figure><figure class=\"jp-card\"><div class=\"ph\"><img src=\"assets/jodhpurpark/new/ph-parked.jpg\" alt=\"No parking\" loading=\"lazy\" style=\"object-position: 50% 70%\"><i class=\"pin\" style=\"left:85%;top:61%\">7</i></div><div class=\"tx\"><svg class=\"jp-sk\" viewBox=\"0 0 160 100\" role=\"img\" aria-label=\"Parked cars on both sides take most of the width of the road\"><path d=\"M6 20 H154 M6 80 H154\" fill=\"none\" stroke=\"#0c2036\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M14 50 H146\" stroke=\"#935c90\" stroke-width=\"2\" stroke-dasharray=\"8 6\"/><rect x=\"16\" y=\"22\" width=\"34\" height=\"16\" rx=\"4\" fill=\"#c47ac0\" stroke=\"#0c2036\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><rect x=\"62\" y=\"22\" width=\"34\" height=\"16\" rx=\"4\" fill=\"#c47ac0\" stroke=\"#0c2036\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><rect x=\"108\" y=\"22\" width=\"34\" height=\"16\" rx=\"4\" fill=\"#c47ac0\" stroke=\"#0c2036\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><rect x=\"26\" y=\"62\" width=\"34\" height=\"16\" rx=\"4\" fill=\"#c47ac0\" stroke=\"#0c2036\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><rect x=\"72\" y=\"62\" width=\"34\" height=\"16\" rx=\"4\" fill=\"#c47ac0\" stroke=\"#0c2036\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M148 40 V60 M144 44 L148 40 L152 44 M144 56 L148 60 L152 56\" fill=\"none\" stroke=\"#935c90\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg><div><b>7 &middot; No parking</b><p>No designated parking: cars take the width of the road.</p></div></div></figure><figure class=\"jp-card\"><div class=\"ph\"><img src=\"assets/jodhpurpark/new/ph-shelter.jpg\" alt=\"Nowhere to sit\" loading=\"lazy\" style=\"object-position: 50% 20%\"><i class=\"pin\" style=\"left:35%;top:38%\">8</i></div><div class=\"tx\"><svg class=\"jp-sk\" viewBox=\"0 0 160 100\" role=\"img\" aria-label=\"A bus stop with no place to sit\"><path d=\"M6 82 H154\" fill=\"none\" stroke=\"#0c2036\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M40 20 V82\" fill=\"none\" stroke=\"#0c2036\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><rect x=\"32\" y=\"14\" width=\"16\" height=\"12\" rx=\"2\" fill=\"#c47ac0\" stroke=\"#0c2036\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"62\" cy=\"56\" r=\"4.5\" fill=\"none\" stroke=\"#0c2036\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M62 61 V73 M62 65 L56 70 M62 65 L68 70 M62 73 L58 82 M62 73 L66 82\" fill=\"none\" stroke=\"#0c2036\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M70 58 q0 14 10 14 h8\" fill=\"none\" stroke=\"#0c2036\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M96 66 H146 M100 66 V80 M142 66 V80\" fill=\"none\" stroke=\"#0c2036\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M100 54 H142 M104 54 V66 M138 54 V66\" fill=\"none\" stroke=\"#0c2036\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M92 46 L150 84 M150 46 L92 84\" stroke=\"#935c90\" stroke-width=\"3\" stroke-linecap=\"round\"/></svg><div><b>8 &middot; Nowhere to sit</b><p>A few bus stops exist, but no seating, and only a shelter over some.</p></div></div></figure></div>"
                }
              ]
            },
            {
              "label": "After dark",
              "rows": [
                {
                  "kind": "tri",
                  "tiles": [
                    {
                      "src": "assets/jodhpurpark/new/ph-night1.jpg",
                      "alt": "A wet street at night",
                      "caption": "<b>At night, in rain.</b>",
                      "fit": "cover"
                    },
                    {
                      "src": "assets/jodhpurpark/new/ph-buses-night.jpg",
                      "alt": "Buses at the roadside after dark",
                      "caption": "<b>Buses at the roadside.</b>",
                      "fit": "cover"
                    },
                    {
                      "src": "assets/jodhpurpark/new/ph-night2.jpg",
                      "alt": "A junction after dark",
                      "caption": "<b>A junction.</b>",
                      "fit": "cover"
                    }
                  ]
                }
              ]
            },
            {
              "label": "What it points to",
              "rows": [
                {
                  "kind": "html",
                  "html": "<div class=\"kc-issues\"><div><b>Clear the footpath</b><p>Move poles and boxes to the kerb; keep a clear width.</p></div><div><b>Give vehicles a place</b><p>Stops, a stand and one side of parking.</p></div><div><b>Open the lake</b><p>A gate or two and a walk along the edge.</p></div><div><b>Deal with waste</b><p>A proper point, set back from the road.</p></div><div><b>Add seats</b><p>At every stop and at the lake gate.</p></div></div>"
                }
              ]
            }
          ]
        },
        images: [
          { src: "assets/jodhpurpark/hero.png", caption: "A neighbourhood surveyed street by street" },
          { src: "assets/jodhpurpark/aerial.png", caption: "Reading the grain from above" },
          { src: "assets/jodhpurpark/streetphotos.png", caption: "On foot, block by block" },
          { src: "assets/jodhpurpark/circulation.png", caption: "Where people walk and where cars rule" }
        ] },
      { num: "08", category: "UD", categoryColor: "#c47ac0", title: "Open Spaces: Shades of Kolkata — four open spaces read through water, trees and skyline", meta: "Kolkata · Open-space study, Jadavpur University", year: "2014", color: "#935c90", href: "#shades-detail", id: "work-08", detailId: "shades-detail", cursorEmoji: "🌳", img: "assets/cards/08.jpg", desc: "A photographic study of Tala Jheel Park, College Square, the Maidan and Victoria Memorial, and what makes each of them work.",
        quick: {
          tags: [["URBAN DESIGN", "#935c90"], ["OPEN SPACES", "#c47ac0"], ["JADAVPUR UNIVERSITY", "#0c2036"]],
          banner: "assets/shades/banner.jpg",
          result: "A photographic study of four of Kolkata's best-loved open spaces, read through their water, their trees and the skyline each one frames.",
          stats: [["4", "open spaces studied"], ["3", "are built around water"], ["1", "has a skyline made by trees alone"], ["2014\u201315", "first year, M.Arch"]],
          role: [["PROGRAMME", "M.Arch, Urban Design, Jadavpur University"], ["SITE", "Kolkata"], ["YEAR", "2014\u201315"], ["PROJECT", "First-year study"]],
          groups: [
            { label: "Tala Jheel Park", rows: [
              { kind: "html", html: "<p class=\"kc-note\">One of the best-known open spaces in north Kolkata. A water body sits at the centre, ringed by a walkable edge where people spend their leisure time. The skyline seen from here is made mainly by trees, not by buildings as elsewhere in Kolkata.</p>" },
              { kind: "duo", tiles: [
                { src: "assets/shades/tala-1.jpg", alt: "Tala Jheel Park", caption: "<b>Tala Jheel Park.</b> Trees make the skyline.", fit: "cover" },
                { src: "assets/shades/tala-2.jpg", alt: "Tala Jheel Park", caption: "<b>The edge.</b>", fit: "cover" }
              ] }
            ] },
            { label: "College Square", rows: [
              { kind: "html", html: "<p class=\"kc-note\">Used by every kind of person, from school students to office-goers. The walkable space around the water body makes it a passage from one end of College Street to the other.</p>" },
              { kind: "duo", tiles: [
                { src: "assets/shades/college-1.jpg", alt: "College Square", caption: "<b>College Square.</b> A pool, with a promenade.", fit: "cover" },
                { src: "assets/shades/college-2.jpg", alt: "College Square", caption: "<b>The pool.</b>", fit: "cover" }
              ] }
            ] },
            { label: "The Maidan", rows: [
              { kind: "html", html: "<p class=\"kc-note\">In the heart of the city, a huge area of open land used for many purposes from time to time. On ordinary days people play cricket and football, and ride horses. The skyline shows buildings and trees together.</p>" },
              { kind: "tri", tiles: [
                { src: "assets/shades/maidan-1.jpg", alt: "The Maidan", caption: "<b>The Maidan.</b> Open ground in the middle of the city.", fit: "cover" },
                { src: "assets/shades/maidan-2.jpg", alt: "The Maidan", caption: "<b>Across the field.</b>", fit: "cover" },
                { src: "assets/shades/maidan-3.jpg", alt: "The Maidan", caption: "<b>The horizon.</b>", fit: "cover" }
              ] }
            ] },
            { label: "Victoria Memorial", rows: [
              { kind: "html", html: "<p class=\"kc-note\">Part of the city since the British period. The landscape around the memorial, with water bodies on both sides, adds to its scenic beauty. Large lawns around it are where people come to spend their leisure time.</p>" },
              { kind: "tri", tiles: [
                { src: "assets/shades/victoria-1.jpg", alt: "Victoria Memorial", caption: "<b>Victoria Memorial.</b> The reflecting water.", fit: "cover" },
                { src: "assets/shades/victoria-2.jpg", alt: "Victoria Memorial", caption: "<b>The approach.</b>", fit: "cover" },
                { src: "assets/shades/victoria-3.jpg", alt: "Victoria Memorial", caption: "<b>The lawns.</b>", fit: "cover" }
              ] }
            ] }
          ]
        },
        images: [
          { src: "assets/shades/tala-1.jpg", caption: "Tala Jheel Park" },
          { src: "assets/shades/victoria-1.jpg", caption: "Victoria Memorial" }
        ] },
      {
        "num": "09",
        "category": "Personal",
        "categoryColor": "#3a78d0",
        "title": "A personal project \u2014 coming soon",
        "meta": "Personal project \u00b7 maps",
        "year": "",
        "color": "#3a78d0",
        "href": "#personal-soon",
        "id": "work-14",
        "comingSoon": true,
        "cursorEmoji": "\ud83d\uddfa\ufe0f",
        "img": "assets/cards/14.jpg",
        "desc": "A personal mapping project. Coming soon.",
        "quick": {
          "tags": [
            [
              "PERSONAL PROJECT",
              "#3a78d0"
            ],
            [
              "MAPS",
              "#935c90"
            ]
          ],
          "banner": "assets/cards/14.jpg",
          "result": "Coming soon. A personal project with maps is on its way.",
          "stats": [],
          "role": [],
          "groups": [],
          "soon": true
        }
      },
      {
        "num": "10",
        "category": "Paper",
        "categoryColor": "#1f4f8f",
        "title": "Bangali Adda: A Reason for Existence of Public Places in West Bengal",
        "meta": "Kolkata, West Bengal \u00b7 Research paper, MASA Journal",
        "year": "",
        "color": "#1f4f8f",
        "href": "#bangali-adda",
        "id": "work-12",
        "cursorEmoji": "\u2615",
        "img": "assets/cards/12.jpg",
        "desc": "A paper on the Bengali adda, the informal street-corner gathering, and how Kolkata's public places changed from rocks and tea stalls to malls.",
        "quick": {
          "tags": [
            [
              "RESEARCH PAPER",
              "#1f4f8f"
            ],
            [
              "PUBLIC SPACE",
              "#935c90"
            ],
            [
              "KOLKATA",
              "#c47ac0"
            ]
          ],
          "banner": "assets/research/banner-adda.jpg?v=3",
          "result": "Why did the Bengali adda need public places, and what happens to it as the old street corners give way to malls? A paper on Kolkata's public spaces from the pre-colonial village to the present.",
          "stats": [
            [
              "4",
              "types of public space in today's Kolkata"
            ],
            [
              "3",
              "eras: pre-colonial, colonial, post-independence"
            ],
            [
              "11",
              "photographs of addas, old and new"
            ],
            [
              "2",
              "authors"
            ]
          ],
          "role": [
            [
              "TYPE",
              "Research paper, MASA Journal"
            ],
            [
              "AUTHORS",
              "Ar. Suparna Biswas and Ar. Janani Ranganathan"
            ],
            [
              "INSTITUTION",
              "Om Dayal Group of Institutions, Howrah"
            ],
            [
              "PLACE",
              "Kolkata, West Bengal"
            ]
          ],
          "groups": [
            {
              "label": "What is an adda?",
              "rows": [
                {
                  "kind": "html",
                  "html": "<p class=\"kc-lead\">An <b>adda</b> is an informal gathering at a particular spot in the locality, and a quintessential part of Bengali culture: not a way to kill time, but <b>a timeless passion</b>. Bengalis spend hours at it, on local politics, world affairs, literature and music, across age and gender.</p>"
                },
                {
                  "kind": "html",
                  "html": "<div class=\"kc-props\"><div><b>1</b>Addas</div><div><b>2</b>Intelligentsia</div><div><b>3</b>Culture</div><div><b>4</b>Bengal</div><div><b>5</b>Social gathering</div></div>"
                },
                {
                  "kind": "duo",
                  "tiles": [
                    {
                      "src": "assets/research/adda-1.jpg",
                      "alt": "Adda at the Indian Coffee House",
                      "caption": "<b>Adda in the Coffee House.</b>",
                      "fit": "cover"
                    },
                    {
                      "src": "assets/research/adda-2.jpg",
                      "alt": "The rowaks of North Calcutta",
                      "caption": "<b>The rowaks of North Calcutta.</b> A plinth outside the house.",
                      "fit": "cover"
                    }
                  ]
                }
              ]
            },
            {
              "label": "Where adda lived: public space through time",
              "rows": [
                {
                  "kind": "html",
                  "html": "<div class=\"kc-time\"><div><b>Before the British</b><p>Ghats, markets, temples, chandimandaps. Caste and gender strictly separated; women kept out of addas.</p></div><div><b>Colonial Kolkata</b><p>The Maidan; white and native towns. In the native town: rocks, tea shops, para clubs.</p></div><div><b>After independence</b><p>Everyday places based on activity, literature and culture still lead the public realm.</p></div><div><b>Today</b><p>Para addas shrink as housing towers and malls take over.</p></div></div>"
                }
              ]
            },
            {
              "label": "Four kinds of public space in Kolkata today",
              "rows": [
                {
                  "kind": "html",
                  "html": "<div class=\"kc-issues\"><div><b>1 &middot; Para culture</b><p>Club houses, vacant lots, grocery shops and rocks in front of houses. No contest, total participation.</p></div><div><b>2 &middot; Everyday spaces</b><p>Thoroughfares, street temples around trees, bus stops. They work through participation, not design.</p></div><div><b>3 &middot; Cultural meet-ups</b><p>Nandan, the Fine Arts Academy, Madhusudan Mancha, Dakshinapan.</p></div><div><b>4 &middot; Quasi-public</b><p>Malls, shopping centres and paid entertainment zones, privately owned or controlled.</p></div></div>"
                }
              ]
            },
            {
              "label": "Adda in everyday places",
              "rows": [
                {
                  "kind": "tri",
                  "tiles": [
                    {
                      "src": "assets/research/adda-4.jpg",
                      "alt": "Adda at a local tea stall",
                      "caption": "<b>At the tea stall.</b>",
                      "fit": "cover"
                    },
                    {
                      "src": "assets/research/adda-5.jpg",
                      "alt": "A pavement setting for adda",
                      "caption": "<b>The pavement.</b>",
                      "fit": "cover"
                    },
                    {
                      "src": "assets/research/adda-6.jpg",
                      "alt": "Adda at Nandan",
                      "caption": "<b>At Nandan.</b>",
                      "fit": "cover"
                    }
                  ]
                },
                {
                  "kind": "tri",
                  "tiles": [
                    {
                      "src": "assets/research/adda-3.jpg",
                      "alt": "Men chatting over tea",
                      "caption": "<b>Over tea.</b>",
                      "fit": "cover"
                    },
                    {
                      "src": "assets/research/adda-7.jpg",
                      "alt": "Adda continued on the rowaks",
                      "caption": "<b>On the rowaks.</b>",
                      "fit": "cover"
                    },
                    {
                      "src": "assets/research/adda-8.jpg",
                      "alt": "Adda in a local restaurant",
                      "caption": "<b>In a local restaurant.</b>",
                      "fit": "cover"
                    }
                  ]
                }
              ]
            },
            {
              "label": "Why it is fading",
              "rows": [
                {
                  "kind": "html",
                  "html": "<div class=\"kc-issues\"><div><b>Old houses go</b><p>Multistoried complexes replace the old houses, and the rocks vanish with them.</p></div><div><b>Work hours change</b><p>Corporate culture: no fixed six-in-the-evening to be home for an adda.</p></div><div><b>Screens</b><p>Technology and a hectic life pull people online instead of to the corner.</p></div><div><b>Warmth is lost</b><p>Branded cafes have the facilities, but not the warmth of the corner tea stall.</p></div></div>"
                }
              ]
            },
            {
              "label": "Adda moves to the mall",
              "rows": [
                {
                  "kind": "quad",
                  "tiles": [
                    {
                      "src": "assets/research/adda-9.jpg",
                      "alt": "Adda in a food court",
                      "caption": "<b>The food court.</b>",
                      "fit": "cover"
                    },
                    {
                      "src": "assets/research/adda-10.jpg",
                      "alt": "Tea Junction at City Centre, Salt Lake",
                      "caption": "<b>Tea Junction.</b> City Centre, Salt Lake.",
                      "fit": "cover"
                    },
                    {
                      "src": "assets/research/adda-11.jpg",
                      "alt": "A semi-open space within a modern mall",
                      "caption": "<b>Semi-open space.</b> Within a mall.",
                      "fit": "cover"
                    },
                    {
                      "src": "assets/research/adda-12.jpg",
                      "alt": "A space outside a mall that became an adda zone",
                      "caption": "<b>Outside a mall.</b> An adda zone forms.",
                      "fit": "cover"
                    }
                  ]
                },
                {
                  "kind": "html",
                  "html": "<p class=\"kc-note\">Malls like City Centre 1 and 2 are now designed with landscaped, open or semi-open seating and tea and coffee stalls to bring the adda back, <b>with an overtone of consumerism</b>.</p>"
                }
              ]
            },
            {
              "label": "What the paper proposes",
              "rows": [
                {
                  "kind": "html",
                  "html": "<div class=\"kc-quote sm\">Open-type spaces can be integrated within the design of modern public buildings to revive the adda, and to encourage people bogged down with hectic lives to exchange creative ideas again.</div>"
                },
                {
                  "kind": "html",
                  "html": "<p class=\"kc-cap\">Photographs as credited in the paper: blog.teabox.com, geocities.ws/kolkatabeckons, thesnotgreensea.wordpress.com.</p>"
                }
              ]
            }
          ],
          "links": [
            [
              "READ THE PAPER (PDF)",
              "assets/research/bangali-adda-masa-journal.pdf"
            ]
          ]
        }
      },
      {
        "num": "11",
        "category": "Paper",
        "categoryColor": "#1f4f8f",
        "title": "The Role of Public Participation and Governance in Designing Spaces Under Flyovers \u2014 commoning and gender-inclusive public spaces",
        "meta": "India \u00b7 Research essay, IMPRI fellowship",
        "year": "",
        "color": "#1f4f8f",
        "href": "#flyover-essay",
        "id": "work-13",
        "cursorEmoji": "\ud83c\udf09",
        "img": "assets/cards/13.jpg",
        "desc": "An essay on how public participation and governance can turn neglected spaces under flyovers into shared, gender-inclusive urban commons, through cases in Chennai, Kolkata and Bengaluru.",
        "quick": {
          "tags": [
            [
              "RESEARCH PAPER",
              "#1f4f8f"
            ],
            [
              "PUBLIC SPACE",
              "#935c90"
            ],
            [
              "GENDER INCLUSIVE",
              "#c47ac0"
            ]
          ],
          "banner": "assets/research/banner.jpg?v=2",
          "result": "How can the neglected spaces under flyovers become shared, gender-inclusive public spaces? An essay on public participation and governance, read through three Indian cases.",
          "stats": [
            [
              "3",
              "flyover case studies: Chennai, Kolkata, Bengaluru"
            ],
            [
              "5",
              "concepts in one framework"
            ],
            [
              "4",
              "theories applied"
            ],
            [
              "5",
              "research questions"
            ]
          ],
          "role": [
            [
              "TYPE",
              "Research essay"
            ],
            [
              "PROGRAMME",
              "IMPRI fellowship"
            ],
            [
              "AUTHOR",
              "Ar. Janani Ranganathan"
            ],
            [
              "TOPIC",
              "Commoning, governance and gender inclusion under flyovers"
            ]
          ],
          "groups": [
            {
              "label": "The question",
              "rows": [
                {
                  "kind": "html",
                  "html": "<p class=\"kc-lead\">The spaces under flyovers are everywhere in Indian cities, and mostly <b>neglected</b>: informal parking, dumping, or left empty. This essay asks how <b>public participation and governance</b> can turn them into shared, <b>gender-inclusive</b> public spaces: urban commons.</p>"
                },
                {
                  "kind": "html",
                  "html": "<div class=\"kc-props\"><div><b>1</b>Public space</div><div><b>2</b>Commoning</div><div><b>3</b>Governance</div><div><b>4</b>Gender inclusive</div><div><b>5</b>Spaces under flyovers</div></div>"
                }
              ]
            },
            {
              "label": "Five concepts, one framework",
              "rows": [
                {
                  "kind": "whole",
                  "tiles": [
                    {
                      "src": "assets/research/framework.jpg",
                      "alt": "Conceptual framework linking governance, public participation, commoning, urban commons and gender inclusivity",
                      "caption": "<b>The conceptual framework.</b> Governance enables participation; participation fosters commoning; commoning builds urban commons; commons prioritise safety and accessibility for all genders.",
                      "fit": "contain"
                    }
                  ]
                }
              ]
            },
            {
              "label": "Four lenses",
              "rows": [
                {
                  "kind": "html",
                  "html": "<div class=\"kc-issues\"><div><b>Environmental psychology</b><p>How lighting, access and layout shape comfort and safety.</p></div><div><b>Urban commons theory</b><p>Shared spaces managed collectively, with shared responsibility.</p></div><div><b>Gender and space theory</b><p>How design decides who can use a space and feel comfortable in it.</p></div><div><b>Placemaking theory</b><p>Community-led processes that make spaces that reflect their users.</p></div></div>"
                }
              ]
            },
            {
              "label": "Questions and method",
              "rows": [
                {
                  "kind": "html",
                  "html": "<div class=\"wi-facts\"><div><b>5</b><span>research questions on policy, participation, commoning and gender equity</span></div><div><b>Mixed</b><span>interviews, user surveys and site visits, GIS and data review</span></div><div><b>3</b><span>case studies, two primary and one secondary</span></div></div>"
                },
                {
                  "kind": "html",
                  "html": "<p class=\"kc-note\">Two <b>primary</b> cases were visited: Kathipara Urban Square in Chennai and the New Town Bridge in Kolkata. Domlur Flyover in Bengaluru is the <b>secondary</b> case.</p>"
                }
              ]
            },
            {
              "label": "Kathipara Urban Square, Chennai",
              "rows": [
                {
                  "kind": "tri",
                  "tiles": [
                    {
                      "src": "assets/research/kathipara-1.jpg",
                      "alt": "Food kiosks at Kathipara Urban Square at night",
                      "caption": "<b>Kiosks and seating.</b>",
                      "fit": "cover"
                    },
                    {
                      "src": "assets/research/kathipara-2.jpg",
                      "alt": "The plaza under the Kathipara flyover at night",
                      "caption": "<b>The plaza.</b> Lit, green and busy at night.",
                      "fit": "cover"
                    },
                    {
                      "src": "assets/research/kathipara-3.jpg",
                      "alt": "The edge of the plaza with parking",
                      "caption": "<b>The edge.</b> Parking kept outside the core.",
                      "fit": "cover"
                    }
                  ]
                },
                {
                  "kind": "html",
                  "html": "<div class=\"kc-issues\"><div><b>Before</b><p>Underused and only partly accessible; no crossings or amenities; no proper landscape.</p></div><div><b>Four design ideas</b><p>Public participation; pedestrian-first design; multi-use space; gender-inclusive, safe space.</p></div><div><b>Governance</b><p>CMDA planned and funded it, with municipal bodies, traffic authorities and local groups.</p></div></div>"
                },
                {
                  "kind": "html",
                  "html": "<div class=\"wi-facts\"><div><b>Late night</b><span>the plaza is in use, which keeps it safer</span></div><div><b>Footfall</b><span>daily commuters, pedestrians and vendors</span></div><div><b>Safety</b><span>women and marginalised groups report feeling safer</span></div><div><b>Income</b><span>vendors, artisans and food stalls</span></div></div>"
                }
              ]
            },
            {
              "label": "New Town Bridge, Kolkata",
              "rows": [
                {
                  "kind": "duo",
                  "tiles": [
                    {
                      "src": "assets/research/newtown-1.jpg",
                      "alt": "The painted underside of the New Town Bridge with a craft market",
                      "caption": "<b>The arts and crafts market.</b> Under a painted vault.",
                      "fit": "cover"
                    },
                    {
                      "src": "assets/research/newtown-2.jpg",
                      "alt": "Seating area and an e-rickshaw under the bridge",
                      "caption": "<b>Seating and kiosks.</b>",
                      "fit": "cover"
                    }
                  ]
                },
                {
                  "kind": "html",
                  "html": "<div class=\"kc-issues\"><div><b>Two zones</b><p>An arts and crafts marketplace, and kiosks with seating for informal gatherings.</p></div><div><b>Public art</b><p>Large, colourful geometric murals on the underside of the bridge.</p></div><div><b>Governance</b><p>The local government maintains the space and allows structured vendor operations and events.</p></div></div>"
                },
                {
                  "kind": "html",
                  "html": "<p class=\"kc-note\"><b>Commoning in practice.</b> Vendors, pedestrians and visitors share the space, and continuous activity and good lighting make it feel safer for women and marginalised groups.</p>"
                }
              ]
            },
            {
              "label": "Domlur Flyover, Bengaluru",
              "rows": [
                {
                  "kind": "html",
                  "html": "<div class=\"wi-facts\"><div><b>Open-air theatre</b><span>proposed by BBMP under the flyover</span></div><div><b>Rs 40 lakh</b><span>estimated budget</span></div><div><b>Community</b><span>residents and organisations took part in planning</span></div></div>"
                },
                {
                  "kind": "html",
                  "html": "<p class=\"kc-note\">Once underused and misused, the space is now a venue for cultural events and community gatherings. The lesson: <b>community involvement keeps it going</b>.</p>"
                }
              ]
            },
            {
              "label": "What it concludes",
              "rows": [
                {
                  "kind": "html",
                  "html": "<div class=\"kc-issues\"><div><b>Design, people and governance</b><p>Successful under-flyover spaces combine thoughtful design, community engagement and strong governance.</p></div><div><b>Governance after the opening</b><p>Without it, revived spaces risk sliding back into neglect.</p></div><div><b>Gender-sensitive design</b><p>Well-lit, pedestrian-friendly spaces with room for many activities bring in more people.</p></div><div><b>Urban commons</b><p>These spaces can go beyond infrastructure and become community-driven, strengthening local identity.</p></div></div>"
                }
              ]
            },
            {
              "label": "Scope and limits",
              "rows": [
                {
                  "kind": "html",
                  "html": "<p class=\"kc-p\">The study looks at the use of under-flyover spaces as public spaces, the gender dimension, and commoning. It considers only men and women, because of time and data limits, and findings from these flyovers may not apply to all cities.</p>"
                }
              ]
            }
          ],
          "links": [
            [
              "READ THE ESSAY (PDF)",
              "assets/research/public-participation-governance-under-flyovers.pdf"
            ]
          ]
        }
      },
      { num: "12", category: "Work", categoryColor: "#0c2036", title: "Repositioning Writers' Buildings — documenting a Kolkata landmark", meta: "Kolkata · Heritage documentation, Jadavpur University", year: "2014", color: "#0c2036", href: "#writers-detail", id: "work-09", detailId: "writers-detail", cursorEmoji: "🏛️", img: "assets/cards/09.jpg", desc: "A documentation project for the Writers' Building: a register of old drawings, measured elevations, a photographic survey and an analysis of how its floors are built.",
        quick: {
          tags: [["HERITAGE DOCUMENTATION", "#c47ac0"], ["KOLKATA", "#935c90"], ["JADAVPUR UNIVERSITY", "#0c2036"]],
          banner: "assets/writers/banner.jpg",
          result: "Documentation of the Writers' Building in Kolkata: a register of every old drawing, measured elevations, a photographic survey and an analysis of how its floors are built.",
          stats: [["33", "old drawings catalogued"], ["1880\u20131988", "the span of those drawings"], ["16", "steps in the heritage workflow"], ["400+", "photographs"]],
          role: [["LAB", "Energy Efficient Built Environment Lab, Department of Architecture, Jadavpur University"], ["SITE", "Writers' Building, BBD Bagh, Kolkata"], ["YEAR", "2014"], ["TEAM", "Documentation team"]],
          groups: [
            { label: "A building and its square", rows: [
              { kind: "html", html: "<div class=\"wi-facts\"><div><b>1712</b><span>the Great Tank, which Tank Square was named for, was dug</span></div><div><b>5 + 1</b><span>blocks and a main block to document</span></div><div><b>33</b><span>old drawings catalogued, 1880 to 1988</span></div><div><b>400+</b><span>photographs of the blocks</span></div></div>" },
              { kind: "tri", tiles: [
                { src: "assets/writers/hist-1.jpg", alt: "Writers Buildings from the tank", caption: "<b>From the tank.</b> An early photograph.", fit: "cover" },
                { src: "assets/writers/hist-4.jpg", alt: "Writers Building", caption: "<b>The Writers' Building.</b> A later view.", fit: "cover" },
                { src: "assets/writers/hist-3.jpg", alt: "Tank Square", caption: "<b>Tank Square.</b> St Andrew's church and the tank.", fit: "cover" }
              ] },
              { kind: "quad", tiles: [
                { src: "assets/writers/hist-7.jpg", alt: "Tank Square from the east", caption: "<b>Tank Square,</b> 1794.", fit: "cover" },
                { src: "assets/writers/hist-8.jpg", alt: "Old Fort William", caption: "<b>The Old Fort.</b> 1786.", fit: "cover" },
                { src: "assets/writers/hist-9.jpg", alt: "Tank Square", caption: "<b>The tank.</b> 1826.", fit: "cover" },
                { src: "assets/writers/hist-10.jpg", alt: "Views of Calcutta", caption: "<b>The square.</b> 1788.", fit: "cover" }
              ] }
            ] },
            { label: "Documenting heritage", rows: [
              { kind: "html", html: "<p class=\"kc-note\">A workshop, <b>Documenting Heritage Buildings</b>, was held on 5 September 2014. Roger Beston, Deputy Chairman of Australia Heritage, set out the four steps of conservation (reconstruction, restoration, maintenance, preservation) and a <b>sixteen-step</b> heritage management process.</p>" },
              { kind: "html", html: "<div class=\"wb-steps\"><div><b>1</b><span>Secure the site</span><em>from immediate threats: vandalism, water penetration, collapse</em></div><div><b>2</b><span>Local expertise</span><em>specialists in each field</em></div><div><b>3</b><span>Conservation management plan</span><em>document, assess significance, formulate policy, action plan, measured drawings</em></div><div><b>4</b><span>Assess fabric condition</span></div><div><b>5</b><span>Analysis</span><em>defects, presentation, materials</em></div><div><b>6</b><span>Resolve remediation</span></div><div><b>7</b><span>Functional deficiencies</span></div><div><b>8</b><span>Code compliance</span></div><div><b>9</b><span>Sustainable design</span><em>opportunities</em></div><div><b>10</b><span>Building works</span><em>resolve interventions</em></div><div><b>11</b><span>New design</span></div><div><b>12</b><span>Authorities and stakeholders</span></div><div><b>13</b><span>Contractors and craftsmen</span><em>qualified, specialist</em></div><div><b>14</b><span>Supervise works</span></div><div><b>15</b><span>Interpretation</span><em>develop and implement a strategy</em></div><div><b>16</b><span>Cyclical maintenance</span></div></div>" }
            ] },
            { label: "The drawing register", rows: [
              { kind: "html", html: "<p class=\"um-sub\">EVERY OLD DRAWING, DATED, LOCATED ON A KEY PLAN AND READ FOR WHAT IT SAYS ABOUT CHANGE</p>" },
              { kind: "tri", tiles: [
                { src: "assets/writers/register-1.jpg", alt: "Drawing register, sheet 1", caption: "<b>Register, sheet 1.</b>", fit: "contain" },
                { src: "assets/writers/register-2.jpg", alt: "Drawing register, sheet 2", caption: "<b>Register, sheet 2.</b>", fit: "contain" },
                { src: "assets/writers/register-3.jpg", alt: "Drawing register, sheet 3", caption: "<b>Register, sheet 3.</b>", fit: "contain" }
              ] },
              { kind: "tri", tiles: [
                { src: "assets/writers/register-4.jpg", alt: "Drawing register, sheet 4", caption: "<b>Register, sheet 4.</b>", fit: "contain" },
                { src: "assets/writers/register-5.jpg", alt: "Drawing register, sheet 5", caption: "<b>Register, sheet 5.</b>", fit: "contain" },
                { src: "assets/writers/register-6.jpg", alt: "Drawing register, sheet 6", caption: "<b>Register, sheet 6.</b>", fit: "contain" }
              ] }
            ] },
            { label: "Measured elevations", rows: [
              { kind: "duo", tiles: [
                { src: "assets/writers/elev-front.jpg", alt: "Front elevation of the main block", caption: "<b>Front elevation,</b> main block.", fit: "contain" },
                { src: "assets/writers/photos-main.jpg", alt: "The main block today", caption: "<b>The main block today.</b>", fit: "cover" }
              ] },
              { kind: "duo", tiles: [
                { src: "assets/writers/elev-rear-1.jpg", alt: "Rear elevation, part 1", caption: "<b>Rear elevation,</b> part 1.", fit: "contain" },
                { src: "assets/writers/elev-rear-3.jpg", alt: "Rear elevation, part 3", caption: "<b>Rear elevation,</b> part 3.", fit: "contain" }
              ] }
            ] },
            { label: "The photograph survey", rows: [
              { kind: "five", tiles: [
                { src: "assets/writers/ph-123107.jpg", alt: "Exposed brick at the plinth", caption: "<b>Exposed brick</b> at the plinth.", fit: "cover" },
                { src: "assets/writers/ph-125900.jpg", alt: "Window air-conditioners on the facade", caption: "<b>Air-conditioners</b> fixed to the facade.", fit: "cover" },
                { src: "assets/writers/ph-141630.jpg", alt: "Arches and pipework in a courtyard", caption: "<b>Pipes and cables</b> cross the arches.", fit: "cover" },
                { src: "assets/writers/ph-125155.jpg", alt: "Debris and weeds at the base of a wall", caption: "<b>Debris and weeds</b> at a wall base.", fit: "cover" },
                { src: "assets/writers/ph-163136.jpg", alt: "A facade of arched windows", caption: "<b>Arched windows,</b> shuttered.", fit: "cover" }
              ] }
            ] },
            { label: "How the floors are held up", rows: [
              { kind: "html", html: "<div class=\"kc-issues\"><div><b>Steel joist, wooden purlins</b><p>The original system: 7 m and 3.5 m spans between load-bearing walls, in the core of every floor.</p></div><div><b>Steel joist, steel purlins</b><p>Over the three porticos on the first and second floors, spanning about 6 m.</p></div><div><b>Steel joist, brick vaults</b><p>In the first and second floor corridors: shallow vaults keep the structure thin so the outside does not look busy.</p></div></div>" }
            ] }
          ]
        },
        images: [
          { src: "assets/writers/ph-163136.jpg", caption: "The facade today" },
          { src: "assets/writers/hist-1.jpg", caption: "An early view across the tank" }
        ] },
      { num: "13", category: "Work", categoryColor: "#0c2036", title: "Office Interiors, Kolkata — a regional and a zonal office in one colour scheme", meta: "Kolkata · Interior design, freelance", year: "", color: "#2b68b2", href: "#office-detail", id: "work-10", detailId: "office-detail", cursorEmoji: "💼", img: "assets/interiors/office/ph-1.jpg", desc: "Interiors for a regional and a zonal office, each with its own character, in the client's approved blue-and-white scheme.",
        quick: {
          tags: [["INTERIOR DESIGN", "#0c2036"], ["OFFICE", "#c47ac0"], ["KOLKATA", "#935c90"]],
          banner: "assets/interiors/office/banner.svg",
          result: "Interiors for a regional and a zonal office, each with its own character, tied together by the client's approved blue-and-white colour scheme.",
          stats: [["2", "regions: regional and zonal office"], ["4", "colours in the approved scheme"], ["1", "shared theme"], ["Freelance", "assisting architect"]],
          role: [["TYPE", "Interior design, office"], ["SITE", "Kolkata"], ["ROLE", "Assisting architect, freelance"], ["CLIENT BRIEF", "Use the current approved colour scheme"]],
          groups: [
            { label: "The brief", rows: [
              { kind: "html", html: "<p class=\"kc-note\">The client wanted the interiors designed <b>in their current, approved office colour scheme</b>. The area was divided into two regions, a <b>regional office</b> and a <b>zonal office</b>. Each had to have its own character and still follow the main theme.</p>" },
              { kind: "html", html: "<div class=\"wi-facts\"><div><b>2</b><span>regions: the regional office and the zonal office</span></div><div><b>1</b><span>main theme shared by both</span></div><div><b>4</b><span>colours in the approved scheme</span></div></div>" }
            ] },
            { label: "The spaces", rows: [
              { kind: "duo", tiles: [
                { src: "assets/interiors/office/ph-1.jpg", alt: "Open-plan workstations with blue partitions", caption: "<b>Open-plan desks.</b> Blue partitions on white tops.", fit: "cover" },
                { src: "assets/interiors/office/ph-2.jpg", alt: "A long meeting table", caption: "<b>Meeting room.</b> A long white table.", fit: "cover" }
              ] },
              { kind: "tri", tiles: [
                { src: "assets/interiors/office/ph-3.jpg", alt: "A glazed cabin", caption: "<b>A glazed cabin.</b>", fit: "cover" },
                { src: "assets/interiors/office/ph-4.jpg", alt: "Frosted glass partition", caption: "<b>Frosted glass</b> between zones.", fit: "cover" },
                { src: "assets/interiors/office/ph-5.jpg", alt: "Workstations along a window wall", caption: "<b>Desks by the windows.</b>", fit: "cover" }
              ] }
            ] },
            { label: "The palette", rows: [
              { kind: "html", html: "<div class=\"int-sw\"><div><i style=\"background:#2b68b2\"></i><b>Blue</b><span>#2B68B2</span></div><div><i style=\"background:#96acc3\"></i><b>Grey-blue</b><span>#96ACC3</span></div><div><i style=\"background:#f0f9fc\"></i><b>Pale blue</b><span>#F0F9FC</span></div><div><i style=\"background:#fffffa\"></i><b>White</b><span>#FFFFFA</span></div></div>" }
            ] }
          ]
        },
        images: [
          { src: "assets/interiors/office/ph-1.jpg", caption: "Open-plan desks" },
          { src: "assets/interiors/office/ph-2.jpg", caption: "Meeting room" }
        ] },
      { num: "14", category: "Work", categoryColor: "#0c2036", title: "Restaurant Interiors, Kolkata — a redesign in green", meta: "Kolkata · Interior redesign, freelance", year: "", color: "#92c83e", href: "#restaurant-detail", id: "work-11", detailId: "restaurant-detail", cursorEmoji: "🍽️", img: "assets/interiors/restaurant/ph-2.jpg", desc: "A restaurant redesign with a green palette for calm, cool blues on the stairs, and some elements kept from the earlier version.",
        quick: {
          tags: [["INTERIOR DESIGN", "#0c2036"], ["RESTAURANT", "#c47ac0"], ["KOLKATA", "#935c90"]],
          banner: "assets/interiors/restaurant/banner.svg",
          result: "A redesign of a restaurant in Kolkata: a green palette for calm, cool blues on the stairs, and a few elements kept from the earlier version.",
          stats: [["1", "existing restaurant, redesigned"], ["5", "colours in the palette"], ["Green", "chosen for calm and nature"], ["Blue", "on the staircase to the restaurant"]],
          role: [["TYPE", "Interior redesign, restaurant"], ["SITE", "Kolkata"], ["ROLE", "Freelance architect"], ["CLIENT BRIEF", "A new look, keeping some earlier elements"]],
          groups: [
            { label: "The brief", rows: [
              { kind: "html", html: "<p class=\"kc-note\">This was more of a <b>redesign</b>. The owners wanted a new look for the restaurant while <b>keeping some elements of the earlier version</b>. They also asked for green: said to induce calm and to represent nature.</p>" },
              { kind: "html", html: "<div class=\"wi-facts\"><div><b>1</b><span>existing restaurant, redesigned</span></div><div><b>5</b><span>colours in the palette</span></div><div><b>2</b><span>moods: green for the dining room, cool blues on the stairs</span></div></div>" }
            ] },
            { label: "The restaurant", rows: [
              { kind: "duo", tiles: [
                { src: "assets/interiors/restaurant/ph-2.jpg", alt: "Dining room with green seating", caption: "<b>The dining room.</b> Green benches and a stone-textured wall.", fit: "cover" },
                { src: "assets/interiors/restaurant/ph-3.jpg", alt: "Ceiling with coloured lighting", caption: "<b>The ceiling.</b> A coloured light strip along the edge.", fit: "cover" }
              ] },
              { kind: "html", html: "<p class=\"um-sub\">THE ENTRANCE AND THE STAIRS</p>" },
              { kind: "tri", tiles: [
                { src: "assets/interiors/restaurant/ph-4.jpg", alt: "The entrance", caption: "<b>The entrance.</b>", fit: "cover" },
                { src: "assets/interiors/restaurant/ph-1.jpg", alt: "A teal stair wall with framed pictures", caption: "<b>The stair wall.</b> Framed pictures on teal.", fit: "cover" },
                { src: "assets/interiors/restaurant/ph-5.jpg", alt: "A teal passage beside the stairs", caption: "<b>The stairs.</b> Cool blues leading up.", fit: "cover" }
              ] }
            ] },
            { label: "The palette", rows: [
              { kind: "html", html: "<div class=\"int-sw\"><div><i style=\"background:#2b0e0f\"></i><b>Deep brown</b><span>#2B0E0F</span></div><div><i style=\"background:#27a6d9\"></i><b>Cyan</b><span>#27A6D9</span></div><div><i style=\"background:#fffffa\"></i><b>White</b><span>#FFFFFA</span></div><div><i style=\"background:#f8f7c8\"></i><b>Pale yellow</b><span>#F8F7C8</span></div><div><i style=\"background:#92c83e\"></i><b>Green</b><span>#92C83E</span></div></div>" }
            ] }
          ]
        },
        images: [
          { src: "assets/interiors/restaurant/ph-2.jpg", caption: "The dining room" },
          { src: "assets/interiors/restaurant/ph-1.jpg", caption: "The stair wall" }
        ] }
  ];

  var CATEGORIES = [
    { key: "MUPD", label: "Urban Planning & Data Analytics · IAAC", color: "#6c436a" },
    { key: "UD", label: "Urban Design Studio · Jadavpur University", color: "#c47ac0" },
    { key: "Personal", label: "Independent projects", color: "#3a78d0" },
    { key: "Paper", label: "Research & Writing", color: "#1f4f8f" },
    { key: "Work", label: "Professional Work", color: "#0c2036" }
  ];

  var BIO = "I’m Janani, an architect and urban designer who reads cities through data and designs them for the people who use them. I graduated as a gold medalist in my master’s in urban design from Jadavpur University, and have taught and practiced across India. I was a UPLGYF fellow in urban policy and local governance. I’m currently pursuing another master’s degree in Advanced Urban Planning and Data Analytics at IAAC, Barcelona, Spain. At IAAC, I work with spatial data, from satellite imagery to street-level surveys and other urban analytics tools, and my thesis asks how public space can adapt to a warming climate while working for women.";

  var DETAIL_TOCS = [
    ["downtowns-detail", "dt-", "downtowns-toc-link", "#1f4f8f"],
    ["kanchee-detail", "k-", "kanchee-toc-link", "#935c90"],
    ["wingit-detail", "w-", "wingit-toc-link", "#935c90"],
    ["collectively-detail", "cf-", "collectively-toc-link", "#6c436a"],
    ["sandmatters-detail", "sm-", "sandmatters-toc-link", "#0c2036"],
    ["urbanmirror-detail", "um-", "urbanmirror-toc-link", "#c47ac0"],
    ["rajarhat-detail", "rj-", "rajarhat-toc-link", "#935c90"],
    ["jodhpurpark-detail", "jp-", "jodhpurpark-toc-link", "#6c436a"],
    ["writers-detail", "wb-", "writers-toc-link", "#0c2036"],
    ["restaurant-detail", "rs-", "restaurant-toc-link", "#0c2036"],
    ["office-detail", "of-", "office-toc-link", "#0c2036"],
    ["shades-detail", "sk-", "shades-toc-link", "#935c90"]
  ];

  var $ = function (id) { return document.getElementById(id); };
  var scroller = $("scroller");
  var filterCategory = null;

  function el(tag, props, style) {
    var e = document.createElement(tag);
    if (props) Object.keys(props).forEach(function (k) { e[k] = props[k]; });
    if (style) e.style.cssText = style;
    return e;
  }

  /* ---------- Detail pages ---------- */
  function openDetail(id) {
    var s = $(id);
    if (!s) return;
    s.classList.add("detail-open");
    var sc = s.querySelector(".detail-scroll");
    if (sc) sc.scrollTop = 0;
    history.replaceState(null, "", "#" + id);
  }
  function closeDetail(s) {
    s.classList.remove("detail-open");
    history.replaceState(null, "", location.pathname + location.search);
  }
  document.querySelectorAll("[data-open]").forEach(function (a) {
    a.addEventListener("click", function (e) { e.preventDefault(); openDetail(a.dataset.open); });
  });
  /* SKILL-LINKS */ document.querySelectorAll(".skill-chip[data-project]").forEach(function (b) {
    b.addEventListener("click", function (e) {
      e.preventDefault();
      var id = b.getAttribute("data-project");
      if (id === "kanchee") { openQuick(THESIS_KANCHEE); return; }
      if (id === "cv") { var cv = document.querySelector(".mt.menu.m5"); if (cv) cv.click(); return; }
      var p = PROJECTS.filter(function (x) { return x.num === id; })[0];
      if (p) { if (p.quick) openQuick(p); else openStory(p); }
    });
  });
  document.querySelectorAll("[data-quick-iaac]").forEach(function (a) {
    a.addEventListener("click", function (e) { e.preventDefault(); openQuick(THESIS_IAAC); });
  });
  /* Thesis cards: the same follow-the-pointer emoji cursor as the project folders */
  (function () {
    var cols = document.querySelectorAll("#thesis > div > div");
    var icons = ["\uD83D\uDED5", "\uD83C\uDF21\uFE0F"];   // temple, thermometer
    cols.forEach(function (col, i) {
      if (!icons[i]) return;
      col.classList.add("cursor-card");
      col.style.position = "relative";
      var fly = el("span", { className: "cursor-fly", textContent: icons[i] }, "position: absolute; left: 50%; top: 50%; font-size: 24px; pointer-events: none; margin-left: -12px; margin-top: -12px; z-index: 6;");
      col.appendChild(fly);
      col.addEventListener("mousemove", function (e) {
        var r = col.getBoundingClientRect();
        fly.style.left = (e.clientX - r.left) + "px";
        fly.style.top = (e.clientY - r.top) + "px";
      });
    });
  })();
  /* KANCHEE-HOOK */ document.querySelectorAll("[data-quick-kanchee]").forEach(function (a) {
    a.addEventListener("click", function (e) { e.preventDefault(); openQuick(THESIS_KANCHEE); });
  });
  document.querySelectorAll("[data-close]").forEach(function (a) {
    a.addEventListener("click", function (e) { e.preventDefault(); closeDetail(a.closest("section")); });
  });
  document.addEventListener("keydown", function (e) {
    if (e.key !== "Escape") return;
    if ($("quick-lb").classList.contains("open")) { $("quick-lb").click(); return; }
    if ($("quick").classList.contains("open")) { closeQuick(); return; }
    if ($("story").classList.contains("open")) { closeStory(); return; }
    document.querySelectorAll(".detail-open").forEach(closeDetail);
  });

  /* ---------- Nav visibility ---------- */
  var nav = $("site-nav");
  function onScroll() {
    var past = scroller.scrollTop > window.innerHeight * 0.6;
    var m = $("menu"), over = false;
    if (m) { var r = m.getBoundingClientRect(); over = r.top < window.innerHeight * 0.5 && r.bottom > window.innerHeight * 0.5; }   // page 2 carries the menu itself
    nav.classList.toggle("over-menu", over);
    var ab = $("skills"), stg = document.querySelector(".tstage");       // technical skills drop in while page 3 is on screen
    if (ab && stg) { var q = ab.getBoundingClientRect(); stg.classList.toggle("go", q.top < window.innerHeight * 0.6 && q.bottom > window.innerHeight * 0.4); }
    nav.style.opacity = past ? "1" : "0";
    nav.style.pointerEvents = past ? "auto" : "none";
  }
  var scrollTick = false;
  scroller.addEventListener("scroll", function () { if (scrollTick) return; scrollTick = true; requestAnimationFrame(function () { scrollTick = false; onScroll(); }); }, { passive: true });
  /* page 3 safety net: re-check every so often in case a scroll event was missed */
  setInterval(function () { if (typeof onScroll === "function") onScroll(); }, 1000);

  onScroll();

  /* ---------- Cover: country hover + ranking tabs ---------- */
  (function () {
    var WD = window.WORLD_DATA, box = $("world-land");
    if (!WD || !window.WORLD_LAND || !box) return;
    box.innerHTML = window.WORLD_LAND;
    var svg = box.firstChild, tipEl = $("country-tip"), coverSec = box.parentElement, legendEl = $("map-legend");
    var groups = Array.prototype.slice.call(svg.querySelectorAll(".ctry"));
    var metric = null;                       // null = default patchwork; "vul" | "gii"
    var cur = null, gapTimer = null;
    var NODATA = "#d9dadd";
    var SCHEME = {
      vul: { label: "Climate vulnerability", note: "ND-GAIN 2024", worst: "most vulnerable", best: "least vulnerable",
             ramp: ["#fff1a8", "#fed976", "#feb24c", "#fd8d3c", "#f03b20", "#bd0026", "#7a0020"] },   // heat
      gii: { label: "Gender inequality", note: "UNDP GII 2023", worst: "most unequal", best: "least unequal",
             ramp: ["#f3e8fa", "#e0c8f0", "#c9a0e3", "#ad76d0", "#8c4fb6", "#69309a", "#44176f"] }       // violet
    };
    function rankKey(m) { return m === "vul" ? "vulRank" : "giiRank"; }
    function total(m) { return m === "vul" ? WD.meta.vulN : WD.meta.giiN; }
    function classOf(m, r) {                 // rank 1 -> darkest class
      var n = SCHEME[m].ramp.length, per = Math.ceil(total(m) / n);
      return n - 1 - Math.min(n - 1, Math.floor((r - 1) / per));
    }
    function colourFor(m, d) {
      var r = d[rankKey(m)];
      return r ? SCHEME[m].ramp[classOf(m, r)] : NODATA;
    }

    function paint() {
      coverSec.classList.toggle("data-mode", !!metric); coverSec.dataset.metric = metric || "";        // hide the city hexagons in the climate / gender views
      groups.forEach(function (g) {
        if (metric) g.style.fill = colourFor(metric, WD.countries[g.dataset.i]);
        else g.style.removeProperty("fill");
      });
      buildLegend();
    }
    function buildLegend() {
      legendEl.innerHTML = "";
      if (!metric) { legendEl.hidden = true; return; }
      var S = SCHEME[metric], n = S.ramp.length, N = total(metric), per = Math.ceil(N / n);
      legendEl.appendChild(el("b", { textContent: S.label + " rank" }));
      legendEl.appendChild(el("small", { textContent: "1 = " + S.worst + " · " + N + " = " + S.best + " · " + S.note }));
      var bar = el("div", { className: "lg-bar" });
      for (var c = n - 1; c >= 0; c--) {            // darkest (rank 1) first
        var from = (n - 1 - c) * per + 1, to = Math.min(N, (n - c) * per);
        var cell = el("div", { className: "lg-cell" });
        cell.appendChild(el("i", null, "background:" + S.ramp[c]));
        cell.appendChild(el("span", { textContent: from + "–" + to }));
        bar.appendChild(cell);
      }
      var nd = el("div", { className: "lg-cell" });
      nd.appendChild(el("i", null, "background:" + NODATA));
      nd.appendChild(el("span", { textContent: "no data" }));
      bar.appendChild(nd);
      legendEl.appendChild(bar);
      legendEl.hidden = false;
    }

    function row(m, d) {
      var r = d[rankKey(m)];
      var div = el("div", { className: "row" });
      div.appendChild(el("span", { textContent: SCHEME[m].label }));
      div.appendChild(el("span", { textContent: r ? "#" + r + " of " + total(m) : "no data" }));
      return div;
    }
    function fillTip(d) {
      tipEl.innerHTML = "";
      tipEl.appendChild(el("b", { className: "name", textContent: d.name }));
      if (!metric || metric === "vul") tipEl.appendChild(row("vul", d));      // original map: both ranks; a tab: only its own
      if (!metric || metric === "gii") tipEl.appendChild(row("gii", d));
    }
    function clear() {
      if (cur) { cur.classList.remove("on"); cur = null; }
      svg.classList.remove("has-hover");
      tipEl.hidden = true;
    }
    function apply(g) {
      g.classList.add("on");
      svg.classList.add("has-hover");
      fillTip(WD.countries[g.dataset.i]);
      tipEl.hidden = false;
    }
    svg.addEventListener("mousemove", function (e) {
      var g = e.target.closest && e.target.closest(".ctry");
      if (g) {
        clearTimeout(gapTimer); gapTimer = null;
        if (g !== cur) { clear(); cur = g; apply(g); }
      } else if (cur && !gapTimer) {
        gapTimer = setTimeout(function () { gapTimer = null; clear(); }, 80);   // forgive gaps and ocean slivers
      }
      if (cur) {
        var r = coverSec.getBoundingClientRect();
        tipEl.style.left = Math.min(e.clientX - r.left, r.width - 240) + "px";
        tipEl.style.top = Math.min(e.clientY - r.top, r.height - 120) + "px";
      }
    });
    svg.addEventListener("mouseleave", function () { clearTimeout(gapTimer); gapTimer = null; clear(); });

    var tabs = document.querySelectorAll(".metric-switch button");
    tabs.forEach(function (b) {
      b.addEventListener("click", function () {
        metric = b.dataset.metric || null;                                   // "Original map" tab has no metric
        tabs.forEach(function (o) { var on = (o.dataset.metric || null) === metric; o.classList.toggle("on", on); o.setAttribute("aria-pressed", on); });
        paint();
        if (cur) fillTip(WD.countries[cur.dataset.i]);
      });
    });
  })();

  /* ---------- Cover: ripple cursor ---------- */
  (function () {
    var zones = Array.prototype.slice.call(document.querySelectorAll("#scroller > section")).filter(function (s) { return s.id !== "story"; }).map(function (s) {
      return { el: s, orchid: s.getAttribute("data-screen-label") !== "01 Cover" };   // navy cover: blue cursor; every other page: mauve
    });
    if (!zones.length || !window.matchMedia) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    var layer = el("div", { className: "hexcur-layer", ariaHidden: "true" });
    var HEX = '<svg viewBox="-12 -12 24 24" width="100%" height="100%"><polygon points="0,-11 9.5,-5.5 9.5,5.5 0,11 -9.5,5.5 -9.5,-5.5"/></svg>';
    var dot = el("div", { className: "ripple-dot", innerHTML: HEX });
    layer.appendChild(dot);
    document.body.appendChild(layer);

    var mx = 0, my = 0, px = 0, py = 0, dx = 0, dy = 0, scale = 1, target = 1, active = false, raf = null, lastRing = 0, since = 0;
    function overData(t) { return t && t.closest && (t.closest(".ctry") || t.closest(".city-hex")); }
    function overUi(t) { return t && t.closest && t.closest("button, a, input, .metric-switch, .map-legend, .cover-panel, .work-card"); }

    function ring(x, y, strong) {
      var r = el("div", { className: "ripple-ring" + (strong ? " strong" : ""), innerHTML: HEX });
      r.style.left = x + "px"; r.style.top = y + "px";
      layer.appendChild(r);
      var a = r.animate([
        { transform: "translate(-50%,-50%) scale(.25) rotate(0deg)", opacity: strong ? .75 : .5 },
        { transform: "translate(-50%,-50%) scale(" + (strong ? 4.2 : 2.6) + ") rotate(" + (strong ? 60 : 30) + "deg)", opacity: 0 }
      ], { duration: strong ? 900 : 1000, easing: "cubic-bezier(.15,.7,.3,1)" });
      a.onfinish = function () { r.remove(); };
    }

    zones.forEach(function (z) {
    var cover = z.el;
    cover.addEventListener("mouseenter", function (e) { mx = px = e.clientX; my = py = e.clientY; active = true; layer.classList.add("on"); var isDetail = /-detail$/.test(z.el.id); layer.classList.toggle("orchid", z.orchid && !isDetail); layer.classList.toggle("plum", isDetail); loop(); });
    cover.addEventListener("mouseleave", function () { active = false; layer.classList.remove("on"); });
    cover.addEventListener("mousemove", function (e) {
      var t = e.target, ui = !!overUi(t);
      since += Math.abs(e.clientX - mx) + Math.abs(e.clientY - my);
      mx = e.clientX; my = e.clientY;
      layer.classList.toggle("hide", ui);
      target = overData(t) ? 1.3 : 1;
      var now = performance.now();
      if (!ui && since > 38 && now - lastRing > 90) { ring(mx, my, false); lastRing = now; since = 0; }   // a ring every little while you move
    });
    cover.addEventListener("mousedown", function () { target = 0.6; });
    cover.addEventListener("mouseup", function (e) { target = overData(e.target) ? 1.3 : 1; });
    cover.addEventListener("click", function (e) {
      if (overUi(e.target)) return;
      ring(e.clientX, e.clientY, true);
      setTimeout(function () { ring(e.clientX, e.clientY, true); }, 140);
    });
    });

    function loop() {
      if (raf) return;
      raf = requestAnimationFrame(function step() {
        raf = null;
        dx = mx - px; dy = my - py;
        px += dx * 0.45; py += dy * 0.45;
        scale += (target - scale) * 0.2;
        dot.style.transform = "translate(" + px + "px," + py + "px) translate(-50%,-50%) scale(" + scale + ")";
        if (active || Math.abs(dx) + Math.abs(dy) > 0.3) loop();
      });
    }
  })();

  /* ---------- Page 3: the technical skills drop in when the page comes into view ---------- */
  (function () {
    var stage = document.querySelector(".tstage"), sec = $("skills");
    if (!stage || !sec || !("IntersectionObserver" in window)) { if (stage) stage.classList.add("go"); return; }
    new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { stage.classList.toggle("go", en.isIntersecting); });
    }, { root: scroller, threshold: 0.35 }).observe(sec);
  })();

  /* ---------- About page: the envelope opens when the page comes into view ---------- */
  (function () {
    var stage = $("pc-stage"), sec = $("about");
    if (!stage || !sec) return;
    function replay() { stage.classList.remove("is-open"); void stage.offsetWidth; stage.classList.add("is-open"); }
    var env = stage.querySelector(".pc-env"), btn = stage.querySelector(".pc-replay");
    if (env) env.addEventListener("click", function () { if (!stage.classList.contains("is-open")) replay(); });
    if (btn) btn.addEventListener("click", replay);
    if (!("IntersectionObserver" in window)) { stage.classList.add("is-open"); return; }
    var seen = false;
    new IntersectionObserver(function (es) {
      es.forEach(function (en) {
        if (en.isIntersecting && !seen) { seen = true; setTimeout(function () { stage.classList.add("is-open"); }, 500); }
      });
    }, { root: scroller, threshold: 0.45 }).observe(sec);
  })();

  /* ---------- Skills page: a pinboard, each skill threaded to the projects where it was used ---------- */
  (function () {
    var board = $("sb");
    if (!board) return;
    var GROUPS = [
      { name: "Analysis", col: "#cf92ca", tx: "#0c2036", skills: [
        ["Urban research", ["04", "05", "06", "07", "08", "10", "11", "12", "kanchee", "iaac"]],
        ["Spatial analysis", ["01", "02", "04", "05", "06", "iaac"]],
        ["Urban analytics", ["01", "02", "04", "05", "iaac"]],
        ["Mapping", ["01", "04", "05", "06", "07", "kanchee", "iaac"]],
        ["GIS", ["01", "02", "04", "05", "iaac"]],
        ["Python", ["01", "05", "iaac"]],
        ["Google Earth Engine", ["01", "05"]],
        ["YOLO", ["01"]],
        ["Roboflow", ["01"]],
        ["Computer vision", ["01", "iaac"]],
        ["Data visualization", ["01", "04", "05", "iaac"]],
        ["Cartography", ["05", "06", "07", "08", "kanchee"]],
        ["n8n", []]] },
      { name: "Design", col: "#b274ad", tx: "#ffffff", skills: [
        ["Urban design", ["03", "04", "06", "07", "08", "kanchee"]],
        ["Urban planning", ["04", "06"]],
        ["Architectural design", ["12", "kanchee"]],
        ["Interior design", ["13", "14"]],
        ["Rhino", ["05"]],
        ["Grasshopper", ["05"]],
        ["AutoCAD", ["07", "12", "13", "14"]],
        ["Photoshop", ["02"]]] },
      { name: "Policy", col: "#935c90", tx: "#ffffff", skills: [
        ["Urban policy", ["04", "11"]],
        ["Local governance", ["11"]]] },
      { name: "Documentation", col: "#6c436a", tx: "#ffffff", skills: [
        ["Microsoft Office", ["01", "02", "03", "04", "05", "06", "07", "08", "10", "11", "12", "13", "14", "kanchee", "iaac"]],
        ["InDesign", ["02"]]] }
    ];
    var PROJ = [
      { id: "01", t: "Sand Matters", img: "assets/cards/01.jpg" },
      { id: "02", t: "Wing It", img: "assets/cards/02.jpg" },
      { id: "03", t: "Urban Mirror", img: "assets/cards/03.jpg" },
      { id: "04", t: "Collectively Forward", img: "assets/cards/04.jpg" },
      { id: "05", t: "What’s Happening to Our Downtowns", img: "assets/cards/05.jpg?v=2" },
      { id: "06", t: "Rajarhat arterial road", img: "assets/cards/06.jpg?v=5" },
      { id: "07", t: "Jodhpur Park", img: "assets/cards/07.jpg?v=2" },
      { id: "08", t: "Open Spaces of Kolkata", img: "assets/cards/08.jpg" },
      { id: "10", t: "Bangali Adda (paper)", img: "" },
      { id: "11", t: "Flyovers essay (paper)", img: "" },
      { id: "12", t: "Writers’ Buildings", img: "assets/cards/12.jpg" },
      { id: "13", t: "Office Interiors", img: "assets/cards/13.jpg" },
      { id: "14", t: "Restaurant Interiors", img: "assets/cards/14.jpg" },
      { id: "kanchee", t: "Kancheepuram thesis", img: "assets/thesis-cover-kanchee.jpg" },
      { id: "iaac", t: "IAAC thesis", img: "assets/thesis-cover-iaac.jpg" }
    ];
    var HEAD = { "01": "IAAC · Urban planning and data analytics", "06": "Jadavpur University · Urban design", "10": "Research and writing", "12": "Professional work", "kanchee": "Thesis" };
    var NS = "http://www.w3.org/2000/svg";
    var cols = el("div", { className: "sb-cols" }), projs = el("div", { className: "sb-projs" });
    var svg = document.createElementNS(NS, "svg"); svg.setAttribute("class", "sb-threads"); svg.setAttribute("aria-hidden", "true");
    var links = [], seed = 0;
    var METHODS = ["Urban research", "Spatial analysis", "Urban analytics", "Mapping", "Urban design", "Urban planning", "Architectural design", "Interior design", "Urban policy", "Local governance"];
    function skillNode(s, g) {
      var linked = s[1].length > 0;
      var t = el(linked ? "a" : "span", { className: "sb-skill" + (linked ? "" : " plain") });
      if (linked) { t.href = "#"; t.setAttribute("data-skill", "1"); }
      t.appendChild(el("i", { className: "sb-pin" }));
      t.appendChild(document.createTextNode(s[0]));
      s[1].forEach(function (pid) { links.push({ skill: t, pid: pid, col: g.col }); });
      return t;
    }
    GROUPS.forEach(function (g) {
      var band = el("div", { className: "sb-band" });
      band.style.setProperty("--c", g.col);
      band.style.setProperty("--t", g.tx);
      band.appendChild(el("p", { className: "sb-gh", textContent: g.name }));
      var m = g.skills.filter(function (s) { return METHODS.indexOf(s[0]) >= 0; }), t = g.skills.filter(function (s) { return METHODS.indexOf(s[0]) < 0; });
      [["Methods", m], ["Tools", t]].forEach(function (pair) {
        var col = el("div", { className: "sb-sub" });
        if (pair[1].length) {
          col.appendChild(el("p", { className: "sb-k", textContent: pair[0] }));
          var wrap = el("div", { className: "sb-tags" + (pair[1].length > 5 ? " sb-two" : "") });
          pair[1].forEach(function (s) { wrap.appendChild(skillNode(s, g)); });
          col.appendChild(wrap);
        }
        band.appendChild(col);
      });
      cols.appendChild(band);
    });
    var projEl = {};
    PROJ.forEach(function (p, i) {
      var a = el("a", { className: "sb-proj", href: "#" });
      a.setAttribute("data-project", p.id);
      a.style.setProperty("--r", ((i % 2) ? 1 : -1) * (0.6 + (i % 3) * 0.4) + "deg");
      a.appendChild(el("i", { className: "sb-pin" }));
      var real = PROJECTS.filter(function (x) { return x.num === p.id; })[0];
      if (real && real.img) p.img = real.img;
      if (p.img) { var im = el("img", { src: p.img, alt: "" }); im.loading = "lazy"; a.appendChild(im); } else { a.appendChild(el("span", { className: "sb-cvmark", textContent: p.id === "cv" ? "CV" : "PAPER" })); }
      a.appendChild(el("span", { className: "sb-pt", textContent: p.t }));
      if (HEAD[p.id]) projs.appendChild(el("p", { className: "sb-ph", textContent: HEAD[p.id] }));
      projs.appendChild(a); projEl[p.id] = a;
    });
    var all = el("a", { className: "sb-all", href: "#work", textContent: "See all work →" });
    projs.appendChild(all);
    board.appendChild(svg); board.appendChild(cols); board.appendChild(projs);
    links.forEach(function (l) {
      var path = document.createElementNS(NS, "path");
      path.setAttribute("class", "sb-th"); path.setAttribute("stroke", l.col);
      svg.appendChild(path); l.path = path; l.proj = projEl[l.pid];
    });

    function pt(node, side) {
      var pin = node.querySelector(".sb-pin"), b = pin.getBoundingClientRect(), r = board.getBoundingClientRect();
      return [b.left - r.left + b.width / 2, b.top - r.top + b.height / 2];
    }
    function draw() {
      var r = board.getBoundingClientRect();
      svg.setAttribute("width", r.width); svg.setAttribute("height", r.height);
      svg.setAttribute("viewBox", "0 0 " + r.width + " " + r.height);
      links.forEach(function (l) {
        if (!l.proj) return;
        var a = pt(l.skill), b = pt(l.proj), sag = 18 + Math.abs(b[0] - a[0]) * 0.04;
        var mx = (a[0] + b[0]) / 2, my = (a[1] + b[1]) / 2 + sag;
        l.path.setAttribute("d", "M" + a[0] + " " + a[1] + " Q" + mx + " " + my + " " + b[0] + " " + b[1]);
      });
    }
    function focus(on, skillNode, projNode) {
      board.classList.toggle("sb-focus", !!on);
      board.querySelectorAll(".on").forEach(function (n) { n.classList.remove("on"); });
      links.forEach(function (l) {
        var hit = on && ((skillNode && l.skill === skillNode) || (projNode && l.proj === projNode));
        l.path.classList.toggle("on", !!hit);
        if (hit) { l.skill.classList.add("on"); l.proj.classList.add("on"); }
      });
      if (!on) board.querySelectorAll(".on").forEach(function (n) { n.classList.remove("on"); });
    }
    var locked = null;
    var chip = el("button", { className: "sb-chip", type: "button" });
    chip.style.display = "none"; document.body.appendChild(chip);
    chip.addEventListener("click", function () { var f = board.querySelector(".sb-proj.on"); if (f) f.scrollIntoView({ behavior: "smooth", block: "center" }); });
    function relock() {
      if (locked) focus(true, locked.s, locked.p); else focus(false);
      var n = board.querySelectorAll(".sb-proj.on").length;
      if (locked && n) { chip.textContent = "Used in " + n + (n === 1 ? " project" : " projects") + " \u2193"; chip.style.display = ""; } else chip.style.display = "none";
    }
    board.querySelectorAll(".sb-skill[data-skill]").forEach(function (n) {
      n.addEventListener("mouseenter", function () { focus(true, n, null); });
      n.addEventListener("focus", function () { focus(true, n, null); });
      n.addEventListener("mouseleave", relock);
      n.addEventListener("blur", relock);
      n.addEventListener("click", function (e) { e.preventDefault(); e.stopPropagation(); locked = (locked && locked.s === n) ? null : { s: n, p: null }; relock(); });
    });
    document.addEventListener("click", function (e) { if (locked && !e.target.closest(".sb")) { locked = null; relock(); } });
    board.querySelectorAll(".sb-proj").forEach(function (n) {
      n.addEventListener("mouseenter", function () { focus(true, null, n); });
      n.addEventListener("focus", function () { focus(true, null, n); });
      n.addEventListener("mouseleave", relock);
      n.addEventListener("blur", relock);
    });
    function openProject(id) {
      if (id === "kanchee") { openQuick(THESIS_KANCHEE); return; }
      if (id === "iaac") { openQuick(THESIS_IAAC); return; }
      var p = PROJECTS.filter(function (x) { return x.num === id; })[0];
      if (p) { if (p.quick) openQuick(p); else openStory(p); }
    }
    /* clicking a project takes the visitor to the Work (or Thesis) page first, flashes that folder, then opens it */
    function target(id) {
      if (id === "kanchee" || id === "iaac") { var cols = document.querySelectorAll("#thesis > div > div"); return cols[id === "kanchee" ? 0 : 1] || $("thesis"); }
      var f = [].slice.call(document.querySelectorAll("#work .folder")).filter(function (n) { var tb = n.querySelector(".fd-tab"); return tb && tb.textContent.trim() === id; })[0];
      return f || $("work");
    }
    board.addEventListener("click", function (e) {
      var b = e.target.closest(".sb-proj[data-project]");
      if (!b) return;
      e.preventDefault();
      var id = b.getAttribute("data-project"), t = target(id);
      if (!t) { openProject(id); return; }
      t.scrollIntoView({ behavior: "smooth", block: "center" });
      setTimeout(function () {
        var r = t.getBoundingClientRect();
        if (r.bottom < 0 || r.top > window.innerHeight) t.scrollIntoView({ block: "center" });   // smooth scrolling unavailable: jump instead
        t.classList.add("sb-flash");
      }, 750);
      setTimeout(function () { openProject(id); }, 1300);
      setTimeout(function () { t.classList.remove("sb-flash"); }, 2600);
    });
    var tick = 0;
    function redraw() { cancelAnimationFrame(tick); tick = requestAnimationFrame(draw); }
    window.addEventListener("resize", redraw);
    window.addEventListener("load", redraw);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(redraw);
    board.querySelectorAll("img").forEach(function (i) { i.addEventListener("load", redraw); });
    setTimeout(redraw, 300); setTimeout(redraw, 1500);
    if ("IntersectionObserver" in window) new IntersectionObserver(function (es) { if (es[0].isIntersecting) redraw(); }, { root: scroller }).observe(board);
  })();

  /* ---------- Contact: copy the email address ---------- */
  (function () {
    var btn = document.querySelector(".ct-copy");
    if (!btn) return;
    btn.addEventListener("click", function () {
      var done = function () { btn.textContent = "Copied"; btn.classList.add("done"); setTimeout(function () { btn.textContent = "Copy"; btn.classList.remove("done"); }, 1800); };
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(btn.getAttribute("data-copy")).then(done, done);
      else done();
    });
  })();

  /* ---------- Cover city hexagons: hover reveals the name ---------- */
  var tip = $("city-tip");
  var coverEl = tip && tip.parentElement;
  document.querySelectorAll(".city-hex").forEach(function (h) {
    function place(x, y) {
      var r = coverEl.getBoundingClientRect();
      tip.style.left = (x - r.left) + "px";
      tip.style.top = (y - r.top) + "px";
    }
    function show(x, y) { tip.textContent = h.dataset.city; tip.hidden = false; place(x, y); }
    h.addEventListener("mouseenter", function (e) { show(e.clientX, e.clientY); });
    h.addEventListener("mousemove", function (e) { place(e.clientX, e.clientY); });
    h.addEventListener("mouseleave", function () { tip.hidden = true; });
    h.addEventListener("focus", function () { var b = h.getBoundingClientRect(); show(b.left + b.width / 2, b.top); });
    h.addEventListener("blur", function () { tip.hidden = true; });
  });

  /* ---------- Cover city hexagons: click opens a small settlement card (maps to follow) ---------- */
  var CITY_INFO = {
    "Barcelona": { form: "A Roman core, then a planned grid", facts: [
      "The old centre sits on the Roman town of Barcino, and the Gothic Quarter keeps its narrow, irregular medieval lanes.",
      "Ildefons Cerd\u00e0's 1859 plan laid out the Eixample: a grid of blocks with chamfered, octagonal corners, so every junction opens up into a small space.",
      "The medieval walls were pulled down in 1856 to let the city grow, and the old city is far denser than the Eixample around it."], src: [["Eixample", "https://en.wikipedia.org/wiki/Eixample"], ["Barcino and the Gothic Quarter", "https://barcelonabusturistic.cat/en/gothic-quarter"]] },
    "Delhi": { form: "Layer upon layer of cities", facts: [
      "Old Delhi (Shahjahanabad) was founded in 1639 and completed around 1648: a walled Mughal city of about fourteen gates, planned around the Red Fort and its main avenue, Chandni Chowk, with dense lanes behind.",
      "New Delhi, inaugurated in 1931, was built on the plains south of the old walls. Edwin Lutyens and Herbert Baker gave it wide avenues and a ceremonial axis.",
      "Shahjahanabad stands on the western bank of the Yamuna, which runs along the city's eastern side."], src: [["Shahjahanabad", "https://en.wikipedia.org/wiki/Shahjahanabad"], ["Construction of New Delhi", "https://en.wikipedia.org/wiki/Construction_of_New_Delhi"]] },
    "Bhopal": { form: "A city around its lakes", facts: [
      "The modern city dates from the early 18th century and was founded by Dost Mohammad Khan; sources differ on the exact year. Local tradition ties an older settlement, and the Upper Lake, to the 11th-century king Bhoj.",
      "After Independence, Bhopal became its own state, then the capital of the new Madhya Pradesh in 1956.",
      "The Upper and Lower Lakes give it the name City of Lakes."], src: [["Bhopal State", "https://en.wikipedia.org/wiki/Bhopal_State"], ["Bhopal State (1949\u20131956)", "https://en.wikipedia.org/wiki/Bhopal_State_(1949%E2%80%931956)"]] },
    "Kolkata": { form: "Three villages on a river bank", facts: [
      "In 1690 Job Charnock set up the East India Company's base on land across three riverside villages: Sutanuti, Kalikata and Gobindapur. The Company bought the rights to them in 1698.",
      "The city grew along the east bank of the Hooghly river.",
      "The East Kolkata Wetlands, a Ramsar site of about 12,500 hectares, still treat much of the city's wastewater on its eastern edge."], src: [["Kalikata", "https://en.wikipedia.org/wiki/Kalikata"], ["East Kolkata Wetlands", "https://en.wikipedia.org/wiki/East_Calcutta_Wetlands"]] },
    "Mumbai": { form: "Seven islands joined into one", facts: [
      "The city began as seven islets: Colaba, Old Woman's Island, Bombay, Mazagaon, Parel, Mahim and Worli. They passed to the British in 1661.",
      "The Hornby Vellard (1782\u201384) dammed the Worli creek, and later causeways and reclamation joined the islands into a single landmass.",
      "Salsette island, with the suburbs, lies to the north of the original island city, so growth runs up a long, narrow spine."], src: [["Hornby Vellard", "https://en.wikipedia.org/wiki/Hornby_Vellard"], ["Mumbai", "https://en.wikipedia.org/wiki/Mumbai"]] },
    "Chennai": { form: "A fort on a low coast", facts: [
      "Fort St George began in 1639, on land granted to the East India Company between the mouth of the Cooum and a fishing village called Madraspatnam.",
      "Older settlements such as Mylapore and Triplicane were absorbed as the city grew. Triplicane borders Marina Beach on the Bay of Bengal.",
      "The site is a low plain, no more than about 23 feet above sea level, crossed by the Cooum and Adyar rivers and the Buckingham Canal, so flooding is a recurring risk."], src: [["History of Chennai", "https://en.wikipedia.org/wiki/History_of_Chennai"], ["Cooum River", "https://en.wikipedia.org/wiki/Cooum_River"]] }
  };
  (function () {
    if (!coverEl) return;
    var card = el("aside", { className: "city-card", id: "city-card" });
    card.hidden = true; card.setAttribute("role", "dialog"); card.setAttribute("aria-live", "polite");
    coverEl.appendChild(card);
    var lastHex = null;
    var legend = $("city-legend");
    function close() { card.hidden = true; if (lastHex) lastHex.classList.remove("on"); if (legend) legend.classList.remove("off"); }
    function open(h) {
      var d = CITY_INFO[h.dataset.city]; if (!d) return;
      if (lastHex) lastHex.classList.remove("on"); lastHex = h; h.classList.add("on");
      var items = d.facts.map(function (f) { return "<li>" + f + "</li>"; }).join("");
      card.innerHTML = '<button type="button" class="cc-x" aria-label="Close">&times;</button>' +
        '<p class="cc-k">SETTLEMENT PATTERN</p><h3>' + h.dataset.city + '</h3><p class="cc-f">' + d.form + '</p><ul>' + items + '</ul>' +
        '<div class="cc-soon"><i></i><span>Maps of this city: coming soon</span></div>' +
        '<p class="cc-src">Sources: ' + d.src.map(function (s) { return '<a href="' + s[1] + '" target="_blank" rel="noopener">' + s[0] + '</a>'; }).join(', ') + '</p>';
      card.hidden = false; if (legend) legend.classList.add("off");
      card.querySelector(".cc-x").addEventListener("click", close);
    }
    document.querySelectorAll(".city-hex").forEach(function (h) {
      h.addEventListener("click", function (e) { e.stopPropagation(); open(h); });
      h.addEventListener("keydown", function (e) { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(h); } });
    });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") close(); });
    coverEl.addEventListener("click", function (e) { if (!card.hidden && !card.contains(e.target)) close(); });
  })();

  /* ---------- Cover cues: scroll arrow, and a hint to try the climate / gender map views ---------- */
  (function () {
    var hint = $("map-hint");
    if (hint) {
      document.querySelectorAll(".metric-switch button[data-metric]").forEach(function (b) {
        b.addEventListener("click", function () { if (b.dataset.metric) hint.classList.add("gone"); });
      });
    }
    var sc = document.querySelector(".cover-scroll");
    if (sc) sc.addEventListener("click", function (e) {
      var m = $("menu"); if (!m) return; e.preventDefault();
      try { m.scrollIntoView({ behavior: "smooth", block: "start" }); } catch (x) { m.scrollIntoView(); }
    });
  })();

  /* ---------- Bio word reveal ---------- */
  var bioEl = $("bio-words");
  (function () {                              // "imagery" always starts a new line; the line before it stays justified
    var cut = BIO.indexOf("imagery"), a = el("span", { className: "bio-a" }), b = el("span", { className: "bio-b" });
    a.textContent = BIO.slice(0, cut).replace(/\s+$/, ""); b.textContent = BIO.slice(cut);
    bioEl.textContent = ""; bioEl.appendChild(a); bioEl.appendChild(b);
  })();

  function replayOnVisible(node, items, opts) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          node.classList.remove("is-visible");
          items.forEach(function (w) { w.style.animation = "none"; });
          void node.offsetWidth;
          items.forEach(function (w) { w.style.animation = ""; });
          node.classList.add("is-visible");
        } else {
          node.classList.remove("is-visible");
        }
      });
    }, opts);
    io.observe(node);
  }

  /* ---------- Work grid ---------- */
  var grid = $("work-grid");
  var info = $("work-info");
  var legend = $("work-legend");

  function showInfo(p) {
    $("info-num").textContent = p.num;
    $("info-title").textContent = p.title;
    $("info-meta").textContent = p.meta;
    $("info-year").textContent = p.year;
    $("info-desc").textContent = p.desc || "";
    info.hidden = false;
    legend.hidden = true;
  }
  function hideInfo() { info.hidden = true; legend.hidden = false; }
  grid.addEventListener("mouseleave", hideInfo);

  function placeholdersFor(key, count) {
    var color = CATEGORIES.filter(function (c) { return c.key === key; })[0].color;
    var out = [];
    for (var i = 0; i < count; i++) out.push({ placeholder: true, categoryColor: color });
    return out;
  }

  function isDark(hex) {                        // true when white text reads better on this colour
    var n = parseInt(hex.slice(1), 16), r = n >> 16, g = (n >> 8) & 255, b = n & 255;
    return (0.299 * r + 0.587 * g + 0.114 * b) < 150;
  }

  function renderGrid() {
    var list;
    if (filterCategory) {
      list = PROJECTS.filter(function (p) { return p.category === filterCategory; });
      if (!list.length) list = placeholdersFor(filterCategory, 3);
    } else {
      list = PROJECTS.slice();
    }
    grid.innerHTML = "";
    list.forEach(function (p, idx) {
      var fc = p.categoryColor, dark = isDark(fc);
      var card = el("a", { className: "work-card folder" + (p.cursorEmoji ? " cursor-card" : "") });
      card.style.setProperty("--fc", fc);
      card.style.setProperty("--i", idx); grid.style.setProperty("--n", list.length);
      card.style.setProperty("--tx", dark ? "#fff" : "#0c2036");
      card.style.setProperty("--tl", ["0%", "30%", "58%"][idx % 3]);
      var tab = el("div", { className: "fd-tab", textContent: p.placeholder ? "—" : p.num });
      var body = el("div", { className: "fd-body" });
      var paper = el("div", { className: "fd-paper" });
      var front = el("div", { className: "fd-front" });
      var fly = null;
      if (p.placeholder) {
        paper.appendChild(el("div", { className: "fd-soon", textContent: "Coming soon" }));
        front.appendChild(el("p", { className: "fd-title", textContent: "Coming soon" }));
      } else {
        card.href = p.href;
        card.title = p.title;
        paper.appendChild(el("img", { src: p.img, alt: p.title, loading: "lazy" }));
        paper.setAttribute("data-n", "SHEET " + p.num + " / " + String(PROJECTS.length).padStart(2, "0"));
        front.appendChild(el("p", { className: "fd-title", textContent: p.title }));
        if (p.cursorEmoji) {
          fly = el("span", { className: "cursor-fly", textContent: p.cursorEmoji }, "position: absolute; left: 50%; top: 50%; font-size: 24px; pointer-events: none; margin-left: -12px; margin-top: -12px; z-index: 6;");
        }
        card.addEventListener("mouseenter", function () { showInfo(p); });
        card.addEventListener("focus", function () { showInfo(p); });
        card.addEventListener("mousemove", function (e) {
          if (!fly) return;
          var r = card.getBoundingClientRect();
          fly.style.left = (e.clientX - r.left) + "px";
          fly.style.top = (e.clientY - r.top) + "px";
        });
        card.addEventListener("click", function (e) { e.preventDefault(); if (p.quick) openQuick(p); else openStory(p); });
      }
      body.appendChild(paper); body.appendChild(front);
      card.appendChild(tab); card.appendChild(body);
      if (fly) card.appendChild(fly);
      grid.appendChild(card);
    });
    renderLegend();
  }

  function renderLegend() {
    var box = $("legend-items");
    box.innerHTML = "";
    CATEGORIES.forEach(function (c) {
      var row = el("div", null, "display: flex; align-items: center; gap: 10px; cursor: pointer;");
      row.appendChild(el("span", null, "width: 14px; height: 14px; border-radius: 2px; background: " + c.color + "; display: inline-block; flex-shrink: 0;"));
      row.appendChild(el("span", { textContent: c.label }, "font-size: 13px; color: #2c2c2c; font-weight: " + (filterCategory === c.key ? "700" : "400") + ";"));
      row.addEventListener("click", function () { filterCategory = filterCategory === c.key ? null : c.key; renderGrid(); });
      box.appendChild(row);
    });
    $("clear-filter").hidden = !filterCategory;
  }
  $("clear-filter").addEventListener("click", function () { filterCategory = null; renderGrid(); });
  renderGrid();

  /* ---------- Quick view: one scannable grid per project, with a link to the full case study ---------- */
  var quickEl = $("quick"), quickProject = null, quickAll = [], quickPos = 0;
  function showQuickImg(i) {
    var lb = $("quick-lb"), n = quickAll.length;
    quickPos = (i + n) % n;
    var t = quickAll[quickPos];
    lbReset();
    lb.querySelector("img").src = t.src;
    lb.querySelector(".lb-cap").innerHTML = t.caption;
    lb.querySelector(".lb-n").textContent = (quickPos + 1) + " / " + n;
    lb.classList.add("open");
  }
/* KANCHEE-QUICK */
  var THESIS_KANCHEE = {
    title: "Redevelopment of a Temple Town: Kancheepuram", detailId: "kanchee-detail",
        quick: {
          tags: [["URBAN DESIGN", "#935c90"], ["HERITAGE CONSERVATION", "#c47ac0"], ["M.ARCH THESIS", "#0c2036"]],
          banner: "assets/kancheepuram/banner.svg",
          result: "A thesis that reads a living temple town layer by layer, then proposes fourteen small, connected interventions to bring its heritage and its silk back to the centre.",
          stats: [["14", "design proposals"], ["7", "stages of growth mapped"], ["100", "people surveyed on site"], ["82%", "of them worried about parking"]],
          role: [["PROGRAMME", "M.Arch, Urban Design, Jadavpur University"], ["SITE", "Kancheepuram, Tamil Nadu"], ["YEAR", "2015\u20132016"], ["GUIDE", "Prof. Shivashish Bose"]],
          groups: [
            { label: "The project in brief", rows: [
              { kind: "html", html: "<p class=\"kc-lead\">A town can only be smart if it keeps what makes it that town. This thesis asks whether heritage and modern infrastructure can work together in <b>Kancheepuram</b>, one of India's seven sacred cities and the home of Kanchipuram silk. It reads the town layer by layer, then proposes fourteen small, connected interventions around two centres of attraction: <b>the temples</b> and <b>the silk weavers</b>.</p>" },
              { kind: "html", html: "<p class=\"kc-note\"><b>Aim.</b> Civic infrastructure around heritage sites, so the town can be revived as a heritage and cultural destination. Timely: the national HRIDAY scheme for heritage cities began in January 2015.</p>" }
            ] },
            { label: "The city and where it lies", rows: [
              { kind: "tri", tiles: [
                { src: "assets/kancheepuram/hist-engraving.jpg", alt: "An early print of a Kancheepuram temple", caption: "<b>An early print.</b> A temple of the town.", fit: "contain" },
                { src: "assets/kancheepuram/hist-kailasanathar.jpg", alt: "Kailasanathar temple", caption: "<b>Kailasanathar.</b> Pallava, 7th century.", fit: "contain" },
                { src: "assets/kancheepuram/hist-tank.jpg", alt: "A gopuram and temple tank", caption: "<b>Gopuram and tank.</b> An old photograph.", fit: "contain" }
              ] },
              { kind: "html", html: "<p class=\"kc-p\">72&ndash;76 km south-west of Chennai, on the Vegavathi river. The district headquarters and a Pallava capital.</p>" },
              { kind: "html", html: "<div class=\"wi-facts\"><div><b>164,384</b><span>residents in 2011, across 51 wards</span></div><div><b>72&ndash;76 km</b><span>from Chennai, on the Vegavathi river</span></div><div><b>11.6 km&sup2;</b><span>municipal area</span></div><div><b>8,349 ha</b><span>Local Planning Area, of which 2,082 ha is built up</span></div></div>" },
              { kind: "mid2", tiles: [
                { src: "assets/kancheepuram/loc-district.jpg", alt: "Kancheepuram district", caption: "<b>The district.</b> Kancheepuram town is the headquarters.", fit: "contain" },
                { src: "assets/kancheepuram/loc-municipality.jpg", alt: "Kancheepuram municipality", caption: "<b>The municipality.</b> 51 wards on 11.6 km&sup2;.", fit: "contain" }
              ] }
            ] },
            { label: "Seven stages of growth", rows: [
              { kind: "whole", tiles: [
                { src: "assets/kancheepuram/growth-all.jpg", alt: "Seven stages of growth of Kancheepuram, 4th century to 1894", caption: "<b>How the town grew.</b> From a small temple cluster in the 4th century to the town of 1894.", fit: "contain" }
              ] },
              { kind: "html", html: "<div class=\"kc-time\"><div><b>4th&ndash;9th c.</b><p>Pallava capital. Temples, silk weaving and Bharatanatyam flourish.</p></div><div><b>985&ndash;1016</b><p>Rajaraja Chola rules.</p></div><div><b>c. 1522</b><p>Krishnadevaraya and the Vijayanagar kings.</p></div><div><b>1865 on</b><p>Colonial rule.</p></div></div>" },
              { kind: "html", html: "<p class=\"kc-note\">Laid out on the <b>Nandivartha</b> pattern: temples as nuclei, straight roads at right angles.</p>" }
            ] },
            { label: "The silk city", rows: [
              { kind: "html", html: "<div class=\"kc-split\"><ul class=\"kc-pts\"><li>Known as the <b>Silk City</b>: weavers settled here <b>400+ years ago</b>.</li><li><b>5,000+ families</b> weave silk, sold through cooperatives across the state.</li><li>Fine gold thread and the <i>korvai</i> technique set the sarees apart.</li><li><b>60,000+ looms</b> and 22 cooperatives in 2004; only 13 cooperatives are left, five doing well.</li><li>The loom sits inside the weaver's home and the whole family helps.</li><li>The craft is fading as these family helpers leave for easier work.</li></ul><div class=\"kc-stack\"><figure><img src=\"assets/kancheepuram/ph-silk.jpg\" alt=\"Silk thread on a loom frame\" loading=\"lazy\"><figcaption><b>Thread.</b> Dyed silk on the frame.</figcaption></figure><figure><img src=\"assets/kancheepuram/ph-loom.jpg\" alt=\"A handloom\" loading=\"lazy\"><figcaption><b>The loom.</b> Inside the weaver's home.</figcaption></figure></div></div>" }
            ] },
            { label: "Who lives here today", rows: [
              { kind: "html", html: "<div class=\"kc-split\"><div class=\"kc-people\"><div><b>Settled by trade</b><p>Weavers live near Kailasanathar; clay-doll makers near the Perumal temple.</p></div><div><b>Now mixed</b><p>Migration and property sales have mixed the old settlements.</p></div><div><b>Economic base</b><p>Silk weaving and temple revenue, both under pressure.</p></div></div><div class=\"kc-stack\"><figure><img src=\"assets/kancheepuram/ph-weaver.jpg\" alt=\"A weaver at his loom\" loading=\"lazy\"><figcaption><b>Weavers.</b> Work happens at home.</figcaption></figure><figure><img src=\"assets/kancheepuram/ph-claydolls.jpg\" alt=\"Clay dolls drying in the street\" loading=\"lazy\"><figcaption><b>Clay-doll makers.</b> Working in the street near the temple.</figcaption></figure></div></div>" }
            ] },
            { label: "Demographics", rows: [
              { kind: "html", html: "<p class=\"um-sub\">POPULATION OF THE TOWN, EVERY 10 YEARS, 1871 TO 2011 (RESIDENTS, IN THOUSANDS)</p><div class=\"kc-pop\"><div class=\"c\"><em>37.3k</em><i style=\"height:23%;background:#ead0e9\"></i><span>1871</span></div><div class=\"c\"><em>37.3k</em><i style=\"height:23%;background:#debfdc\"></i><span>1881</span></div><div class=\"c\"><em>42.5k</em><i style=\"height:26%;background:#d1afd0\"></i><span>1891</span></div><div class=\"c\"><em>46.2k</em><i style=\"height:28%;background:#c59ec3\"></i><span>1901</span></div><div class=\"c\"><em>53.9k</em><i style=\"height:33%;background:#b88eb6\"></i><span>1911</span></div><div class=\"c\"><em>61.4k</em><i style=\"height:37%;background:#ac7da9\"></i><span>1921</span></div><div class=\"c\"><em>65.3k</em><i style=\"height:40%;background:#9f6d9d\"></i><span>1931</span></div><div class=\"c\"><em>74.7k</em><i style=\"height:45%;background:#935c90\"></i><span>1941</span></div><div class=\"c\"><em>84.8k</em><i style=\"height:52%;background:#875485\"></i><span>1951</span></div><div class=\"c\"><em>92.7k</em><i style=\"height:56%;background:#7a4c79\"></i><span>1961</span></div><div class=\"c\"><em>110.7k</em><i style=\"height:67%;background:#6e446e\"></i><span>1971</span></div><div class=\"c\"><em>131.0k</em><i style=\"height:80%;background:#623b62\"></i><span>1981</span></div><div class=\"c\"><em>145.0k</em><i style=\"height:88%;background:#563357\"></i><span>1991</span></div><div class=\"c\"><em>153.1k</em><i style=\"height:93%;background:#492b4b\"></i><span>2001</span></div><div class=\"c\"><em>164.3k</em><i style=\"height:100%;background:#3d2340\"></i><span>2011</span></div></div><p class=\"kc-cap\">Each bar is the population in a census year, labelled in thousands: from 37.3k in 1871 to 164.3k in 2011.</p>" },
              { kind: "html", html: "<div class=\"wi-facts\"><div><b>164,384</b><span>residents in 2011 (census)</span></div><div><b>1,005</b><span>women for every 1,000 men, above the national 929</span></div><div><b>88%</b><span>literacy: 93% of men, 83% of women</span></div></div>" }
            ] },
            { label: "Tourism profile", rows: [
              { kind: "html", html: "<div class=\"wi-facts\"><div><b>805,983</b><span>foreign visitors to the district in 2013, up 12%</span></div><div><b>~10,000</b><span>visitors a day in the peak season</span></div><div><b>#1</b><span>in attracting foreign tourists</span></div></div>" },
              { kind: "html", html: "<div class=\"kc-minis\"><div class=\"kc-mini\"><h6>Foreign tourists, Kancheepuram</h6><div class=\"b\"><div class=\"c\"><em>109,389</em><i style=\"height:24%\"></i><span>2001</span></div><div class=\"c\"><em>182,158</em><i style=\"height:41%\"></i><span>2006</span></div><div class=\"c\"><em>448,443</em><i style=\"height:100%\"></i><span>2011</span></div></div></div><div class=\"kc-mini\"><h6>Domestic tourists, Kancheepuram</h6><div class=\"b\"><div class=\"c\"><em>1,381,906</em><i style=\"height:20%\"></i><span>2001</span></div><div class=\"c\"><em>2,354,635</em><i style=\"height:35%\"></i><span>2006</span></div><div class=\"c\"><em>6,785,520</em><i style=\"height:100%\"></i><span>2011</span></div></div></div></div><p class=\"kc-cap\">Source: International Journal of Geomatics and Geosciences, Vol. 5, Issue 2, 2014.</p>" }
            ] },
            { label: "Layers of the town: site analysis", rows: [
              { kind: "layer", tiles: [
                { src: "assets/kancheepuram/map-blue.jpg", alt: "Water bodies, tanks and canal", caption: "<b>Blue.</b> <mark class=\"hl\">A tank beside almost every temple</mark>; the canal is neglected.", fit: "contain" },
                { src: "assets/kancheepuram/map-green.jpg", alt: "Green cover", caption: "<b>Green.</b> <mark class=\"hl\">Small pockets</mark>, mostly temple lawns and parks.", fit: "contain" },
                { src: "assets/kancheepuram/map-landuse.jpg", alt: "Land use", caption: "<b>Land use.</b> <mark class=\"hl\">Mostly residential</mark>, with shops around the temple car streets.", fit: "contain" },
                { src: "assets/kancheepuram/map-figureground.jpg?v=3", alt: "Figure-ground", caption: "<b>Figure-ground.</b> <mark class=\"hl\">Dense solids in the old core</mark>, scattered at the edge.", fit: "contain" },
                { src: "assets/kancheepuram/map-axis.jpg", alt: "Urban tissue and axis", caption: "<b>Urban tissue.</b> <mark class=\"hl\">Grown organically</mark> around the Ekambareshwarar temple; State Highway 58 is the main axis.", fit: "contain" },
                { src: "assets/kancheepuram/map-junctions.jpg", alt: "Junctions", caption: "<b>Junctions.</b> <mark class=\"hl\">Seven key junctions</mark>, at temples, the bus terminus and a school.", fit: "contain" }
              ] }
            ] },
            { label: "Building use", rows: [
              { kind: "html", html: "<p class=\"kc-key\"><span><i style=\"background:#e9b91b\"></i>Residences</span><span><i style=\"background:#b23f20\"></i>Commercial</span><span><i style=\"background:#c85f5b\"></i>Government</span><span><i style=\"background:#ad5b21\"></i>Temples</span><span><i style=\"background:#66abb2\"></i>Temple tanks</span><span><i style=\"background:#d2d3d5\"></i>Mosque</span><span><i style=\"background:#598e24\"></i>Open spaces</span></p>" },
              { kind: "layer", tiles: [
                { src: "assets/kancheepuram/use-rajaveedi.jpg", alt: "Building use, Rajaveedi", caption: "<b>Rajaveedi.</b> <mark class=\"hl\">Mostly homes</mark>; shops only at the temple gates.", fit: "contain" },
                { src: "assets/kancheepuram/use-moongilmandapam.jpg", alt: "Building use, Moongilmandapam", caption: "<b>Moongilmandapam.</b> <mark class=\"hl\">Shops on the highway</mark>, homes set back behind them.", fit: "contain" },
                { src: "assets/kancheepuram/use-varadharaja.jpg", alt: "Building use, Varadharaja Perumal temple area", caption: "<b>Varadharaja Perumal temple.</b> <mark class=\"hl\">Only homes</mark> around the temple; hawkers, no permanent shops.", fit: "contain" },
                { src: "assets/kancheepuram/map-canal.jpg?v=3", alt: "Building use along the Manjalneer Kalvai", caption: "<b>Manjalneer Kalvai.</b> <mark class=\"hl\">A drinking-water canal turned drain</mark>, built over on both sides.", fit: "contain" }
              ] }
            ] },
            { label: "Cart routes", rows: [
              { kind: "quad", tiles: [
                { src: "assets/kancheepuram/cart-varadharaja.jpg?v=2", alt: "Cart route of Varadharaja Perumal temple", caption: "<b>Varadharaja Perumal.</b>", fit: "contain" },
                { src: "assets/kancheepuram/cart-ekambarar.jpg", alt: "Cart route of Ekambarar temple", caption: "<b>Ekambarar.</b>", fit: "contain" },
                { src: "assets/kancheepuram/cart-kamakshi.jpg", alt: "Cart route of Kamakshi Amman temple", caption: "<b>Kamakshi Amman.</b>", fit: "contain" },
                { src: "assets/kancheepuram/cart-chariot.jpg", alt: "A temple chariot during the festival", caption: "<b>The chariot.</b> Festival day.", fit: "cover" }
              ] }
            ] },
            { label: "Houses of the old town", rows: [
              { kind: "html", html: "<div class=\"kc-types\"><div class=\"t\" style=\"--c:#935c90\"><div class=\"hd\"><small>Priests</small><h5>Agraharam</h5></div><p>Row house. Starts at the <i>thinnai</i> for guests; toilet and well at the far end, cattle shed as a barrier.</p><figure><img src=\"assets/kancheepuram/house-a-plan.png\" alt=\"Agraharam: plan\" loading=\"lazy\"><figcaption>Plan</figcaption></figure><figure><img src=\"assets/kancheepuram/house-a-sect.png\" alt=\"Agraharam: section\" loading=\"lazy\"><figcaption>Section</figcaption></figure><figure><img src=\"assets/kancheepuram/house-a-elev.png\" alt=\"Agraharam: elevation\" loading=\"lazy\"><figcaption>Elevation</figcaption></figure><figure><img src=\"assets/kancheepuram/house-a-persp.png\" alt=\"Agraharam: perspective\" loading=\"lazy\"><figcaption>Perspective</figcaption></figure></div><div class=\"t\" style=\"--c:#1f4f8f\"><div class=\"hd\"><small>Weavers</small><h5>Silk weaver's house</h5></div><p>Weaving area at the entrance, so workers stay out of the home. Many windows; toilet and open space between work and house.</p><figure><img src=\"assets/kancheepuram/house-w-plan.png\" alt=\"Silk weaver's house: plan\" loading=\"lazy\"><figcaption>Plan</figcaption></figure><figure><img src=\"assets/kancheepuram/house-w-sect.png\" alt=\"Silk weaver's house: section\" loading=\"lazy\"><figcaption>Section</figcaption></figure><figure><img src=\"assets/kancheepuram/house-w-elev.png\" alt=\"Silk weaver's house: elevation\" loading=\"lazy\"><figcaption>Elevation</figcaption></figure><figure><img src=\"assets/kancheepuram/house-w-persp.png\" alt=\"Silk weaver's house: perspective\" loading=\"lazy\"><figcaption>Perspective</figcaption></figure></div><div class=\"t\" style=\"--c:#0c2036\"><div class=\"hd\"><small>Farming family</small><h5>Kanchi Kudil</h5></div><p>Ancient house kept as a museum: courtyards, rooms for the master, family and gods, verandahs and a backyard.</p><figure><img src=\"assets/kancheepuram/house-k-plan.png\" alt=\"Kanchi Kudil: plan\" loading=\"lazy\"><figcaption>Plan</figcaption></figure><figure><img src=\"assets/kancheepuram/house-k-sect.png\" alt=\"Kanchi Kudil: section\" loading=\"lazy\"><figcaption>Section</figcaption></figure><figure><img src=\"assets/kancheepuram/house-k-elev.png\" alt=\"Kanchi Kudil: elevation\" loading=\"lazy\"><figcaption>Elevation</figcaption></figure><figure><img src=\"assets/kancheepuram/house-k-persp.png\" alt=\"Kanchi Kudil: perspective\" loading=\"lazy\"><figcaption>Perspective</figcaption></figure></div></div>" }
            ] },
            { label: "Sanitation", rows: [
              { kind: "html", html: "<div class=\"wi-facts\"><div><b>7</b><span>water supply zones, each with its own tank</span></div><div><b>137 MLD</b><span>sewage today, against 90 MLD designed in 1970</span></div><div><b>~90 t</b><span>solid waste a day, dumped at Vaiyavur</span></div><div><b>Since 2004</b><span>the old sewage plant has stood abandoned</span></div></div>" },
              { kind: "html", html: "<p class=\"kc-note\">Underground drainage since 1970, now overloaded. The Manjalneer Kalvai works as the flood drain.</p>" }
            ] },
            { label: "SWOT analysis", rows: [
              { kind: "whole", tiles: [
                { src: "assets/kancheepuram/swot.png", alt: "SWOT analysis of Kancheepuram: strengths, weaknesses, opportunities and threats", caption: "", fit: "contain" }
              ] }
            ] },
            { label: "Analogy of temple towns", rows: [
              { kind: "whole", tiles: [
                { src: "assets/kancheepuram/analogy-table.jpg", alt: "Table comparing five temple towns", caption: "<b>Five temple towns compared.</b> Srirangam, Madurai, Kancheepuram, Chidambaram and Tiruvannamalai: location, history, architecture and planning principles.", fit: "contain" }
              ] }
            ] },
            { label: "Visual survey and field survey", rows: [
              { kind: "tri", tiles: [
                { src: "assets/kancheepuram/ph-gopuram.jpg", alt: "A gopuram", caption: "<b>The gopuram.</b>", fit: "cover" },
                { src: "assets/kancheepuram/ph-street.jpg", alt: "A temple street", caption: "<b>Temple street.</b>", fit: "cover" },
                { src: "assets/kancheepuram/ph-junction.jpg", alt: "A junction", caption: "<b>A busy junction.</b>", fit: "cover" }
              ] },
              { kind: "tri", tiles: [
                { src: "assets/kancheepuram/ph-bus.jpg", alt: "Buses stopping in the road", caption: "<b>Buses stop where they can.</b>", fit: "cover" },
                { src: "assets/kancheepuram/ph-market.jpg", alt: "The market", caption: "<b>The market.</b>", fit: "cover" },
                { src: "assets/kancheepuram/ph-stalls.jpg", alt: "Stalls on the road", caption: "<b>Stalls on the road.</b>", fit: "cover" }
              ] },
              { kind: "html", html: "<div class=\"kc-survey\"><div class=\"kc-big\"><b>100</b><span>residents and visitors asked</span></div><div class=\"wi-bars kc-bars\"><div class=\"b\"><span class=\"n\">Worried about parking</span><span class=\"t\"><i style=\"width:82%\"></i></span><span class=\"v\">82%</span></div><div class=\"b\"><span class=\"n\">Want more infrastructure: malls, multiplexes</span><span class=\"t\"><i style=\"width:68%\"></i></span><span class=\"v\">68%</span></div><div class=\"b\"><span class=\"n\">Want better education</span><span class=\"t\"><i style=\"width:45%\"></i></span><span class=\"v\">45%</span></div></div></div>" },
              { kind: "html", html: "<p class=\"kc-note\">Weavers lose <b>3&ndash;4 rainy months</b> a year, when humidity makes silk thread unusable.</p>" }
            ] },
            { label: "Methods and policy", rows: [
              { kind: "html", html: "<div class=\"kc-issues\"><div><b>Literature</b><p>Books and official documents.</p></div><div><b>Field survey</b><p>Interviews with 100 people.</p></div><div><b>Visual survey</b><p>Observation and photographs.</p></div><div><b>Lab research</b><p>Analysis, then proposals.</p></div></div>" },
              { kind: "html", html: "<p class=\"um-sub\">THE THESIS TIMELINE AND THE POLICY APPROACH</p>" },
              { kind: "duo", tiles: [
                { src: "assets/kancheepuram/timeline.jpg", alt: "The thesis timeline", caption: "<b>Timeline.</b> Four stages, June 2015 to May 2016.", fit: "contain" },
                { src: "assets/kancheepuram/policy-flow.jpg", alt: "Policy approach flow", caption: "<b>Policy approach.</b> Problem sensing to solution analysis.", fit: "contain" }
              ] },
              { kind: "html", html: "<p class=\"um-sub kc-gap\">POLICY: TWO CENTRES OF ATTRACTION</p>" },
              { kind: "html", html: "<div class=\"kc-two\"><div class=\"a\"><h4>Temples</h4><span>centre of attraction 1</span><p>Mini-buses and e-buggies between temples; drop-and-park at the edge.</p></div><div class=\"b\"><h4>Silk weavers</h4><span>centre of attraction 2</span><p>A silk designing centre and a cultural centre.</p></div></div>" }
            ] },
            { label: "Issues", rows: [
              { kind: "html", html: "<p class=\"um-sub\">HOW THE ISSUES CONNECT</p><div class=\"kc-flow7\"><div class=\"r\" style=\"--c:#8b2a18\"><span class=\"a\">Conservational issue</span><div class=\"i\"><em>Temple</em><em>Ecological niche</em><em>Built fabric</em></div></div><div class=\"r\" style=\"--c:#f19c01\"><span class=\"a\">Developmental issue</span><div class=\"i\"><em>Textile industries</em><em>Technology advancement</em><em>Community awareness</em><em>Informal development of roads</em></div></div><div class=\"r\" style=\"--c:#374f33\"><span class=\"a\">Environmental and ecological issue</span><div class=\"i\"><em>Regional level effects</em><em>Textile industry</em></div></div><div class=\"r\" style=\"--c:#7bb5c2\"><span class=\"a\">Infrastructural issue</span><div class=\"i\"><em>Parking</em><em>Access to temples</em><em>Recreational spaces</em><em>Public spaces</em></div></div><div class=\"r\" style=\"--c:#935c90\"><span class=\"a\">Identity</span><div class=\"i\"><em>Temple town</em><em>Silk city</em></div></div></div>" },
              { kind: "html", html: "<div class=\"kc-iss\"><div class=\"kc-i\" style=\"--c:#8b2a18\"><img src=\"assets/kancheepuram/ph-stalls.jpg\" alt=\"\" loading=\"lazy\" class=\"cover\"><b>Conservation</b><ul><li>Priestly houses left vacant, turned into godowns</li><li>Hawkers and homes crowd the temple approaches</li><li>Old houses subdivided; new building ignores local character</li></ul></div><div class=\"kc-i\" style=\"--c:#f19c01\"><img src=\"assets/kancheepuram/ph-weaver.jpg\" alt=\"\" loading=\"lazy\" class=\"cover\"><b>Development</b><ul><li>Handloom declining, power looms rising: a sleeping town</li><li>Young people leave for study and work</li><li>Roads of uneven width</li></ul></div><div class=\"kc-i\" style=\"--c:#374f33\"><img src=\"assets/kancheepuram/map-blue.jpg\" alt=\"\" loading=\"lazy\" class=\"contain\"><b>Ecology</b><ul><li>Tanks polluted and disappearing</li><li>Dye effluent reaches groundwater</li><li>Waste feeds heavy water-hyacinth growth</li></ul></div><div class=\"kc-i\" style=\"--c:#7bb5c2\"><img src=\"assets/kancheepuram/ph-bus.jpg\" alt=\"\" loading=\"lazy\" class=\"cover\"><b>Infrastructure</b><ul><li>No public or recreational space</li><li>Temple approaches clogged by traffic</li><li>Parking spills onto the roads</li></ul></div><div class=\"kc-i\" style=\"--c:#935c90\"><img src=\"assets/kancheepuram/ph-silk.jpg\" alt=\"\" loading=\"lazy\" class=\"cover\"><b>Identity</b><ul><li>The silk city is fading as weaving declines</li><li>The temple-town identity needs keeping</li></ul></div></div>" }
            ] },
            { label: "Design parameters and approach", rows: [
              { kind: "layer", tiles: [
                { src: "assets/kancheepuram/parameters.jpg", alt: "Design parameters", caption: "<b>Parameters.</b> Connectivity, core areas, scenario and facilities around one aim: temple town redevelopment.", fit: "contain" },
                { src: "assets/kancheepuram/design-approach.jpg", alt: "Design approach", caption: "<b>Approach.</b> Quality urban design: productive, sustainable and liveable.", fit: "contain" }
              ] }
            ] },
            { label: "Fourteen proposals, in brief", rows: [
              { kind: "html", html: "<div class=\"kc-props\"><div><b>1</b>Conservation approach</div><div><b>2</b>Heritage walk</div><div><b>3</b>Weavers' centre</div><div><b>4</b>Wastewater treatment</div><div><b>5</b>Smart parking</div><div><b>6</b>Hawker zone</div><div><b>7</b>Rajaji Market</div><div><b>8</b>Temple tanks</div><div><b>9</b>Height limits</div><div><b>10</b>Bus stops</div><div><b>11</b>Manjalneer Kalvai canal</div><div><b>12</b>Ekambareshwarar approach</div><div><b>13</b>Educational hub</div><div><b>14</b>Cultural &amp; arts centre</div></div>" },
              { kind: "quad", tiles: [
                { src: "assets/kancheepuram/walk-map.jpg", alt: "Heritage walk", caption: "<b>2 Heritage walk.</b>", fit: "contain" },
                { src: "assets/kancheepuram/weavers-site.jpg", alt: "Weavers' centre site", caption: "<b>3 Weavers' centre.</b>", fit: "contain" },
                { src: "assets/kancheepuram/wastewater.jpg", alt: "Wastewater treatment", caption: "<b>4 Wastewater.</b>", fit: "contain" },
                { src: "assets/kancheepuram/smart-parking.jpg", alt: "Smart parking", caption: "<b>5 Smart parking.</b>", fit: "contain" }
              ] },
              { kind: "quad", tiles: [
                { src: "assets/kancheepuram/hawker-sketch.jpg?v=2", alt: "Hawker zone", caption: "<b>6 Hawker zone.</b>", fit: "contain" },
                { src: "assets/kancheepuram/rajaji-plan.jpg", alt: "Rajaji Market plan", caption: "<b>7 Rajaji Market.</b>", fit: "contain" },
                { src: "assets/kancheepuram/tank-view.jpg", alt: "Temple tank", caption: "<b>8 Temple tanks.</b>", fit: "contain" },
                { src: "assets/kancheepuram/heights-sections.jpg", alt: "Height sections", caption: "<b>9 Height limits.</b>", fit: "contain" }
              ] },
              { kind: "quad", tiles: [
                { src: "assets/kancheepuram/busstop-sketch.jpg?v=2", alt: "Bus stop design", caption: "<b>10 Bus stops.</b>", fit: "contain" },
                { src: "assets/kancheepuram/canal-plan.jpg", alt: "Canal plan", caption: "<b>11 Canal.</b>", fit: "contain" },
                { src: "assets/kancheepuram/ekambaranathar-after.jpg", alt: "Ekambareshwarar approach, proposed", caption: "<b>12 Temple approach.</b>", fit: "contain" },
                { src: "assets/kancheepuram/culture-plan.jpg", alt: "Cultural centre plan", caption: "<b>14 Arts centre.</b>", fit: "contain" }
              ] }
            ] }
          ]
        },
  };
  /* /KANCHEE-QUICK */
  /* IAAC-THESIS-QUICK */
  var THESIS_IAAC = {
    title: "A Predictive Spatial Index for Climate-Gender Equity Gaps in Street Design in India",
        quick: {
          tags: [["THESIS IN PROGRESS", "#935c90"], ["CLIMATE \u00b7 GENDER \u00b7 STREETS", "#c47ac0"], ["IAAC", "#0c2036"]],
          banner: "assets/iaac/cover-band.jpg", bannerPos: "center 86%", hero: "assets/iaac/cover-street.jpg",
          result: "Can a street design be scored for climate and gender risk before it is built? This thesis builds an index from the literature and prototypes a tool that shows where along a street a climate fix may widen a gender gap.",
          stats: [["9th", "India's rank for extreme-weather impact, 1995\u20132024"], ["6", "climate hazards read together"], ["5", "stages in the method"], ["Jun 2027", "thesis defence"]],
          role: [["PROGRAMME", "IAAC, Master in Advanced Urban Planning and Data Analytics"], ["STATUS", "First review done, October 2026"], ["SITE", "India"], ["YEAR", "2026\u20132027"]],
          groups: [
            { label: "Why this thesis", rows: [
              { kind: "html", html: "<div class=\"kc-quote\">&ldquo;When planners fail to account for gender, public spaces become male spaces by default.&rdquo;<span>Caroline Criado Perez, Invisible Women</span></div>" },
              { kind: "html", html: "<p class=\"um-sub\">THREE PLACES WHERE THAT SHOWS, AND WHO PAYS FOR IT</p>" },
              { kind: "html", html: "<div class=\"kc-issues\"><div><b>1 &middot; The street</b><p>In Indian cities, 37% of women walk to work compared with 27% of men, and more women depend on buses, which means walking to stops and waiting there.</p></div><div><b>2 &middot; The standard</b><p>The indices used to judge outdoor heat comfort are commonly computed for a default man, for example PET's 35-year-old, 75 kg, 1.75 m reference person. Indoor comfort standards may overestimate women's metabolic rate by up to 35%.</p></div><div><b>3 &middot; The body</b><p>Each 1&deg;C rise raises the odds of preterm birth by 5%, and heatwaves by 16%. Women workers drink less water where streets have no toilets: 97% in one Indian survey reported burning urination. About 40% of SEWA members reported worse mental health in heat.</p></div></div>" },
              { kind: "html", html: "<p class=\"kc-cap\">Sources: Census of India 2011, B-28; IndiaSpend analysis; WIEGO 2026; H&ouml;ppe 1999; Kingma &amp; van Marken Lichtenbelt 2015; Chersich, M.F. et al. (2020); Breaking Point: Heat and the Garment Floor, SEWA 2025.</p>" },
              { kind: "html", html: "<div class=\"kc-quote\">&ldquo;Climate change is a man-made problem and must have a feminist solution.&rdquo;<span>Mary Robinson, former President of Ireland and UN climate envoy</span></div>" }
            ] },
            { label: "The research gap", rows: [
              { kind: "html", html: "<svg class=\"iz-venn\" viewBox=\"0 0 520 340\" role=\"img\" aria-label=\"Venn diagram: climate, gender and public spaces. The centre where all three meet is almost empty.\"><circle cx=\"200\" cy=\"130\" r=\"105\" fill=\"#3a78d0\" fill-opacity=\".35\"/><circle cx=\"320\" cy=\"130\" r=\"105\" fill=\"#c47ac0\" fill-opacity=\".38\"/><circle cx=\"260\" cy=\"226\" r=\"105\" fill=\"#0c2036\" fill-opacity=\".22\"/><text x=\"140\" y=\"70\" class=\"v\" text-anchor=\"middle\">CLIMATE</text><text x=\"380\" y=\"70\" class=\"v\" text-anchor=\"middle\">GENDER</text><text x=\"260\" y=\"330\" class=\"v\" text-anchor=\"middle\">PUBLIC SPACES</text><text x=\"260\" y=\"92\" class=\"t\" text-anchor=\"middle\">Disproportionate</text><text x=\"260\" y=\"103\" class=\"t\" text-anchor=\"middle\">climate exposure</text><text x=\"182\" y=\"212\" class=\"t\" text-anchor=\"middle\">Microclimatic</text><text x=\"182\" y=\"223\" class=\"t\" text-anchor=\"middle\">modification</text><text x=\"182\" y=\"240\" class=\"t\" text-anchor=\"middle\">Surface &amp; material</text><text x=\"182\" y=\"251\" class=\"t\" text-anchor=\"middle\">effects</text><text x=\"338\" y=\"206\" class=\"t\" text-anchor=\"middle\">Gendered spatial use</text><text x=\"338\" y=\"217\" class=\"t\" text-anchor=\"middle\">&amp; appropriation</text><text x=\"338\" y=\"234\" class=\"t\" text-anchor=\"middle\">Use-driven spatial</text><text x=\"338\" y=\"245\" class=\"t\" text-anchor=\"middle\">adaptation</text><text x=\"260\" y=\"168\" class=\"q\" text-anchor=\"middle\">?</text></svg>" },
              { kind: "html", html: "<p class=\"kc-note\">Each pair is well studied. <b>All three together</b> is almost empty. That is where this thesis sits.</p>" }
            ] },
            { label: "Why India", rows: [
              { kind: "html", html: "<p class=\"kc-p\"><b>Countries most affected by storms, floods, heat waves and droughts, 1995 to 2024</b> (Germanwatch CRI 2026)</p>" },
              { kind: "html", html: "<figure class=\"iz-fade\"><div class=\"st\"><img src=\"assets/iaac/top10.jpg\" alt=\"Ten countries most affected by extreme weather, 1995 to 2024\" loading=\"lazy\"><img class=\"hi\" src=\"assets/iaac/india-rank.jpg\" alt=\"The same map with India highlighted in red\" loading=\"lazy\"></div><figcaption><b>Climate risk concentrates in the Global South.</b> India ranks 9th.</figcaption></figure>" },
              { kind: "html", html: "<div class=\"wi-facts\"><div><b>9th</b><span>India's long-term rank, 1995 to 2024</span></div><div><b>80,000+</b><span>deaths in India from about 430 extreme weather events</span></div><div><b>USD 170 bn</b><span>economic losses in India</span></div></div>" },
              { kind: "html", html: "<p class=\"kc-note\">The top-ranked countries (Dominica, Myanmar, Honduras, Libya) were hit by single, unusually extreme events. <b>India is where the largest number of people face recurring, multi-hazard climate risk while most of the city is still to be built.</b></p>" },
              { kind: "html", html: "<p class=\"um-sub\">WHY INDIA?</p>" },
              { kind: "html", html: "<div class=\"kc-issues\"><div><b>Growing cities &middot; +416 Mn</b><p>more people will be living in Indian cities by 2050, the most of any country. India needs its new streets designed right from day one.</p></div><div><b>Heat &middot; 20 days</b><p>of heatwave for each person in 2024. India needs streets that keep people cool.</p></div><div><b>Climatic risks &middot; Every year</b><p>floods, heatwaves, cyclones and droughts return. India needs streets that handle more than one risk.</p></div><div><b>Clean air &middot; 130+ cities</b><p>are working to improve their air under the national clean air programme. India needs streets that help people breathe better.</p></div><div><b>Women on the street &middot; 37% vs 27%</b><p>of women and men walk to work; women also do most of the care trips. India needs streets designed for women's daily journeys.</p></div><div><b>Gender gap &middot; Rank 131</b><p>of 148 countries on gender equality. India needs streets that support women's work and care trips.</p></div><div><b>Climate &amp; streets &middot; +3&ndash;4&deg;C</b><p>hotter than their surroundings. India needs streets that help cool the city.</p></div><div><b>Ready to act &middot; 250+</b><p>cities and districts already have Heat Action Plans. India has the plans; it needs a tool to check designs.</p></div></div>" },
              { kind: "html", html: "<p class=\"kc-cap\">Sources: Germanwatch, Climate Risk Index 2026 (Adil, Eckstein, K&uuml;nzel &amp; Sch&auml;fer, Nov 2025). Income groups: World Bank classification via Natural Earth.</p>" }
            ] },
            { label: "Six hazards, one lens", rows: [
              { kind: "html", html: "<p class=\"kc-p\"><b>When India faces all six climate impacts</b></p>" },
              { kind: "layer", tiles: [
                { src: "assets/iaac/hz-heat.jpg", alt: "Heatwave deaths by district", caption: "<b>Heat.</b> Heatwave days that caused deaths, 1967 to 2019 (IMD).", fit: "contain" },
                { src: "assets/iaac/hz-flood.jpg", alt: "Flood events by district", caption: "<b>Floods.</b> Flood events, 1967 to 2019 (IMD).", fit: "contain" },
                { src: "assets/iaac/hz-cyclone.jpg", alt: "Districts highly vulnerable to cyclones", caption: "<b>Cyclones.</b> Districts highly vulnerable to cyclones (IMD).", fit: "contain" },
                { src: "assets/iaac/hz-drought.jpg", alt: "Drought vulnerability", caption: "<b>Drought.</b> Drought vulnerability index (IMD).", fit: "contain" },
                { src: "assets/iaac/hz-slr.jpg", alt: "Coast at risk from sea-level rise", caption: "<b>Sea-level rise.</b> Km of coast at risk from sea-level rise (INCOIS).", fit: "contain" },
                { src: "assets/iaac/hz-air.jpg", alt: "Cities in the National Clean Air Programme", caption: "<b>Air pollution.</b> Cities in the National Clean Air Programme.", fit: "contain" }
              ] },
              { kind: "html", html: "<p class=\"kc-cap\">Sources: Heat, floods, drought and cyclones: IMD Climate Hazards and Vulnerability Atlas of India (imdpune.gov.in/hazardatlas), redrawn. Air: National Clean Air Programme city list (Lok Sabha, 18 July 2022). Sea-level rise: INCOIS Coastal Vulnerability Atlas (MoES, Lok Sabha Q.195, 2022). State boundaries: DataMeet.</p>" },
              { kind: "html", html: "<p class=\"um-sub\">EACH HAZARD HARMS PEOPLE IN A DIFFERENT WAY</p>" },
              { kind: "html", html: "<div class=\"wi-facts\"><div><b>33%</b><span>Heat waves: of global extreme weather deaths, 1995 to 2024</span></div><div><b>33% / 58%</b><span>Storms and cyclones: of global deaths / of global economic losses</span></div><div><b>48%</b><span>Floods: of all people affected by extreme weather worldwide</span></div><div><b>Top 4</b><span>Drought: India is among the most prominent climate impacts worldwide, 1995&ndash;2024</span></div></div>" },
              { kind: "html", html: "<p class=\"um-sub\">WHY TREAT THEM TOGETHER</p>" },
              { kind: "html", html: "<div class=\"kc-issues\"><div><b>1 &middot; Hazards meet on the same street</b><p>The same Delhi street faces peak heat in May&ndash;June and waterlogging in July&ndash;August.</p></div><div><b>2 &middot; Fixes trade off</b><p>A dense canopy that cools a footpath by day can darken it at night and lower perceived safety for women.</p></div><div><b>3 &middot; Current tools work in silos</b><p>Heat Action Plans, flood plans and street guidelines are usually prepared separately. The index reads them together.</p></div></div>" },
              { kind: "html", html: "<p class=\"kc-cap\">Sources: Germanwatch, Climate Risk Index 2026. Street examples are illustrative.</p>" }
            ] },
            { label: "Why streets", rows: [
              { kind: "html", html: "<p class=\"kc-lead\">Of all public space types, <b>the street is where women cannot avoid</b>, whether women are working, shopping, running errands or caring for others, and where their daily climate exposure happens.</p>" },
              { kind: "html", html: "<div class=\"iz-hang\"><p class=\"lg\"><span><i style=\"background:#374f33\"></i>Absent</span><span><i style=\"background:#f19c01\"></i>Present</span><span><i style=\"background:#7bb5c2\"></i>Women</span><span><i style=\"background:#8b2a18\"></i>Men</span></p><div class=\"bars\"><div class=\"hp\"><span class=\"lb\">Footpath in Indian streets</span><div class=\"hb\"><i style=\"height:70.0%;background:#374f33\">70%</i><i style=\"height:30.0%;background:#f19c01\">30%</i></div></div><div class=\"hp\"><span class=\"lb\">Women section in public bathrooms (Delhi)</span><div class=\"hb\"><i style=\"height:66.7%;background:#374f33\">70%</i><i style=\"height:33.3%;background:#f19c01\">35%</i></div></div><div class=\"hp\"><span class=\"lb\">Walk or Public Transport to work</span><div class=\"hb\"><i style=\"height:44.2%;background:#8b2a18\">53%</i><i style=\"height:55.8%;background:#7bb5c2\">67%</i></div></div><div class=\"hp\"><span class=\"lb\">Cyclists in Indian streets</span><div class=\"hb\"><i style=\"height:96.0%;background:#8b2a18\">96%</i><i style=\"height:4.0%;background:#7bb5c2\">4%</i></div></div></div><img class=\"w1\" src=\"assets/iaac/woman-walking.png\" alt=\"\" loading=\"lazy\"><img class=\"w2\" src=\"assets/iaac/woman-shawl.png\" alt=\"\" loading=\"lazy\"></div>" },
              { kind: "html", html: "<div class=\"kc-issues\"><div><b>1 &middot; Streets carry women's daily exposure</b><p>Women walk more than men and chain care trips on foot.</p></div><div><b>2 &middot; Streets are workplaces</b><p>Vendors and informal workers spend whole days on the footpath.</p></div><div><b>3 &middot; Streets are being redesigned now</b><p>Delhi PWD with WRI (540 km), Smart Cities Streets4People, Bengaluru Tender SURE: real proposals exist to score.</p></div><div><b>4 &middot; Streets are measurable</b><p>Segments between intersections match design drawings and street-level imagery.</p></div></div>" },
              { kind: "html", html: "<p class=\"kc-note\"><b>Most of the urban infrastructure India will need, streets included, is still to be built.</b></p>" },
              { kind: "html", html: "<p class=\"kc-cap\">Sources: Wilbur Smith Associates for the Ministry of Urban Development (2008), Study on Traffic and Transportation Policies and Strategies in Urban Areas in India (30 cities), via the Centre for Science and Environment; ActionAid India (2017), Peoples' Vision of the City survey of 229 public toilets in Delhi; Census of India 2011, Table B-28, via IndiaSpend; Census of India 2011, via Elets eGov.</p>" }
            ] },
            { label: "Why gender", rows: [
              { kind: "html", html: "<div class=\"iz-gen\"><img src=\"assets/iaac/woman-reading.jpg\" alt=\"A woman reading\" loading=\"lazy\"><div class=\"r\"><p class=\"kc-lead\"><b>Climate impacts are gendered.</b> The same heat wave or flood costs women more and hits some groups of women hardest.</p><div class=\"iz-stats\"><div class=\"iz-stat\"><b style=\"color:#8b2a18\">8%</b><p>more income lost to heat stress by female-headed households than male-headed ones, plus 3% more to floods<small>FAO, The Unjust Climate, 2024 (24 LMICs)</small></p></div><div class=\"iz-stat\"><b style=\"color:#7bb5c2\">7%</b><p>of annual wages lost to extreme heat by informal women workers in Ahmedabad, plus about 120 extra minutes of unpaid work on heatwave days<small>HERA, Counting the Cost of Heat, 2026</small></p></div><div class=\"iz-stat\"><b style=\"color:#374f33\">~80%</b><p>of 600 SEWA members surveyed reported heat-related income loss (up to 50%), health impacts, or both<small>SEWA survey via BHRRC, 2025</small></p></div><div class=\"iz-stat\"><b style=\"color:#f19c01\">70%</b><p>of 400+ street vendors in Delhi-NCR lacked access to toilets, clean water and shade<small>WIEGO study via Newslaundry, 2026</small></p></div></div></div></div>" }
            ] },
            { label: "What exists today", rows: [
              { kind: "html", html: "<div class=\"iz-tbl-wrap\"><table class=\"iz-tbl\"><caption>Precedent scan of Indian and global street tools against the four things this thesis needs</caption><thead><tr><th>Precedent</th><th>Climate</th><th>Gender</th><th>Composite score</th><th>Design stage</th></tr></thead><tbody><tr><th>Indian street design guidelines (ITDP BSBC, Pune USDG, Tender SURE, UTTIPEC)</th><td><i class=\"d p\" aria-label=\"partly\"></i></td><td><i class=\"d p\" aria-label=\"partly\"></i></td><td><i class=\"d a\" aria-label=\"absent\"></i></td><td><i class=\"d c\" aria-label=\"covered\"></i></td></tr><tr><th>Safetipin women's safety audits</th><td><i class=\"d a\" aria-label=\"absent\"></i></td><td><i class=\"d c\" aria-label=\"covered\"></i></td><td><i class=\"d c\" aria-label=\"covered\"></i></td><td><i class=\"d a\" aria-label=\"absent\"></i></td></tr><tr><th>World Bank gender-responsive mobility toolkit (2022)</th><td><i class=\"d a\" aria-label=\"absent\"></i></td><td><i class=\"d c\" aria-label=\"covered\"></i></td><td><i class=\"d a\" aria-label=\"absent\"></i></td><td><i class=\"d p\" aria-label=\"partly\"></i></td></tr><tr><th>Indian Heat Action Plans</th><td><i class=\"d c\" aria-label=\"covered\"></i></td><td><i class=\"d p\" aria-label=\"partly\"></i></td><td><i class=\"d a\" aria-label=\"absent\"></i></td><td><i class=\"d a\" aria-label=\"absent\"></i></td></tr><tr><th>Street thermal comfort index, SWTCI (PET-based)</th><td><i class=\"d c\" aria-label=\"covered\"></i></td><td><i class=\"d a\" aria-label=\"absent\"></i></td><td><i class=\"d c\" aria-label=\"covered\"></i></td><td><i class=\"d a\" aria-label=\"absent\"></i></td></tr><tr><th>Women-centric walkability index, Kollam (AHP + GIS)</th><td><i class=\"d a\" aria-label=\"absent\"></i></td><td><i class=\"d c\" aria-label=\"covered\"></i></td><td><i class=\"d c\" aria-label=\"covered\"></i></td><td><i class=\"d a\" aria-label=\"absent\"></i></td></tr><tr><th>IIT Delhi TRIP: women commuters' heat exposure, Delhi (audits + surveys)</th><td><i class=\"d c\" aria-label=\"covered\"></i></td><td><i class=\"d c\" aria-label=\"covered\"></i></td><td><i class=\"d a\" aria-label=\"absent\"></i></td><td><i class=\"d a\" aria-label=\"absent\"></i></td></tr><tr class=\"me\"><th>Proposed thesis: Climate-Gender Equity Index</th><td><i class=\"d g\" aria-label=\"covered\"></i></td><td><i class=\"d g\" aria-label=\"covered\"></i></td><td><i class=\"d g\" aria-label=\"covered\"></i></td><td><i class=\"d g\" aria-label=\"covered\"></i></td></tr></tbody></table></div><p class=\"iz-legend\"><span><i class=\"d c\"></i>covered</span><span><i class=\"d p\"></i>partly, as a checklist or infrastructure item</span><span><i class=\"d a\"></i>absent</span></p>" },
              { kind: "html", html: "<p class=\"kc-note\"><b>The closest precedent, IIT Delhi's TRIP Centre, diagnoses women's heat exposure on existing streets. No existing index scores a proposed street design on climate and gender together before it is built.</b></p>" }
            ] },
            { label: "Research question", rows: [
              { kind: "html", html: "<div class=\"kc-quote sm\">Can a design proposal for a street be scored, using literature-derived indicators of climate exposure and gendered comfort, to predict where along the design a climate-adaptive intervention will create a gender equity gap, before it is built?</div>" }
            ] },
            { label: "Aim", rows: [
              { kind: "html", html: "<div class=\"kc-quote sm\">To develop a <b>Climate-Gender Equity Index</b>, built from literature-derived indicators, and to prototype it as a tool that scores within a proposed street design for climate-gender equity risk before construction.</div>" }
            ] },
            { label: "Objectives", rows: [
              { kind: "html", html: "<div class=\"kc-props iz-obj\"><div><b>1</b><span>Identify indicators from climate resilience and gender equity literature that can be combined into a climate-gender equity index for streets<em>Stage 1</em></span></div><div><b>2</b><span>Classify each indicator as plan-derivable or requiring field or census data<em>Stage 2</em></span></div><div><b>3</b><span>Construct the index as a weighted composite formula from plan-derivable indicators, with context and census layers for gendered vulnerability<em>Stage 3</em></span></div><div><b>4</b><span>Build a tool that takes a street design plan as input and outputs a spatial, zone-by-zone equity gap score<em>Stage 4</em></span></div><div><b>5</b><span>Test the tool on a design proposal and compare its output against a validation case with observed gendered use data<em>Stage 5</em></span></div></div>" },
              { kind: "html", html: "<p class=\"kc-cap\">Each objective maps to one stage of the methodology.</p>" }
            ] },
            { label: "Methodology", rows: [
              { kind: "html", html: "<div class=\"iz-meth\"><div class=\"iz-mgrid\"><div class=\"band\"><img src=\"assets/iaac/street-colour.jpg\" alt=\"\" loading=\"lazy\"><img class=\"g\" src=\"assets/iaac/street-grey.jpg\" alt=\"A street, seen from above\" loading=\"lazy\"></div><div class=\"m\" style=\"--c:#8b2a18\"><div class=\"in\"><small>INPUT</small>Literature: IPCC, heat and flood studies, gender and street design research</div><i class=\"ln\"></i><b class=\"n\">1</b><h5><em>Identify</em> indicators</h5><p>Indicators from climate resilience and gender equity literature</p></div><div class=\"m\" style=\"--c:#7bb5c2\"><div class=\"in\"><small>INPUT</small>IMD hazard atlas, WorldPop, Census</div><i class=\"ln\"></i><b class=\"n\">2</b><h5><em>Classify</em> indicators</h5><p>Bucket 1: readable from a design plan. Bucket 2: needs field or census data</p></div><div class=\"m\" style=\"--c:#374f33\"><div class=\"in\"><small>INPUT</small>Weighting options: AHP, PCA, regression</div><i class=\"ln\"></i><b class=\"n\">3</b><h5><em>Build</em> the index</h5><p>Normalise, weight and combine indicators into one score (OECD/JRC method)</p></div><div class=\"m\" style=\"--c:#f19c01\"><div class=\"in\"><small>INPUT</small>Street design drawings</div><i class=\"ln\"></i><b class=\"n\">4</b><h5><em>Build</em> the tool</h5><p>Reads a street design plan and scores every segment between intersections</p></div><div class=\"m\" style=\"--c:#a42a11\"><div class=\"in\"><small>INPUT</small>Gendered use data: surveys, public life counts</div><i class=\"ln\"></i><b class=\"n\">5</b><h5><em>Test</em> and validate</h5><p>Run on proposals across Indian cities; check against observed gendered use at one site</p></div><div class=\"out\"><h6>OUTPUT:</h6><p>Equity gap score for every street segment</p><img src=\"assets/iaac/out-map.jpg\" alt=\"Equity gap score along a street, low to high\" loading=\"lazy\"><img class=\"lgd\" src=\"assets/iaac/out-legend.jpg\" alt=\"Legend: low, mid, high\" loading=\"lazy\"></div><div class=\"loop\"><span>Validation results refine the weights</span></div></div><p class=\"foot\">The list of inputs are tentative based on initial research.</p></div>" }
            ] },
            { label: "What it will produce", rows: [
              { kind: "html", html: "<div class=\"kc-two\"><div class=\"a\"><h4>The index</h4><span>the scoring logic</span><p>Climate exposure and gendered comfort indicators, weights that combine them into one score, context layers for gendered vulnerability, and an indicator catalogue tagged plan-derivable or field-derived.</p></div><div class=\"b\"><h4>The tool</h4><span>the index, applied to a street plan</span><p>Street design plan, index, score per segment. It flags where along the design an intervention may widen the gap.</p></div></div>" }
            ] },
            { label: "Stakeholders", rows: [
              { kind: "html", html: "<p class=\"kc-p\">Who will use the tool, and who will benefit from it.</p><div class=\"iz-stk\"><div><img src=\"assets/iaac/stk-gov.jpg\" alt=\"\" loading=\"lazy\"><h5>Government and regulators</h5><p>Municipal corporations, state urban development departments, MoHUA, NDMA and state disaster authorities.</p></div><div><img src=\"assets/iaac/stk-research.jpg\" alt=\"\" loading=\"lazy\"><h5>Researchers and data providers</h5><p>IIT Delhi TRIP Centre, IMD, INCOIS, CSE, Safetipin, academic institutions.</p></div><div><img src=\"assets/iaac/stk-practice.jpg\" alt=\"\" loading=\"lazy\"><h5>Street design and planning practice</h5><p>Design consultants, architects, urban planners, WRI India, ITDP India, NIUA.</p></div><div><img src=\"assets/iaac/stk-funders.jpg\" alt=\"\" loading=\"lazy\"><h5>Funders and development partners</h5><p>World Bank, UN-Habitat, UN Women, C40 Cities.</p></div><div><img src=\"assets/iaac/stk-civil.jpg\" alt=\"\" loading=\"lazy\"><h5>Civil society and advocacy groups</h5><p>SEWA, Mahila Housing Trust, NASVI, resident welfare associations, women's collectives.</p></div><div><img src=\"assets/iaac/stk-users.jpg\" alt=\"\" loading=\"lazy\"><h5>Street users</h5><p>Women commuters, caregivers, street vendors, informal workers, pedestrians.</p></div></div>" }
            ] },
            { label: "Timeline", rows: [
              { kind: "whole", tiles: [
                { src: "assets/iaac/timeline.jpg", alt: "Thesis timeline, August 2026 to June 2027", caption: "<b>August 2026 to June 2027.</b>", fit: "contain" }
              ] }
            ] },
            { label: "After the first review", rows: [
              { kind: "html", html: "<div class=\"kc-issues\"><div><b>Scan existing tools</b><p>Study every similar open-source tool; contact authors early.</p></div><div><b>Choose one scale</b><p>Street, neighbourhood or city, guided by the literature.</p></div><div><b>Settle the toolkit</b><p>Digital twin or data-science workflow.</p></div></div>" }
            ] }
          ]
        }
  };
  /* /IAAC-THESIS-QUICK */
  function openQuick(p) {
    var q = p.quick; quickProject = p; quickAll = [];
    var inner = quickEl.querySelector(".q-inner"); inner.innerHTML = "";
        if (q.banner) inner.insertBefore(el("div", { className: "q-banner" }, "background-image:url(" + q.banner + ")" + (q.bannerPos ? ";background-position:" + q.bannerPos : "")), inner.firstChild);
    var tags = el("div", { className: "q-tags" });
    q.tags.forEach(function (t) { var s = el("span", { textContent: t[0] }); s.style.color = t[1]; tags.appendChild(s); });
    inner.appendChild(tags);
    inner.appendChild(el("h2", { textContent: p.title.split(" \u2014 ")[0] }));
    inner.appendChild(el("p", { className: "q-result", textContent: q.result }));
    var stats = el("div", { className: "q-stats" }); stats.style.gridTemplateColumns = "repeat(" + q.stats.length + ", minmax(0, 1fr))";
    q.stats.forEach(function (s) { var d = el("div", { className: "q-stat" }); d.appendChild(el("div", { className: "n", textContent: s[0] })); d.appendChild(el("div", { className: "l", textContent: s[1] })); stats.appendChild(d); });
    if (q.stats && q.stats.length) inner.appendChild(stats);
    if (q.hero) inner.appendChild(el("img", { className: "q-hero", src: q.hero, alt: p.title }));
    q.groups.forEach(function (g, gi) {
      var wrap = el("section", { className: "q-group" });
      var h = el("h3", { className: "q-label" });
      h.appendChild(el("span", { className: "num", textContent: (gi < 9 ? "0" : "") + (gi + 1) }));
      h.appendChild(document.createTextNode(g.label));
      wrap.appendChild(h);
      g.rows.forEach(function (r) {
        if (r.html) { var hb = el("div", { className: "q-html" }); hb.innerHTML = r.html; wrap.appendChild(hb); return; }
        var grid = el("div", { className: "q-grid k-" + r.kind });
        r.tiles.forEach(function (t) {
          var idx = quickAll.length; quickAll.push(t);
          var fig = el("figure", { className: "q-tile" + (t.big ? " big" : "") + (t.qr ? " qr" : "") + (t.fit ? " fit-" + t.fit : "") });
          var b = el("button", { type: "button" }); b.setAttribute("aria-label", "Enlarge image");
          b.appendChild(el("img", { src: t.src, alt: t.alt || String(t.caption || "").replace(/<[^>]+>/g, "") || "Project image", loading: "lazy" }));
          b.addEventListener("click", function () { showQuickImg(idx); });
          fig.appendChild(b);
          fig.appendChild(el("figcaption", { innerHTML: t.caption }));
          grid.appendChild(fig);
        });
        if (r.note) grid.appendChild(el("p", { className: "q-note", innerHTML: r.note }));
        wrap.appendChild(grid);
      });
      inner.appendChild(wrap);
    });
    var role = el("div", { className: "q-role" });
    q.role.forEach(function (r) { var d = el("div"); d.appendChild(el("p", { className: "k", textContent: r[0] })); d.appendChild(el("p", { textContent: r[1] })); role.appendChild(d); });
    if (q.role && q.role.length) inner.appendChild(role);
    var actions = el("div", { className: "q-actions" });
    if (p.detailId) {
      var read = el("a", { href: "#", className: "q-read", textContent: "READ IN DETAIL \u2192" });
      read.addEventListener("click", function (e) { e.preventDefault(); closeQuick(); openDetail(p.detailId); });
      actions.appendChild(read);
    }
    (q.links || []).forEach(function (l) {
      actions.appendChild(el("a", { href: l[1], className: "q-link", target: "_blank", rel: "noopener", textContent: l[0] }));
    });
    inner.appendChild(actions);
    setQuickZoom(qStep);
    quickEl.classList.add("open");
    quickEl.scrollTop = 0;
    requestAnimationFrame(function () { quickEl.scrollTop = 0; });
  }
  function closeQuick() { quickEl.classList.remove("open"); quickEl.scrollTop = 0; $("quick-lb").classList.remove("open"); quickProject = null; }
  /* --- zoom: the pop-up as a whole (A- / A+) and each image in the viewer --- */
  var qSteps = [0.5, 0.6, 0.7, 0.8, 0.9, 1, 1.15, 1.3, 1.5, 1.75], QDEF = 2, qStep = QDEF;   // opens zoomed out to 70%
  function setQuickZoom(i) {
    qStep = Math.max(0, Math.min(qSteps.length - 1, i));
    quickEl.querySelector(".q-inner").style.zoom = qSteps[qStep];
    quickEl.querySelector(".q-bar").style.maxWidth = (1100 * qSteps[qStep]) + "px";   // keep the buttons inside the panel at any zoom
    $("q-zl").textContent = Math.round(qSteps[qStep] * 100) + "%";
  }
  setQuickZoom(qStep);
  $("q-zin").addEventListener("click", function () { setQuickZoom(qStep + 1); });
  $("q-zout").addEventListener("click", function () { setQuickZoom(qStep - 1); });
  $("q-close").addEventListener("click", closeQuick);

  var lz = { s: 1, x: 0, y: 0 };
  function lbApply() {
    var lb = $("quick-lb"), img = lb.querySelector("img");
    img.style.transform = "translate(" + lz.x + "px," + lz.y + "px) scale(" + lz.s + ")";
    img.style.cursor = lz.s > 1 ? "grab" : "zoom-in";
    lb.querySelector(".lb-zl").textContent = Math.round(lz.s * 100) + "%";
  }
  function lbSet(s) {
    lz.s = Math.max(1, Math.min(6, s));
    if (lz.s === 1) { lz.x = 0; lz.y = 0; }
    lbApply();
  }
  function lbReset() { lz.s = 1; lz.x = 0; lz.y = 0; if ($("quick-lb")) lbApply(); }

  (function () {
    var lb = $("quick-lb"), img = lb.querySelector("img");
    function hide() { lb.classList.remove("open"); img.src = ""; lbReset(); }
    lb.addEventListener("click", function (e) {
      if (e.target.closest(".lb-zin")) { lbSet(lz.s * 1.4); return; }
      if (e.target.closest(".lb-zout")) { lbSet(lz.s / 1.4); return; }
      if (e.target.closest(".lb-x")) { hide(); return; }
      if (e.target.closest(".lb-prev")) { showQuickImg(quickPos - 1); return; }
      if (e.target.closest(".lb-next")) { showQuickImg(quickPos + 1); return; }
      if (e.target.tagName === "IMG" || e.target.closest(".lb-cap")) return;
      hide();
    });
    lb.addEventListener("wheel", function (e) {
      if (!lb.classList.contains("open")) return;
      e.preventDefault();
      lbSet(lz.s * (e.deltaY < 0 ? 1.18 : 1 / 1.18));
    }, { passive: false });
    img.addEventListener("dblclick", function () { lbSet(lz.s > 1 ? 1 : 2.5); });
    var drag = null;
    img.addEventListener("pointerdown", function (e) {
      if (lz.s <= 1) return;
      drag = { px: e.clientX, py: e.clientY, x: lz.x, y: lz.y };
      img.setPointerCapture(e.pointerId);
      img.style.cursor = "grabbing";
    });
    img.addEventListener("pointermove", function (e) {
      if (!drag) return;
      lz.x = drag.x + (e.clientX - drag.px);
      lz.y = drag.y + (e.clientY - drag.py);
      lbApply();
    });
    function endDrag() { drag = null; lbApply(); }
    img.addEventListener("pointerup", endDrag);
    img.addEventListener("pointercancel", endDrag);
    document.addEventListener("keydown", function (e) {
      if (lb.classList.contains("open")) {
        if (e.key === "ArrowRight") showQuickImg(quickPos + 1);
        else if (e.key === "ArrowLeft") showQuickImg(quickPos - 1);
        else if (e.key === "+" || e.key === "=") lbSet(lz.s * 1.4);
        else if (e.key === "-" || e.key === "_") lbSet(lz.s / 1.4);
        else if (e.key === "0") lbSet(1);
      } else if (quickEl.classList.contains("open")) {
        if (e.key === "+" || e.key === "=") setQuickZoom(qStep + 1);
        else if (e.key === "-" || e.key === "_") setQuickZoom(qStep - 1);
        else if (e.key === "0") setQuickZoom(QDEF);
      }
    });
  })();
  quickEl.addEventListener("click", function (e) { if (e.target === quickEl) closeQuick(); });

  /* ---------- Story mode ---------- */
  var story = $("story");
  var slidesEl = $("story-slides");
  var barsEl = $("story-bars");
  var storyProject = null, storyIdx = 0, storyPaused = false;
  var slideEls = [], barFills = [];

  function openStory(p) {
    storyProject = p; storyIdx = 0; storyPaused = false;
    slidesEl.innerHTML = ""; barsEl.innerHTML = "";
    slideEls = p.images.map(function (im) {
      var s = el("div", { className: "story-slide" }, "opacity: 0; z-index: 1;");
      s.appendChild(el("img", { src: im.src, alt: im.caption || "Project image" }, "width: 100%; height: 100%; object-fit: cover;"));
      s.appendChild(el("div", null, "position: absolute; inset: 0; background: linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 24%, rgba(0,0,0,0) 58%, rgba(0,0,0,0.6) 100%);"));
      if (im.caption) s.appendChild(el("p", { textContent: im.caption }, "position: absolute; left: 48px; right: 48px; bottom: 110px; margin: 0; font-family: 'Epunda Slab', Georgia, serif; font-size: 34px; line-height: 1.2; letter-spacing: -0.01em; color: #fff; max-width: 720px;"));
      slidesEl.appendChild(s);
      return s;
    });
    barFills = p.images.map(function () {
      var track = el("div", null, "flex: 1; height: 3px; background: rgba(255,255,255,0.3); border-radius: 2px; overflow: hidden;");
      var fill = el("div", { className: "story-bar-fill" });
      fill.addEventListener("animationend", function () { if (fill === barFills[storyIdx]) goTo(storyIdx + 1); });
      track.appendChild(fill);
      barsEl.appendChild(track);
      return fill;
    });
    $("story-title").textContent = p.title;
    $("story-read").style.background = p.color;
    story.classList.add("open");
    goTo(0);
  }

  function goTo(i) {
    var n = storyProject.images.length;
    storyIdx = (i + n) % n;
    slideEls.forEach(function (s, k) {
      s.style.opacity = k === storyIdx ? "1" : "0";
      s.style.zIndex = k === storyIdx ? "2" : "1";
    });
    barFills.forEach(function (f, k) {
      f.style.animation = "none";
      f.style.width = k < storyIdx ? "100%" : "0%";
      if (k === storyIdx) {
        void f.offsetWidth;
        f.style.animation = "storyBar 4500ms linear forwards";
        f.style.animationPlayState = storyPaused ? "paused" : "running";
      }
    });
  }

  function closeStory() { story.classList.remove("open"); storyProject = null; }
  $("story-stage").addEventListener("mouseenter", function () {
    storyPaused = true;
    if (barFills[storyIdx]) barFills[storyIdx].style.animationPlayState = "paused";
  });
  $("story-stage").addEventListener("mouseleave", function () {
    storyPaused = false;
    if (barFills[storyIdx]) barFills[storyIdx].style.animationPlayState = "running";
  });
  $("story-close").addEventListener("click", closeStory);
  $("story-prev").addEventListener("click", function () { goTo(storyIdx - 1); });
  $("story-next").addEventListener("click", function () { goTo(storyIdx + 1); });
  $("story-read").addEventListener("click", function (e) {
    e.preventDefault();
    var p = storyProject;
    closeStory();
    if (p) openDetail(p.detailId);
  });

  /* ---------- Detail-page TOC highlighting ---------- */
  DETAIL_TOCS.forEach(function (cfg) {
    var id = cfg[0], prefix = cfg[1], cls = cfg[2], color = cfg[3];
    var headings = document.querySelectorAll("#" + id + " [id^='" + prefix + "']");
    var links = document.querySelectorAll("." + cls);
    var sc = document.querySelector("#" + id + " .detail-scroll");
    if (!headings.length || !sc) return;
    var sidebar = links.length ? links[0].closest(".detail-sidebar") : null, current = null, ticking = false;
    function updateToc() {
      ticking = false;
      var line = sc.getBoundingClientRect().top + sc.clientHeight * 0.25, act = headings[0];
      headings.forEach(function (h) { if (h.getBoundingClientRect().top <= line) act = h; });
      if (sc.scrollTop + sc.clientHeight >= sc.scrollHeight - 4) act = headings[headings.length - 1];
      if (!act || act.id === current) return;
      current = act.id;
      var activeLink = null;
      links.forEach(function (link) {
        var active = link.dataset.target === act.id;
        link.style.borderLeftColor = active ? color : "#ddd";
        link.style.color = active ? color : "#2c2c2c";
        if (active) activeLink = link;
      });
      if (sidebar && activeLink) {
        var sr = sidebar.getBoundingClientRect(), lr = activeLink.getBoundingClientRect();
        if (lr.top < sr.top + 12) sidebar.scrollTop -= (sr.top + 12 - lr.top);
        else if (lr.bottom > sr.bottom - 12) sidebar.scrollTop += lr.bottom - (sr.bottom - 12);
      }
    }
    sc.addEventListener("scroll", function () { if (!ticking) { ticking = true; requestAnimationFrame(updateToc); } }, { passive: true });
    links.forEach(function (link) {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        var t = document.getElementById(link.dataset.target);
        if (t) t.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });
  });

  /* Deep link: index.html#wingit-detail opens that case study. */
  if (location.hash && /-detail$/.test(location.hash)) openDetail(location.hash.slice(1));
  /* ---------- CV pop-up (PDF in an overlay) ---------- */
  (function () {
    var m = $("cv-modal"), f = $("cv-frame");
    if (!m || !f) return;
    var src = "assets/Janani_Ranganathan_CV.pdf";
    function open() { f.src = src + "#view=FitH"; m.classList.add("open"); document.body.style.overflow = "hidden"; }
    function close() { m.classList.remove("open"); f.src = "about:blank"; document.body.style.overflow = ""; }
    document.querySelectorAll("a[data-cv]").forEach(function (a) {
      a.addEventListener("click", function (e) { e.preventDefault(); open(); });
    });
    $("cv-close").addEventListener("click", close);
    m.addEventListener("click", function (e) { if (e.target === m) close(); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape" && m.classList.contains("open")) close(); });
  })();
})();
