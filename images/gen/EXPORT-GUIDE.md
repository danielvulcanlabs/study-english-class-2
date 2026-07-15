# Hướng dẫn export ảnh AI (Canva) vào app

App đã được wire sẵn: chỉ cần bỏ file PNG đúng tên vào thư mục **`images/gen/`** này là
nó tự hiện trong Bag + Shop. Thiếu file nào thì app tự dùng icon SVG dựng sẵn (không vỡ).

## Cách export mỗi icon
1. Mở link Canva bên dưới (mỗi vật phẩm có 4 phương án — chọn cái đẹp nhất).
2. Trong Canva: **Share → Download → File type: PNG**.
3. Bật **Transparent background** (⚠️ cần Canva Pro). Nếu không có Pro, ảnh sẽ có nền —
   khi đó nên tự xoá nền, hoặc cứ để app dùng icon SVG (đẹp + trong suốt sẵn).
4. Lưu đúng **tên file** ghi bên dưới, bỏ vào thư mục `images/gen/`.
5. Mở lại `index.html` → vào Bag / Shop để xem.

---

## COLLECTIBLE ITEMS (9) — hiện trong Bag + khi nhặt trên đường

| Tên file cần lưu | Phương án Canva (chọn 1) |
|---|---|
| `item-apple.png`      | https://www.canva.com/d/XLqeZaErx1_ffhf · https://www.canva.com/d/5AUSHLNWgTtlOC7 · https://www.canva.com/d/eFIibubVm5XT8S1 · https://www.canva.com/d/dHaTzpqGIS623nV |
| `item-acorn.png`      | https://www.canva.com/d/mGVl8GoGPTj64Yn · https://www.canva.com/d/yL1Z3qUQ4Xm0O3d · https://www.canva.com/d/et1YofqJJtUm-zs · https://www.canva.com/d/rBi6CLHNH-yNmq7 |
| `item-mushroom.png`   | https://www.canva.com/d/mEK_QQtCp48g8Dz · https://www.canva.com/d/cHsXs5g7-edjlwq · https://www.canva.com/d/xiGy4D24fURhQAL · https://www.canva.com/d/x1JVMv21MHeD9ZW |
| `item-strawberry.png` | https://www.canva.com/d/qDBl9vKyDw5dnTC · https://www.canva.com/d/yOjbECK2kCHq4gj · https://www.canva.com/d/xp_A5ZmH7zhfze0 · https://www.canva.com/d/JSv1tFEpkSZMJu5 |
| `item-ribbon.png`     | https://www.canva.com/d/BK7nQzr_KqqN-xe · https://www.canva.com/d/mtIgOqW47Q88Fzk · https://www.canva.com/d/os9pm7TYCH5cVLT · https://www.canva.com/d/IhcuD3CUJ0a0lGl |
| `item-blossom.png`    | https://www.canva.com/d/H1luB4xI7CCnpFo · https://www.canva.com/d/yaY311p5O8YXzj4 · https://www.canva.com/d/3uoWJpzFznCYdE7 · https://www.canva.com/d/DcAToeoKlYmJNuR |
| `item-honey.png`      | https://www.canva.com/d/e2yprVO0bICGARG · https://www.canva.com/d/zNhxvGvazPxd_Sm · https://www.canva.com/d/kDWG09znGIptq1G · https://www.canva.com/d/LVB6v2wBqXAjy5p |
| `item-puzzle.png`     | https://www.canva.com/d/6RaUEOjWZEzJy6O · https://www.canva.com/d/gz7vrt3F3owzZJP · https://www.canva.com/d/bC6Zcotp2CmsyRM · https://www.canva.com/d/ew8tiUNihjYJHPY |
| `item-gem.png`        | https://www.canva.com/d/jdxpcuNxjSzFGzJ · https://www.canva.com/d/7zLYdDF-dATzVnO · https://www.canva.com/d/ceXtuaQCbDOCZa7 · https://www.canva.com/d/tSlFjWDkxflNY3J |

## SHOP (mới gen được 1/15 — còn lại bị Canva quota chặn)

| Tên file cần lưu | Phương án Canva |
|---|---|
| `skin-wizard.png` | https://www.canva.com/d/1sK-VTln1_Dxux9 · https://www.canva.com/d/zti1UUvhDvRkfhZ · https://www.canva.com/d/llj5ozZaLXOYpxH · https://www.canva.com/d/X0F56OxIZ70bqD9 |

### 14 shop items chưa gen (chờ Canva quota reset hoặc Pro) — tên file khi có:
skins: `skin-astronaut.png`, `skin-royal.png`, `skin-ninja.png`, `skin-rainbow.png`
decor: `decor-rainbow.png`, `decor-castle.png`, `decor-balloons.png`, `decor-pine.png`
badges: `badge-medal.png`, `badge-gem.png`, `badge-heart.png`
boosters: `boost-hint.png`, `boost-skip.png`, `boost-x2.png`

> Chưa có file nào trong số này thì app tự hiển thị icon SVG dựng sẵn — vẫn đẹp và đồng nhất.
