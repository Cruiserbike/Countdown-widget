<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Countdown AEST</title>
  <style>
    body { margin: 0; font-family: Arial, sans-serif; background:#0b1220; color:#fff; }
    .wrap { padding: 18px; width: 520px; box-sizing: border-box; }
    .row { display:flex; gap:10px; align-items:baseline; }
    .box { background:#121c33; padding:10px 12px; border-radius:12px; min-width:70px; text-align:center; }
    .num { font-size:36px; font-weight:700; line-height:1; }
    .lbl { font-size:12px; opacity:.8; margin-top:6px; letter-spacing:.3px; }
    #meta { margin-top:12px; font-size:14px; opacity:.95; }
    code { background:#0f1730; padding:2px 6px; border-radius:6px; }
  </style>
</head>
<body>
  <div class="wrap">
    <div class="row">
      <div class="box"><div id="d" class="num">0</div><div class="lbl">DAYS</div></div>
      <div class="box"><div id="h" class="num">00</div><div class="lbl">HRS</div></div>
      <div class="box"><div id="m" class="num">00</div><div class="lbl">MIN</div></div>
      <div class="box"><div id="s" class="num">00</div><div class="lbl">SEC</div></div>
    </div>
    <div id="meta"></div>
  </div>

  <script src="./script.js"></script>
</body>
</html>
