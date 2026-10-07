// Redirects old WordPress links (?p=ID) to the new static posts
const MAP = {
 "93": "fairy-light-balcony-decor-cozy-dreamy-ideas-for-warm-evenings",
 "110": "flameless-candle-lanterns-cozy-stunning-floor-corner-decor",
 "112": "trailing-pothos-on-floating-shelves-easy-stunning-green-decor",
 "114": "transform-your-space-with-an-l-shaped-bench-with-storage-cozy-stylish-space-saving-design",
 "116": "round-jute-rug-ideas-cozy-stylish-ways-to-soften-tile-floors",
 "118": "metal-butterfly-wall-art-stunning-cozy-nature-inspired-corner-decor",
 "120": "ceramic-vase-centerpiece-ideas-stunning-floral-decor-for-a-cozy-table",
 "122": "transform-your-entryway-with-a-tiered-stone-waterfall-wall-stunning-serene-design-idea",
 "124": "weatherproof-outdoor-cushions-cozy-stunning-patio-color-ideas",
 "126": "open-shelving-ideas-cozy-stunning-kitchen-styling-with-ceramics-and-cookbooks",
 "128": "bonsai-tree-centerpiece-stunning-serene-table-decor-ideas-for-any-home",
 "135": "round-rattan-accent-chair-cozy-stunning-decor-with-a-printed-cushion",
 "137": "layered-rugs-cozy-stunning-jute-and-printed-rug-styling-ideas",
 "139": "statement-wall-clock-stunning-decorative-metalwork-for-a-cozy-home",
 "144": "coffee-table-book-decor-cozy-stunning-styling-with-a-small-accent",
 "146": "tabletop-zen-fountain-stunning-cozy-decor-with-natural-pebbles",
 "148": "railing-planter-boxes-stunning-trailing-flowers-for-a-dreamy-balcony",
 "150": "pendant-lights-over-dining-table-stunning-warm-brass-lighting-ideas",
 "152": "backlit-floating-shelves-stunning-led-lighting-for-a-cozy-modern-home",
 "154": "vertical-plant-wall-magic-ladder-shelf-ideas-to-transform-your-narrow-balcony",
 "156": "boucle-ottoman-cozy-stunning-flexible-seating-for-modern-living-rooms",
 "158": "striped-dhurrie-rug-for-balcony-cozy-stunning-outdoor-styling-ideas",
 "160": "black-orange-halloween-mantel-cozy-stunning-pumpkin-decor-ideas",
 "162": "gallery-wall-of-mixed-size-frames-stunning-cozy-print-display-ideas",
 "164": "spooky-halloween-entryway-stunning-gothic-mirror-mini-pumpkin-decor-ideas",
 "166": "elevate-your-space-with-a-brass-candlestick-trio-cozy-elegance-in-varying-heights",
 "168": "cozy-halloween-living-room-stunning-ghost-pillows-orange-throw-ideas",
 "170": "spooktacular-front-porch-makeover-jack-o-lantern-autumn-wreath-ideas-for-halloween",
 "172": "fog-mist-diffuser-pebble-tray-create-a-cozy-dreamy-zen-sanctuary",
 "174": "outdoor-safe-lanterns-cozy-stunning-flameless-candle-decor-ideas",
 "176": "runner-rug-under-dining-table-stunning-cozy-styling-ideas-for-your-home",
 "178": "sculptural-spiral-floor-lamp-stunning-statement-lighting-for-cozy-rooms",
 "180": "gothic-black-candle-display-stunning-halloween-decor-with-antique-charm",
 "182": "elevate-your-space-hanging-macrame-planters-for-a-cozy-boho-window-look",
 "184": "spooktacular-halloween-dining-table-black-candles-pumpkins-dark-florals",
 "186": "papasan-or-egg-chair-balcony-stunning-cozy-corner-ideas-for-small-spaces",
 "188": "chunky-knit-throw-over-a-chair-cozy-stunning-layered-decor-idea",
 "190": "spooky-staircase-makeover-hanging-bats-warm-string-lights-halloween-magic",
 "192": "woven-wall-hanging-stunning-cozy-boho-decor-for-a-textured-accent-wall",
 "194": "spookify-your-hearth-stunning-cobwebs-candles-black-pumpkins-for-a-halloween-fireplace",
 "196": "transform-your-entryway-decorative-bowls-cozy-key-organization-ideas",
 "198": "create-a-dreamy-zen-oasis-small-indoor-pond-with-floating-candles",
 "200": "transform-your-space-privacy-screen-with-integrated-shelving-a-stylish-cozy-room-divider",
 "202": "transform-your-pantry-with-glass-jars-a-stunning-cozy-kitchen-organization-idea",
 "204": "witchy-halloween-corner-stunning-cauldron-broom-lantern-decor-ideas",
 "206": "brighten-your-space-wall-sconces-flanking-a-mirror-for-stunning-cozy-ambiance",
 "208": "elegant-halloween-coffee-table-mini-pumpkins-meet-dark-floral-magic",
 "210": "transform-your-entryway-with-a-snake-plant-in-a-chic-ceramic-pot",
 "212": "low-moroccan-pouf-stunning-cozy-floor-seating-for-a-boho-home",
 "214": "spookify-your-space-halloween-gallery-wall-with-vintage-skeleton-prints-black-frames",
 "216": "spooky-bathroom-decor-stunning-black-candles-bats-halloween-artwork",
 "218": "spook-tacular-kitchen-countertop-mini-pumpkins-witchy-decor-ideas"
};
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const id = url.searchParams.get("p");
    if (id && MAP[id]) {
      return Response.redirect(url.origin + "/posts/" + MAP[id] + ".html", 301);
    }
    return env.ASSETS.fetch(request);
  }
};
