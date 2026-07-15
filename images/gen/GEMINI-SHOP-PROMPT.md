# Pets + Hats — sticker sheet (4×6)

Shop dùng **6 pets + 6 hats** cắt từ `images/gen/hats-pets-sheet.png`.

## Build

```bash
node scripts/build-gen-assets.mjs
```

Sheet 4 hàng × 6 cột → `images/gen/hats-pets/*.png` → map sang `hat-*.png` / `pet-*.png`.

## Map shop (id file game)

| Shop file | From sheet | Tên shop |
|---|---|---|
| `hat-party` | rainbow bow | Rainbow Bow |
| `hat-flower` | rainbow flower crown | Blossom Crown |
| `hat-sunglasses` | rainbow sunglasses | Glass Shades |
| `hat-cowboy` | constellation fedora | Golden Hat |
| `hat-propeller` | planet beanie | Starlight Cap |
| `hat-tophat` | royal crown | Royal Crown |
| `pet-butterfly` | rainbow butterfly | Flutter |
| `pet-bird` | rainbow bunny | Cotton |
| `pet-cat` | orange cat | Mittens |
| `pet-puppy` | puppy | Biscuit |
| `pet-bee` | rainbow bee | Buzz |
| `pet-dragon` | purple dragon | Sparky |

Các ô còn lại trong sheet (wizard hat, helmets, panda, unicorn, …) nằm trong `hats-pets/` để dùng sau.

Chưa có PNG thì shop fallback SVG dựng sẵn.
