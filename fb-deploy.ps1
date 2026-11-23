$env:Path = 'C:\Program Files\nodejs;' + $env:Path
npx --yes firebase-tools@15.37.0 deploy --only hosting --project golden-coast-web --non-interactive
