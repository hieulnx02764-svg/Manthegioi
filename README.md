# Mầm Thế Giới

## Bản 12 — Hệ sinh thái và gia đình

Mỗi nhà chứa tối đa 3 cư dân. Cư dân trưởng thành hỗ trợ thợ xây khi thiếu chỗ; khu định cư mở rộng khu nhà và dành chỗ cho trẻ em. Hai người trưởng thành cùng tộc lập gia đình, chuyển tới nhà còn chỗ, cần đủ lương thực/nước và thế giới không đang chiến tranh mới sinh con. Thai kỳ sandbox dài 1/4 ngày (5 phút ở 1×), mỗi lần sinh cách nhau tối thiểu một ngày. Em bé lưu cả hai bố mẹ và thế hệ. Luật Sinh sản vẫn điều khiển việc sinh con.

Người dân về nhà từ 19 giờ, ngủ 20–6 giờ; lính được ngủ khi không có nguy hiểm gần đó. Họ dùng thực phẩm và nước dự trữ trong nhà, khi thiếu nghiêm trọng vẫn đi tìm nguồn sống. Người chưa có nhà nghỉ gần trung tâm. Thêm hươu, thỏ và cáo: hươu theo đàn và kiếm ăn sáng/chiều; thỏ thiên về chiều tối; cáo săn thỏ ban đêm và nghỉ ban ngày. Con non theo bố mẹ, quần thể có giới hạn, sinh sản cần hai cá thể đủ trưởng thành. Hiện số cư dân ngay trên nhãn vương quốc và thêm thông tin trẻ em, nhà, chỗ ở trong bảng Vương quốc.

Giữ 1 ngày = 20 phút ở 1×, cách vẽ sprite/bản đồ, camera chuột phải và bản lưu cũ. Planner gia đình chạy mỗi10 giây, bảng dân số1 giây; dùng chung spatial index và vòng RAF có sẵn. Đã kiểm tra xây nhà thực tế, sức chứa, sinh con hai bố mẹ, ngủ/ăn/uống trong nhà, giờ loài mới, save/load, tạo thế giới, camera và lớp chiều sâu.

Asset mới: `dist/assets/ecosystem-sprites-v1.png`, tạo bằng công cụ imagegen tích hợp, RGBA1536×1024. Canvas chuẩn hóa silhouette thành atlas64px khi tải, giữ alpha. Prompt cuối: “Remove all gradient background and halos, leaving six animals on transparent alpha. Three columns deer/rabbit/fox, two rows standing facing right and curled sleeping, consistent pixel game art, no labels/grid.” Sprite nguồn được lưu trong project; code tiêu thụ tại `dist/ecosystem-family.js`.

## Bản 7.1 — Hướng đi và camera

Sửa lật sprite theo hướng gốc từng loại: cừu/sói quay trái, cư dân quay phải. Giữ chuột phải và kéo trên bản đồ để di chuyển camera bằng bất kỳ công cụ nào, không vẽ đất hoặc kích hoạt thần lực. Thả chuột hoặc hủy thao tác sẽ kết thúc kéo; chuột trái, Bàn tay và cảm ứng giữ cách thao tác hiện có.

## Bản 7 — Sinh tồn, vương quốc và khai phá

Thế giới mới có ba nền văn hóa khởi đầu: Con người, Tiên rừng và Orc. Các tộc còn lại có thể thả bằng công cụ Sự sống; nhóm ít nhất ba người cùng tộc có thể lập làng ở vùng đất mới. Mỗi vương quốc bầu vua từ người trưởng thành, ưu tiên thông thái, anh hùng và chiến công; khi vua chết, người khác kế vị.

Chiến tranh tự động bật mặc định, vẫn chịu Luật chiến tranh và Luật tự tuyên chiến. Sau thời gian đầu yên bình, mỗi 90 giây mô phỏng các vương quốc có thể gặp nhau bằng đường bộ hoặc hàng hải sẽ xét xung đột: xác suất khác tộc khoảng 57–81% mỗi lần xét, cùng tộc 7%. Tối đa hai cuộc chiến cùng lúc cho mỗi nước; có hòa ước sau tổn thất kéo dài/thiếu dân, rồi 300 giây mô phỏng hồi phục. Đây là cơ hội theo điều kiện tiếp xúc, không phải tất cả các tộc luôn giao chiến ngay.

Cư dân giữ mục tiêu di chuyển và ưu tiên tránh nguy hiểm, thức ăn, nước uống, công việc, nghỉ và trú thời tiết. Hết nước gây mất máu; giếng và mưa bổ sung nước làng. Thợ tự khai khẩn ruộng; thám hiểm và nhóm định cư có thể lập thuộc địa cùng vương quốc, tiêu hao lương thực/gỗ/đá. Tri thức lên chậm, mỗi giai đoạn cần lương thực, nhà và ruộng/công trình; xem yêu cầu trong Vương quốc. Tiến bộ: Khai hoang → Nông nghiệp → Hàng hải → Luyện kim → Tri thức.

Đường đi nhìn trước nhiều ô và đi thẳng khi hành lang trống, không dừng ở từng ô. Một bộ điều khiển giữ đích đến thay cho nhiều hệ thống giành nhau đích di chuyển. Bước chân và hướng sprite theo chuyển động; đường, thiên phú nhanh nhẹn được áp dụng trong cùng bước mô phỏng. Lưu v7 giữ nước/culture/hòa ước, tiếp tục đọc v1–v6; giữ ngày 20 phút ở 1×.

## Bản 6 — Chuyển động và sinh hoạt

Vẽ theo nhịp màn hình, mô phỏng bước cố định 1/30 giây và nội suy vị trí cư dân. Sinh vật tăng/giảm tốc nhẹ, chuyển hướng mềm hơn, có nhịp nghỉ khi đi dạo và chỉ nhún bước lúc đang di chuyển; bản đồ/cây/quặng/đường được lưu trên canvas phụ, đường đi và mục tiêu công việc được dùng lại. Mưa, tuyết, lửa và hiệu ứng quyền năng dùng thời gian hình ảnh riêng để không bị tua mất ở tốc độ 5×. Hiệu suất thực tế tùy thiết bị và quy mô thế giới.

Cư dân làm việc từ 6–18 giờ, nghỉ 18–21 giờ, ngủ 21–6 giờ, hồi thể lực khi nghỉ và giảm năng suất khi mệt. Chiến binh tiếp tục phòng thủ; nhập thể ưu tiên điều khiển của người chơi. Chọn cư dân để xem thể lực và đổi một trong sáu nghề. Game giữ ba bản tự lưu luân phiên mỗi hai phút khi trang đang mở; vào bảng Tải thế giới → Mở bản tự lưu dự phòng. Lưu v6 giữ sinh hoạt; đọc được v1–v5. Một ngày vẫn bằng 20 phút ngoài đời ở 1×.

## Bản 5 — Đồng hồ chậm

Ở 1×, 1 ngày trong game = 1.200 giây (20 phút) ngoài đời đang chạy game. Năm có 365 ngày; xuân 91 ngày, hạ 92 ngày, thu/đông 91 ngày. Tuổi cư dân, mùa, năm sự kiện và đồng hồ dùng lịch này. Thời tiết kéo dài khoảng 2–6 giờ trong game thay vì vài giây; tần suất sét giảm tương ứng. Nút 2×/5× tăng tốc cả mô phỏng và đồng hồ, tạm dừng đóng băng thời gian; đóng game không tự chạy bù. Lưu v5 giữ đồng hồ, tải v1–v4 giữ năm đang có và chuyển sang lịch chậm.

## Bản 4 — Mùa và thiên mệnh

Thời tiết tự nhiên đổi ngẫu nhiên trong ba vùng trên bản đồ, theo mùa: xuân nhiều mưa, hè trời quang/nóng/giông, thu mây/gió/mưa, đông tuyết. Dùng lịch hiện có: 5 giây mỗi mùa, 20 giây mỗi năm mô phỏng. Vùng thời tiết dịch chuyển, có mưa/tuyết và biểu tượng trên bản đồ; mưa dập lửa/tăng sinh trưởng, đông giảm sinh trưởng, lạnh làm giảm sức khỏe người không trú nhà, nóng tăng đói. Giông đôi khi giáng sét. Luật Thiên tai tắt tổn thương tự nhiên và sét; bảng Thời tiết cho tắt thời tiết ngẫu nhiên.

Mỗi cư dân có một trong tám thiên phú: khai thác, canh tác, nghiên cứu, chữa lành, hộ vệ, chịu lạnh, chịu nóng, bước chân gió. Mỗi thiên phú tác động thật đến mô phỏng. Cư dân sinh ra có cơ hội hiếm (2,5%, tối đa ba anh hùng cùng lúc) được trời chọn. Thế giới mới/bản lưu cũ có một anh hùng khởi đầu nếu có người trưởng thành. Anh hùng có dấu sao vàng, tăng sát thương/kháng đòn, hồi phục cư dân gần họ; chiến công và chữa lành tăng kinh nghiệm/cấp (tối đa 10). Có danh sách anh hùng và nút tìm trên bản đồ. Thiên phú có cơ hội kế thừa; thiên mệnh anh hùng không tự động kế thừa.

Lưu v4 chứa thời tiết, thiên phú, anh hùng/cấp/kinh nghiệm. Vẫn mở được v1/v2/v3. Kiểm tra riêng: phân bố thời tiết bốn mùa; mưa/dập lửa/sinh trưởng; lạnh/nóng/miễn nhiễm; luật thiên tai; năng suất khai thác, chữa lành, kháng đòn, tăng cấp; bản lưu v3 sang v4, lưu/tải và từ chối dữ liệu lỗi; 240 giây mô phỏng qua 12 năm.

Bản 3.1 thêm hình sprite tương ứng cho các tộc, quặng, công trình trong thanh công cụ và bảng Kinh tế; công cụ, vũ khí, giáp có biểu tượng riêng. Nhà nghiên cứu có huy hiệu sách để phân biệt với kho. Giữ nguyên bản lưu v3 và cơ chế mô phỏng.

## Bản nâng cấp 3 — Kỷ nguyên khai khoáng

- Thêm Goblin và Tộc Thú, nâng tổng số tộc lên sáu. Goblin khai thác nhanh, Tộc Thú canh tác nhanh. Hai tộc có hình riêng và đặc tính mới.
- Sáu mạch khoáng sản hữu hạn: đá, than, sắt, đồng, vàng và tinh thể. Thợ mỏ tìm đường, khai thác, mang hàng về làng; kho đầy giữ lại hàng dư. Người chơi đặt thêm mạch quặng bằng nhóm Khoáng sản hoặc xem trữ lượng bằng Thăm dò.
- Sáu nghề: thợ mỏ, tiều phu, nông dân, thợ rèn, thương nhân và thợ xây. Nghề được phân lúc sinh; thợ rèn vận hành tự động lò rèn, thương nhân mở trao đổi khoáng sản và thợ xây cho phép làng tự xây công trình.
- Tám công trình có chi phí vật liệu: mỏ, kho hàng, lò rèn, chợ, tháp canh, giếng, nhà cá và nhà nghiên cứu. Nhà ở dùng thêm đá. Mỏ tăng tốc/phạm vi khai thác, kho tăng sức chứa, giếng hồi phục, nhà nghiên cứu tăng tri thức, tháp gây sát thương quân địch và nhà cá tạo thức ăn gần biển. Công trình cháy hoặc ngập bị phá hủy.
- Rèn công cụ, vũ khí và giáp bằng sắt/than/gỗ. Tự cấp trang bị; công cụ tăng sản lượng, vũ khí tăng sát thương 25%, giáp giảm sát thương 25%. Vàng và tinh thể dùng trong nhà nghiên cứu; chợ trao đổi khoáng sản trong hòa bình.
- Đường tăng tốc di chuyển. Bảng Kinh tế hiển thị nguyên liệu, nghề, công trình, công thức; cho chọn ưu tiên phát triển và bật/tắt tự xây. Lưu v3 giữ quặng, hàng vận chuyển, nghề, trang bị và công trình; mở được bản lưu v1/v2.

Kiểm tra v3: hai tộc mới, di chuyển hàng/khai thác cạn và bảo toàn vật liệu, kho đầy, công thức rèn, tác dụng giáp, thiếu vật liệu không thay đổi trạng thái, thương mại/hòa bình/chiến tranh, bản lưu v2 sang v3, lưu/tải v3, dữ liệu lỗi bị từ chối và mô phỏng 200 giây tự xây. Đã kiểm tra giao diện máy tính và màn hình 390×844.

Chạy offline: mở `dist/index.html`. Mọi asset nằm trong `dist/assets`; không cần cài thư viện. Phiên bản này vẫn là game chơi đơn giới hạn 350 sinh vật. Chưa có multiplayer, liên minh, cây văn hóa/gia tộc hoàn chỉnh hoặc toàn bộ nội dung của WorldBox.

`dist/assets/economy-sprites.png`: atlas RGBA 1254×1254 tạo bằng imagegen tích hợp, chia 4×4 ô đều. Thứ tự hàng: (1) Goblin, Tộc Thú, sắt, than; (2) đồng, vàng, tinh thể, đá; (3) mỏ, lò rèn, kho, chợ; (4) tháp canh, giếng, nhà cá, xe hàng. Prompt: Original production sprite atlas for Vietnamese top-down god sandbox Mầm Thế Giới. ONE square 1024×1024 RGBA image, transparent background, exactly 16 separate sprites in regular invisible 4×4 equal-cell layout. Generous transparent margins. Crisp stepped pixel art, hard square pixels, consistent 3/4 overhead camera, emerald/cyan/warm bronze/gold palette. Row1 blue-gray goblin miner with large ears and pickaxe, amber fox beastfolk villager wearing tunic with visible tail, silver iron ore, black coal. Row2 copper ore, gold ore, violet crystal, gray stone. Row3 timber mine, stone forge with orange chimney, warehouse with crates, market stall. Row4 watchtower, well, fishing hut with nets, merchant cart. Complete isolated silhouettes, no overlap, grid lines, labels, text or watermark.

## Bản nâng cấp 2 — Kỷ nguyên thần linh

- Ba vương quốc khởi đầu trên quần đảo hoặc lục địa, bầu vua và kế vị khi vua chết.
- Tuyên chiến và lập hòa ước. Quân đội tìm đường quanh núi, giao chiến, thống nhất lãnh thổ khi đối phương không còn cư dân. Hàng hải cho phép quân đội đi qua biển với hình thuyền.
- Năm giai đoạn công nghệ. Nông nghiệp tăng thức ăn, hàng hải mở vượt biển, luyện kim tăng sát thương; thông thái tăng nghiên cứu. Các làng gần nhau trao đổi lương thực khi hòa bình.
- Con người, tiên rừng, người lùn và orc; ba chủng loài mới có hình pixel riêng. Bảy đặc tính, một số được thừa hưởng từ cha/mẹ, theo dõi thế hệ.
- Tên thần, tín ngưỡng, danh tiếng bảo hộ/hủy diệt, đền thờ, lời cầu nguyện và biên niên 120 sự kiện. Cư dân tăng/giảm niềm tin theo hành động của người chơi.
- Ban phước, nguyền rủa, sứ giả, mùa bội thu, dịch bệnh và thanh tẩy. Chế độ vô hạn bật mặc định; tắt trong bảng Thần để dùng tín ngưỡng.
- Bảy luật: sinh sản, già đi, chiến tranh, săn mồi, thiên tai, dịch bệnh, tự tuyên chiến.
- Nhập vai cư dân: chọn Khám phá/Nhập vai, chạm người, bấm Nhập vai, đi bằng WASD/phím mũi tên hoặc nút cảm ứng. Bấm Rời để trở lại.
- Lưu v2 chứa toàn bộ hệ thống mới; tải được v1. Bản lưu lỗi bị từ chối trước khi thay thế thế giới.

Kiểm tra v2: lập vương quốc và vua, kế vị, kế thừa bản lưu v1, tiến bộ công nghệ, luật già đi và sinh sản, đáp lời cầu nguyện, trừ tín ngưỡng/thiếu tín ngưỡng, bệnh/thanh tẩy, v2 round-trip, từ chối bản lưu lỗi, sát thương chiến tranh/hòa bình/luật chiến tranh, tìm đường trên đất và biển, nhập vai và rời nhập vai. Các phép thử chạy trên mô phỏng độc lập; UI cũng được kiểm tra trong trình duyệt.

`dist/civilization.js` thêm mô phỏng và giao diện mới; `dist/assets/civil-sprites.png` là atlas RGBA 1254×1254, 2×2 ô (tiên rừng, người lùn, orc, đền thờ), tạo bằng imagegen tích hợp. Prompt: Create one original transparent 1024×1024 pixel-art atlas for Mầm Thế Giới, strict equal 2×2 cells: top-left slender pointed-ear elf with emerald cloak; top-right stocky red-brown-bearded dwarf with mining hammer; bottom-left muscular green orc with leather armor; bottom-right compact warm-stone temple with golden sacred crystal. Charming crisp stepped pixel art, coherent emerald/cyan and warm gold palette, consistent 3/4 overhead camera facing lower right, centered complete isolated sprites, generous transparent gutters, no scene, text, grid, borders, or watermark.

Đây là một đợt nâng cấp chức năng, chưa đạt toàn bộ hệ thống của WorldBox. Chưa có văn hóa/gia tộc đầy đủ, ngoại giao liên minh, kho trang bị, quái vật đa dạng, bản đồ lớn, nhiều người chơi hay ứng dụng native. Mô phỏng còn giới hạn 350 sinh vật và dùng lại bộ nhà hiện tại.

Game sandbox pixel chơi đơn, giao diện tiếng Việt, chạy trên trình duyệt PC, Android, iOS và tablet. Bản web chưa phải ứng dụng được phát hành trên App Store/Google Play.

## Chơi
Mở `dist/index.html` trực tiếp bằng trình duyệt, hoặc chạy `python -m http.server 8765 --directory dist` và mở http://localhost:8765. Toàn bộ hình ảnh và mã nằm trong thư mục dist, không cần thư viện ngoài.

Chọn Địa hình / Sự sống / Thiên tai rồi chạm hoặc kéo trên bản đồ. Bàn tay để di chuyển; dùng nút +/−, con lăn hoặc hai ngón tay để thu phóng. Trong nhóm Sự sống, chọn Khám phá để xem sinh vật. Space tạm dừng; 1/2/3 đổi tốc độ; H chọn Bàn tay.

Lưu trên thiết bị bằng localStorage, hoặc xuất/nhập JSON để chuyển thiết bị. Bản lưu không tự đồng bộ qua mạng. Nút Thế giới mới có quần đảo, lục địa và đại dương trống; cùng hạt giống tạo cùng bản đồ.

## Có trong phiên bản này
- 112 × 80 ô địa hình: đất, biển, cát, rừng, núi, ruộng lúa và bụi quả.
- Cư dân kiếm ăn, lập làng, dựng và nâng cấp nhà, sinh con và già đi.
- Cừu ăn cỏ, sinh sản; sói săn cừu và cư dân.
- Sét, lửa lan, thiên thạch tạo hồ, mưa dập lửa, hồi phục và xóa.
- 1× / 2× / 5×, theo dõi dân số, làng, cây xanh và nhật ký.
- Giới hạn 350 sinh vật; vẽ tối đa khoảng 30 khung hình/giây để giảm tải điện thoại.

Phần cơ chế cơ bản dưới đây được giữ lại từ v1. V2 bổ sung chiến tranh, ngoại giao và công nghệ như mô tả ở đầu tài liệu. Chưa có nhiều người chơi, ứng dụng native hay phát hành lên cửa hàng; chưa kiểm thử trên thiết bị Android/iOS thật.

## Hình ảnh
`dist/assets/sprites.png`: atlas PNG trong suốt 1254 × 1254, 4 × 4 ô. 16 hình gốc: cây lá rộng, thông, núi, bụi quả; người áo xanh, người áo đỏ, cừu, sói; nhà tranh, nhà gỗ, nhà cộng đồng, lúa; lửa, thiên thạch, thuyền, quặng vàng. Thuyền và quặng được cung cấp trong atlas, chưa có cơ chế riêng trong bản này.

Tạo bằng công cụ imagegen tích hợp. Prompt: Original pixel-art game sprite atlas for top-down 2D sandbox Mầm Thế Giới. Square 1024×1024 transparent PNG, exactly four columns and four rows of invisible equal cells. Each sprite centered, fully isolated with roomy margins. Row 1: broadleaf tree, emerald pine, gray mountain, berry bush. Row 2: blue-tunic human, red-tunic human, white sheep, gray wolf. Row 3: thatched cottage, coral-roof timber house, stone town hall, golden wheat patch. Row 4: orange flame, glowing meteor, wooden boat, gold ore. Crisp stepped pixel art, consistent overhead three-quarter perspective, emerald/cyan natural palette and warm coral houses. No grid, text, labels, watermarks, overlapping objects or environmental scene.

## Mã nguồn
`dist/game.js`: bản đồ, mô phỏng, vẽ canvas, input, lưu/tải và các công cụ WebMCP có kiểm tra hỗ trợ.
`dist/style.css`: bố cục desktop và cảm ứng.
`dist/index.html`: giao diện và hộp thoại.

Kiểm tra: cú pháp JavaScript; hạt giống tái tạo bản đồ; làng xây nhà sau 100 giây; dữ liệu mô phỏng hữu hạn; giới hạn số sinh vật; lưu/tải round-trip; tệp sai bị từ chối mà không thay thế thế giới; thiên thạch; lửa/mưa; tạo đất và thả người trên đại dương trống.


## Bản 8 — Quan sát thế giới
- Bản đồ nhỏ có thể chạm hoặc kéo để đổi góc nhìn.
- Tổng quan: tìm cư dân theo tên/tộc, lọc vua, anh hùng và người cần trợ giúp.
- Theo dõi camera từng sinh vật; kéo chuột phải hoặc xem toàn bản đồ để dừng.
- Ánh sáng bình minh, hoàng hôn, ban đêm và ánh đèn quanh nhà.
- Tương thích bản lưu thế giới phiên bản 7; một ngày vẫn bằng 20 phút ở tốc độ 1×.

## Bản 8.1 — Hiệu ứng quyền năng
- 13 hiệu ứng riêng cho thiên tai và phép thần: tia sét, thiên thạch rơi, sóng nổ, giọt mưa, hạt sáng và lời nguyền.
- Hiệu ứng chạy theo thời gian thực kể cả khi tạm dừng; giới hạn 48 hiệu ứng và gộp điểm thả quá gần khi kéo cọ.
- Bản lưu thế giới vẫn tương thích phiên bản 7.

## Bản 8.2 — Tập tính sinh vật
- Cừu theo đàn, ăn cỏ, ngủ ban đêm và tránh sói đang săn.
- Sói săn khi đói, ăn sau khi hạ con mồi, nghỉ sau bữa ăn và bỏ cuộc khi đuổi quá lâu.
- Cư dân tránh lửa, ăn uống đủ hơn, nghỉ dưỡng thương và trò chuyện ngắn vào ban ngày.
- Trẻ nhỏ theo người lớn và chơi gần nhà; sinh vật có mục tiêu ổn định hơn.
- Tương thích bản lưu thế giới phiên bản 7.

## Bản 9 — Môi trường và thời kỳ
- Than đá → Jura → Phấn trắng → Băng hà → Holocen; thời kỳ tự chuyển sau 30 ngày trong game hoặc chọn trực tiếp bằng quyền năng.
- Giữ lối chơi làm chúa; các tộc, vua, làng, công nghệ và chiến tranh tiếp tục tồn tại khi đổi thời kỳ.
- Sáu vùng môi trường có cọ vẽ riêng, thay đổi cây cối, khí hậu và tốc độ mọc thức ăn.
- Sáu sinh vật cổ đại có hình pixel riêng: Stegosaurus, Triceratops, hai khủng long săn mồi, voi ma mút và thú răng kiếm.
- Vỉa than hữu hạn và hóa thạch khám phá bằng cọ hoặc khi thợ mỏ làm việc.
- Bản lưu thế giới phiên bản 8; hỗ trợ tải bản cũ. Một ngày vẫn bằng 20 phút ở 1×.
- Tham khảo trình tự địa chất: https://pubs.usgs.gov/gip/geotime/divisions.html; Triceratops: https://www.nhm.ac.uk/discover/dino-directory/triceratops.html. Thời gian và sự cùng tồn tại của cư dân là quy tắc sandbox.


## v9.1 — Hiệu ứng môi trường
Gợn nước, cây và lá lay nhẹ, bụi chân, vệt nước khi đi thuyền, khói và tàn lửa, tia va chạm khi chiến đấu. Hiệu ứng dùng thời gian hình ảnh, không dùng bộ sinh ngẫu nhiên của mô phỏng. Có ba mức Tắt/Nhẹ/Đầy đủ; lưu lựa chọn trên trình duyệt. Cảnh ngoài màn hình được bỏ qua, hiệu ứng lửa và va chạm có giới hạn. Giữ nguyên đồng hồ, tập tính, thế giới và định dạng lưu v8.


## v9.2 — Asset đồng bộ
Làm lại các atlas cây, nhà, cư dân, động vật, sáu tộc và kinh tế bằng ImageGen; thêm bộ khủng long, thú cổ đại, cây dương xỉ và xương rồng. Giữ đúng thứ tự ô sprite, hướng nhìn và nền trong suốt. Chuẩn bị atlas 64 px/ô một lần và lọc khi thu nhỏ để hình không bị lấy mẫu thành những chấm rối. Cây cổ đại dùng cùng phong cách với các asset còn lại. Lưu thế giới v8, cơ chế và đồng hồ giữ nguyên. Bộ hình cũ còn nguyên để tham chiếu.


## v10 — Sinh hoạt và lao động
Cư dân đi vào nhà để ngủ từ 20h đến 6h, mỗi nhà 8 chỗ; người ở trong nhà được ẩn khỏi map và có dấu trăng/số người ngủ trên mái. Sáng thức dậy tiếp tục công việc. Đói, khát, cháy và nguy hiểm ngắt công việc; không lao động khi ngủ. Gỗ chỉ có từ cây bị chặt và gùi về làng, bỏ tăng gỗ thụ động. Gieo ruộng, thu hoạch hữu hạn, câu cá tại nhà cá, rèn ở lò, nhà xây qua tiến độ và tiêu nguyên liệu. Cây mọc lại sau hai ngày nếu đất còn phù hợp. Trẻ dưới 16 tuổi không lao động; học theo người lớn, tay nghề tăng nhờ việc làm. Đường mòn hình thành khi cư dân thường đi qua; tách nhẹ khi di chuyển để giảm chồng hình. Động vật có khát/thể lực, nơi nghỉ, chọn con mồi theo loài, con non theo mẹ; thú lớn có thể tự vệ. Tham khảo video người dùng gửi: làng/ruộng/nhà/đường phát triển dần và di chuyển có mục đích; không sao chép asset video.

Bản lưu v9 lưu nhà được phân, hàng đang mang, tiến độ cây và công trình, tay nghề và nhu cầu sinh vật; nhận bản cũ v1–v8, kiểm tra dữ liệu trước khi thay thế thế giới. Một ngày vẫn là 1200 giây ở 1×. Kiểm tra: living-test.cjs, living-cycle-test.cjs (>=20/24 cư dân vào nhà ban đêm; ngày có 30 cây chặt, 23 ô đường mòn), các kiểm tra tập tính, thời kỳ, chuột phải và hướng sprite.

## v10.1 — Animation mềm hơn
Bỏ cắt hai mảnh chân rời. Dùng các dải ảnh chồng nhẹ để uốn dáng liên tục; bước chân theo quãng đường, giảm nhún thân, thêm nhịp thở. Chuyển đi/đứng/lao động được làm dịu bằng trạng thái hình ảnh riêng, không ghi vào bản lưu. Rìu/búa có nhịp lấy đà và đánh; liềm, gieo hạt, câu cá có hình và nhịp riêng. Gùi đồ đung đưa nhẹ. Giữ nguyên sinh hoạt, tài nguyên và đồng hồ.

## v10.2 — Chiều sâu và tránh vật thể
Cây, quặng, nhà, công trình và sinh vật cùng xếp theo điểm tiếp đất. Sinh vật ở sau vật thể được che đúng, khi đi ra trước hiện lại; cây lay vẫn đi cùng lớp chiều sâu. Cache chỉ chứa nền, đường và dấu hóa thạch. Động vật tránh gốc cây, đá, nhà và công trình; kích thước thú lớn có khoảng cách rộng hơn. Không chặn cửa nhà của cư dân. Không đổi bản lưu và thời gian.

## v10.3 — Tạo thế giới
Tách kiểu map đang chọn trong hộp thoại khỏi thế giới chạy; đóng hộp không làm đổi dữ liệu bản lưu. Mở hộp đồng bộ kiểu map và thời kỳ hiện tại. Enter trong ô hạt giống tạo thế giới; chặn tạo lặp và khôi phục thế giới trước nếu tạo bị lỗi, hiển thị thông báo trong hộp. Tiêu đề hiển thị loại map và hạt giống thật. Kiểm tra 45 tổ hợp map/thời kỳ/seed, tạo liên tiếp và lưu/tải; kiểm tra nút trên trình duyệt. Không tái hiện lỗi tạo ban đầu với các tổ hợp này.

## v10.4 — Sửa lỗi tích hợp
Hàm tìm làng nhận cả tọa độ (x,y) lẫn sinh vật: sửa xây công trình bằng quyền năng. Thả người không thành công không làm đổi tộc/tuổi người có sẵn. Sói không đánh con mồi không phù hợp hoặc người đã vào nhà; cư dân đang trú trong nhà không tự chạy ra khi sói gần đó. Tộc goblin/beastkin chỉ gia nhập làng phù hợp ở gần và trả lại tộc mặc định sau khi thả. Cờ sinh con luôn được khôi phục khi mô phỏng báo lỗi; không vẽ hàng hoặc chữ ngủ của cư dân đang đi/ở trong nhà.

Đường đi của động vật xét gốc cây và nhà thay vì chỉ xét địa hình; tìm đường vòng cục bộ có giới hạn để tránh kẹt vào vật thể. Cư dân đổi nghề khi đang mang quặng vẫn mang về kho trước khi làm nghề mới. Kiểm tra hồi quy các lỗi này và mô phỏng 1600 giây với lưu/tải định kỳ.

## Bản 11 — Liên minh và đoàn hàng

Giữ nguyên bản đồ, sprite, sinh hoạt và thời gian 20 phút/ngày của v10.4. Thêm nút Đời sống: điều khiển liên minh, mở/đóng giao thương và xem quan hệ giữa các nước. Giao hàng thành công cải thiện quan hệ; những nước giao thương nhiều có thể tự liên minh. Liên minh ngăn tự tuyên chiến, nhưng mệnh lệnh của người chơi vẫn có hiệu lực.

Giao thương cũ chuyển sang đoàn hàng có hàng hóa hữu hạn: trừ kho lúc xuất phát, tìm đường bộ/hàng hải, chỉ cộng kho khi đến nơi, hoàn hàng khi bị đình chỉ hoặc đường bị chặn. Chợ, thương nhân đang làm việc, kho nhận có chỗ và điều kiện ngoại giao quyết định chuyến đi. Có tối đa 24 đoàn, dùng pool tái sử dụng, di chuyển nội suy và vẽ theo thứ tự chiều sâu của vật thể hiện có.

Biên niên ghi các mốc dân số, tiến bộ công nghệ, thiếu lương thực, giao hàng và liên minh. Bản lưu phiên bản 10 giữ trạng thái ngoại giao/đoàn hàng và tiếp tục đọc bản lưu cũ. Kiểm tra đường bộ/hàng hải, hoàn hàng, liên minh/tuyên chiến, lưu/tải chính xác, nhập dữ liệu sai, tạo thế giới và các lỗi hồi quy của v10.4 đã qua.

## Bản 11.1 — Các tộc tự đặt tên vương quốc

Khi lập quốc, người trưởng thành của mỗi tộc chọn một tên riêng theo văn hóa; tên duy nhất được lưu trong thế giới và giữ nguyên khi vua kế vị. Các tộc có bộ âm tên khác nhau. Thủ phủ dùng tên vương quốc, các khu khai phá tiếp tục thuộc nước mẹ; không còn tên Làng Lá/Nắng/Mây cố định. Khi tải bản cũ, tên mẫu được chuyển sang tên riêng, giữ lại tên người chơi đã đặt. Số đếm bên cạnh bản đồ hiển thị số vương quốc đang có cư dân. Kiểm tra tên theo tộc, tính duy nhất, lưu/tải, kế vị, lập quốc độc lập và mở rộng lãnh thổ đã qua.
