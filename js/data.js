/* ============================================================
   CHARMIE SPIRITUS — Databases (Articles & Recipes)
   ============================================================ */

const ARTICLES = {
  "balance": {
    category: "Nền tảng · 6 phút đọc",
    title: "Điều gì làm nên một ly cocktail cân bằng?",
    content: `
      <p>Hãy tưởng tượng bạn đang uống một ngụm chất lỏng buốt lạnh. Đầu tiên là vị ngọt mềm mại lướt qua đầu lưỡi, tiếp đó là vị chua rực rỡ bừng sáng hai bên má, rồi vị nồng nàn cay ấm của cồn lan tỏa trong lồng ngực, đọng lại chút đắng dịu ở cuống họng. Đó chính là sự kỳ diệu của một ly cocktail cân bằng.</p>
      <h3>Tứ Trụ Vị Giác</h3>
      <p>Một ly cocktail hoàn hảo được xây dựng trên bốn trục cơ bản:</p>
      <ul>
        <li><strong>Mạnh (Spirit/Alcohol):</strong> Rượu nền làm xương sống cho ly nước (Gin, Whisky, Rum...). Cồn mang lại cấu trúc và hơi ấm.</li>
        <li><strong>Chua (Acid/Sour):</strong> Nước cốt chanh xanh, chanh vàng hoặc các loại quả chứa axit. Nó tạo lực đẩy tươi tắn, cân bằng vị ngọt.</li>
        <li><strong>Ngọt (Sweet):</strong> Syrup đường, mật ong, liqueur trái cây. Nó làm dịu vị cồn gắt và kết dính các hương vị khác.</li>
        <li><strong>Đắng/Thơm (Bitter/Aroma):</strong> Bitters thảo mộc, tinh dầu vỏ cam quýt, các loại thảo mộc tươi. Chúng mang lại chiều sâu huyền bí, giúp ly cocktail biến chuyển tinh tế từ ngụm đầu đến hậu vị.</li>
      </ul>
      <blockquote>"Một ly cocktail mất cân bằng giống như một dàn nhạc thiếu người chỉ huy — nhạc cụ nào cũng kêu rất to nhưng không thể tạo thành bản nhạc."</blockquote>
    `
  },
  "ice": {
    category: "Nền tảng · 5 phút đọc",
    title: "Đá không phải để làm loãng rượu",
    content: `
      <p>Đá là nguyên liệu bị đánh giá thấp nhất trong pha chế tại nhà. Người mới bắt đầu thường nghĩ đá chỉ đơn giản là để làm lạnh, và việc cho nhiều đá sẽ làm nhạt ly nước. Thực tế hoàn toàn ngược lại.</p>
      <h3>Vai Trò Kép Của Đá: Làm Lạnh & Pha Loãng</h3>
      <p>Đá tan ra (dilution) là một phần thiết yếu của công thức. Nó giúp cồn dịu lại và mở khóa các nốt hương ẩn sâu trong rượu mạnh. Tuy nhiên, tốc độ tan đá phải được kiểm soát tuyệt đối:</p>
      <ul>
        <li><strong>Đá nhỏ, đá bi:</strong> Bề mặt tiếp xúc lớn, tan cực nhanh. Dùng đá này lắc hay khuấy sẽ khiến nước đá tan ra ồ ạt trước khi rượu kịp lạnh sâu. Ly cocktail của bạn sẽ nhạt như nước lọc.</li>
        <li><strong>Đá khối lớn (Clear Ice Block):</strong> Bề mặt tiếp xúc nhỏ, tan rất chậm. Nó làm lạnh ly cocktail từ từ và giữ độ lạnh sâu mà không làm loãng rượu quá nhanh.</li>
      </ul>
      <blockquote>"Quy tắc vàng: Luôn sử dụng đá viên to, cứng, được đông sâu trong tủ lạnh. Hãy đổ đầy ly đá chứ đừng thả vài viên hờ hững."</blockquote>
    `
  },
  "tools": {
    category: "Thiết bị · 7 phút đọc",
    title: "Năm dụng cụ cơ bản cho quầy bar tại nhà",
    content: `
      <p>Bạn không cần một quầy bar lộng lẫy để bắt đầu. Chỉ với năm dụng cụ cơ bản có tổng chi phí chưa bằng một chai rượu ngon, bạn đã có thể làm chủ 90% công thức cocktail kinh điển thế giới.</p>
      <ol>
        <li><strong>Bình lắc Boston Shaker:</strong> Gồm hai phần cốc kim loại lồng vào nhau. Nó bền bỉ, dễ vệ sinh và làm lạnh nhanh hơn bình Cobbler ba mảnh truyền thống.</li>
        <li><strong>Ly đong Jigger:</strong> Đong đo chính xác là ranh giới giữa một ly cocktail hoàn hảo và một ly cồn hỏng. Hãy chọn loại jigger dáng cao (Japanese style) có chia vạch rõ ràng.</li>
        <li><strong>Lọc Hawthorne Strainer:</strong> Chiếc lọc có lò xo kim loại dùng để chặn đá viên và thảo mộc khi rót rượu từ bình shaker ra ly.</li>
        <li><strong>Thìa Bar (Barspoon):</strong> Thìa có tay cầm dài, thân xoắn giúp bạn thực hiện thao tác khuấy (stir) mượt mà xung quanh thành ly trộn mà không làm nát đá.</li>
        <li><strong>Lọc mịn (Fine Strainer):</strong> Một chiếc rây lưới nhỏ để lọc bỏ hoàn toàn các dăm đá vụn hay vụn lá bạc hà, giúp ly cocktail trong trẻo và có lớp bọt mịn màng.</li>
      </ol>
    `
  },
  "sour": {
    category: "Công thức chuyên sâu · 8 phút đọc",
    title: "Họ Cocktail sour và công thức tỷ lệ vàng",
    content: `
      <p>Nếu bạn hiểu được cấu trúc của dòng cocktail Sour (Chua), bạn đã nắm giữ chìa khóa của hàng chục ly cocktail nổi tiếng nhất: Daiquiri, Whiskey Sour, Margarita, Gimlet, Sidecar...</p>
      <h3>Tỷ Lệ Vàng 8:3:2 (Hoặc 2:¾:¾ oz)</h3>
      <p>Hầu hết các ly cocktail Sour chuẩn mực đều tuân theo tỷ lệ thể tích kinh điển:</p>
      <ul>
        <li><strong>8 phần Rượu nền (60ml):</strong> Mang lại hương vị đặc trưng và độ cồn cốt lõi.</li>
        <li><strong>3 phần Nước cốt chanh tươi (22.5ml):</strong> Tạo vị chua rực rỡ sáng khoái.</li>
        <li><strong>2 phần Syrup đường (15ml):</strong> Cân bằng và kết dính vị chua, ngọt.</li>
      </ul>
      <p>Khi bạn thay đổi rượu nền (từ Rum sang Gin) và giữ nguyên nước chanh cùng syrup, bạn đã biến đổi một ly Daiquiri thành một ly Gimlet. Nếu thay syrup đường bằng rượu mùi cam (Triple Sec), bạn có ly Margarita hoặc Sidecar. Thật đơn giản và logic!</p>
    `
  },
  "vermouth": {
    category: "Nguyên liệu chuyên sâu · 6 phút đọc",
    title: "Vermouth: Hãy cất nó vào tủ lạnh!",
    content: `
      <p>Vermouth không phải là rượu mạnh (spirits), nó là rượu vang hóa (fortified wine) được ngâm ủ với các loại thảo mộc và rễ cây. Vì có nền là rượu vang, Vermouth sẽ bị oxy hóa và hỏng chỉ sau vài tuần mở nắp nếu để ở nhiệt độ phòng.</p>
      <h3>Cách Bảo Quản Chuẩn</h3>
      <p>Sau khi mở nắp chai Vermouth (dù là Sweet hay Dry), hãy luôn đậy chặt nắp và cất vào ngăn mát tủ lạnh. Ở nhiệt độ thấp, quá trình oxy hóa bị chậm lại, giúp giữ được hương thảo mộc tươi mới trong khoảng 1-2 tháng.</p>
      <blockquote>"Một ly Negroni pha với chai Vermouth mở nắp nửa năm để trên kệ bụi bặm sẽ có vị chua gắt xỉn màu và mùi như giấm hỏng. Hãy nâng niu chai Vermouth của bạn!"</blockquote>
    `
  },
  "pour": {
    category: "Kỹ thuật · 5 phút đọc",
    title: "Khuấy (Stir) hay Lắc (Shake)?",
    content: `
      <p>Tại sao James Bond lại yêu cầu một ly Vesper Martini "shaken, not stirred" và tại sao yêu cầu đó lại khiến các bartender sành sỏi nhíu mày? Mỗi kỹ thuật pha chế đều phục vụ một mục đích vật lý rõ ràng.</p>
      <h3>Khi Nào Nên Khuấy (Stir)?</h3>
      <p>Khuấy được áp dụng cho các ly cocktail chỉ chứa rượu mạnh và rượu vang hóa (như Negroni, Manhattan, Martini). Mục đích là làm lạnh rượu, pha loãng nhẹ nhàng mà vẫn giữ được độ trong suốt hoàn hảo và cảm giác sánh mượt (silkiness) trên đầu lưỡi. Lắc những ly này sẽ đưa bọt khí vào rượu, làm rượu bị đục và mất đi độ sệt sang trọng.</p>
      <h3>Khi Nào Nên Lắc (Shake)?</h3>
      <p>Lắc được bắt buộc khi công thức chứa các nguyên liệu không phải rượu như: nước ép trái cây, lòng trắng trứng, kem, sữa hoặc mật ong. Lắc mạnh mẽ giúp liên kết các thành phần có mật độ phân tử khác nhau, đưa không khí vào để tạo lớp bọt mịn màng (aeration) và làm lạnh cực nhanh.</p>
    `
  },
  "glass": {
    category: "Thiết bị · 5 phút đọc",
    title: "Ly tách: Chiếc áo khoác của hương vị",
    content: `
      <p>Việc chọn ly uống cocktail không chỉ để chụp ảnh đẹp, dáng ly ảnh hưởng trực tiếp đến cách bạn ngửi thấy mùi hương và cảm nhận nhiệt độ của đồ uống.</p>
      <ul>
        <li><strong>Ly Coupe (Chân cao, bầu tròn):</strong> Dùng cho các cocktail phục vụ "up" (lạnh nhưng không có đá trong ly) như Daiquiri, Gimlet. Chân ly cao giúp tay bạn không tiếp xúc với bầu ly, tránh truyền nhiệt làm ấm rượu. Bầu ly rộng giúp hương thơm lan tỏa tự nhiên.</li>
        <li><strong>Ly Rocks/Old Fashioned (Thấp, đáy dày):</strong> Dùng cho cocktail uống với đá khối lớn như Old Fashioned, Negroni. Đáy ly dày chịu lực tốt khi dằm nguyên liệu, và dáng ly thấp giúp bạn ngửi thấy mùi tinh dầu vỏ cam rõ nhất ngay khi ghé môi.</li>
        <li><strong>Ly Highball/Collins (Cao, thon):</strong> Dùng cho cocktail sủi tăm ga sảng khoái (Gin & Tonic, Mojito). Dáng ly hẹp và cao hạn chế diện tích bề mặt tiếp xúc với không khí, giúp giữ bọt ga sủi tăm lâu hơn.</li>
      </ul>
    `
  },
  "garnish": {
    category: "Kỹ thuật · 4 phút đọc",
    title: "Tinh dầu vỏ cam: Chiêu bài cuối cùng",
    content: `
      <p>Bạn đã hoàn thành ly cocktail, rót ra ly đẹp đẽ. Nhưng ngửi thử vẫn thấy thiếu một cái gì đó bừng sáng. Câu trả lời nằm ở "Garnish" — cụ thể là tinh dầu từ vỏ cam quýt (citrus express).</p>
      <h3>Nghệ Thuật Vắt Vỏ Cam (Citrus Twist)</h3>
      <p>Lấy một miếng vỏ cam hoặc chanh tươi (chỉ lấy phần da màu, không lấy phần cùi trắng đắng). Ghé miếng vỏ cam song song với bề mặt ly cocktail cách khoảng 5cm. Dùng ngón tay bóp mạnh để tia tinh dầu li ti bắn ra phủ một lớp sương mỏng thơm ngát lên bề mặt ly rượu.</p>
      <p>Sau đó, bạn có thể xoa nhẹ viền ngoài của miếng vỏ cam lên thành ly và chân ly để hương thơm bám vào tay người thưởng thức, mang lại trải nghiệm đa giác quan tuyệt vời.</p>
    `
  },
  "journal-14": {
    category: "Ghi chép · Số 14",
    time: "5 phút đọc",
    title: "Đêm tôi làm loãng quá tay một ly Negroni",
    content: `
      <p>Hôm ấy là một tối thứ Sáu, ánh đèn dầu leo lét. Tôi quyết định tự thưởng cho mình một ly Negroni kinh điển. Tỷ lệ chuẩn xác: 30ml Gin, 30ml Sweet Vermouth, 30ml Campari. Nhưng sai lầm đã xảy ra ở khâu khuấy (stir).</p>
      <h3>Sai Lầm Ở Khâu Chọn Đá</h3>
      <p>Vì lười biếng, tôi không dùng viên đá khối vuông lớn cất trong ngăn đông riêng mà xúc một vốc đá bi nhỏ từ khay tủ lạnh gia đình. Đá mỏng, nhiều bọt khí tan nhanh. Khi tôi thả vào ly trộn và bắt đầu khuấy, tiếng đá lạo xạo vỡ vụn lập tức báo hiệu một ly cocktail bị hỏng.</p>
      <h3>Hậu Quả: Vị Nhạt Nước</h3>
      <p>Sau 20 giây khuấy, ly cocktail trở nên lạnh nhưng nước đá tan ra đã vượt quá 30% thể tích. Khi nhấp môi ngụm đầu tiên, tôi cảm thấy vị đắng cay ấm áp thảo mộc của Campari và vị sồi trong vermouth bị pha loãng hoàn toàn. Vị cồn của gin bay biến sạch, kéo theo đó là sự sụp đổ của toàn bộ cấu trúc ly nước.</p>
      <h3>Cách Cứu Lượt Thứ Hai</h3>
      <p>Tôi đổ bỏ ly đầu tiên và làm lại lượt thứ hai. Lần này, tôi dùng một viên đá lớn tự đông (clear ice block). Khuấy nhẹ nhàng chỉ 12 giây. Rượu rót ra sánh đặc, có độ sệt mượt mà như nhung. Ly Negroni thứ hai giữ được hương thảo mộc nồng nàn và hậu vị đắng ngọt lưu luyến mãi nơi cuống họng. Đừng bao giờ coi thường đá — nó chính là linh hồn của cocktail.</p>
    `
  },
  "journal-13": {
    category: "Ghi chép · Số 13",
    time: "6 phút đọc",
    title: "Nếm thử ba loại Vermouth ngọt cạnh nhau",
    content: `
      <p>Rượu Vermouth ngọt (Sweet Vermouth) thường bị coi là kẻ làm nền thầm lặng trong ly Manhattan hay Negroni. Hôm nay, tôi quyết định rót ẩn danh ba loại Vermouth phổ biến ra ly uống neat ở nhiệt độ phòng để cảm nhận sự khác biệt thực sự.</p>
      <h3>1. Martini Rosso (Kẻ Quen Thuộc)</h3>
      <p>Martini Rosso là chai Vermouth đỏ phổ biến nhất. Vị nhẹ, ngọt vừa, thoảng mùi caramel chưng và thảo mộc khô. Khi uống neat, nó hơi mỏng và có một chút vị chua của vang nho rẻ tiền ở hậu vị. Tuy nhiên, nó cực kỳ đa dụng và an toàn để pha chế hàng ngày.</p>
      <h3>2. Cocchi Storico di Torino (Bản Sắc Turin)</h3>
      <p>Đậm đà và mang tính nghệ thuật cao. Cocchi Torino mang mùi thơm quyến rũ của vỏ cam đắng, ca cao nướng, vani ấm và vị đắng của rễ cây đại hoàng. Khi nhấp môi, rượu có độ đặc sánh và cấu trúc tròn trịa. Một chai vermouth xuất sắc để uống neat với đá và vỏ cam xoắn.</p>
      <h3>3. Carpano Antica Formula (Vua Vermouth)</h3>
      <p>Trải nghiệm hoàng gia thực sự. Carpano Antica cực kỳ đậm đà, dậy hương vani Madagascar ngào ngạt, đinh hương, quế và socola đen. Vị đắng ngọt của nó mạnh mẽ đến mức có thể lấn át cả một chai Gin nhẹ nếu pha Negroni không khéo. Đây là lựa chọn tối thượng cho một ly Manhattan ấm áp mùa đông.</p>
    `
  },
  "journal-12": {
    category: "Ghi chép · Số 12",
    time: "5 phút đọc",
    title: "Dựng quầy bar tại nhà với chi phí bằng vài ly cà phê",
    content: `
      <p>Nhiều người hỏi tôi: "Tôi muốn tự pha chế ở nhà nhưng ngân sách có hạn, tôi phải mua gì đầu tiên?". Câu trả lời của tôi luôn là: Hãy bắt đầu cực nhỏ và thông minh.</p>
      <h3>Năm Thứ Tôi Mua Đầu Tiên (Dưới 500k)</h3>
      <ul>
        <li><strong>Một chiếc Jigger (Ly đong):</strong> Đóng vai trò đo lường chuẩn xác từng ml. Giá khoảng 40k.</li>
        <li><strong>Bình Boston Shaker inox:</strong> Mua một bộ shaker kim loại bền bỉ. Giá khoảng 150k.</li>
        <li><strong>Một chiếc Lọc Hawthorne:</strong> Dùng để chặn đá khi rót từ shaker. Giá khoảng 60k.</li>
        <li><strong>Thìa Bar xoắn dài:</strong> Dùng để khuấy thao tác mượt mà và đẹp mắt hơn. Giá khoảng 30k.</li>
        <li><strong>Chai Gin Beefeater 700ml:</strong> Dòng London Dry Gin đa dụng và chuẩn mực để bắt đầu học. Giá khoảng 250k.</li>
      </ul>
      <h3>Một Thứ Tôi Ước Mình Đã Bỏ Qua</h3>
      <p>Đó là bộ ly uống cocktail Martini dáng chữ V loe rộng cổ điển. Chúng trông rất ngầu trên phim ảnh, nhưng cực kỳ dễ tràn rượu ra ngoài khi cầm di chuyển. Thay vào đó, hãy mua ly Coupe dáng bầu tròn thanh lịch, dễ cầm và giữ nhiệt tốt hơn nhiều.</p>
    `
  },
  "journal-11": {
    category: "Ghi chép · Số 11",
    time: "4 phút đọc",
    title: "Vì sao cam chanh của tôi cứ nhạt vị?",
    content: `
      <p>Có một nghịch lý thế này: Bạn mua một chai rượu nền cực đắt, đong chuẩn từng ml, lắc rất nhiệt tình, nhưng ly cocktail vẫn mang vị nhạt nhẽo, thiếu sức sống. 90% nguyên nhân nằm ở quả chanh bạn dùng.</p>
      <h3>Cơn Ác Mộng Của Nước Ép Đóng Sẵn</h3>
      <p>Tôi từng thử ép sẵn một chai nước chanh xanh cất tủ lạnh dùng dần cho đỡ mất công cắt ép mỗi lần pha. Chỉ sau 2 tiếng, nước chanh bắt đầu bị oxy hóa. Vị chua thanh, sáng sủa biến mất, thay vào đó là vị đắng ngắt từ tinh dầu vỏ lẫn vào nước ép. Ly Daiquiri pha từ nước chanh này bị xỉn màu và đắng ngắt.</p>
      <h3>Quy Tắc Vàng: Ép Ngay Trước Khi Pha</h3>
      <p>Chanh chứa các hợp chất acid hữu cơ rất nhạy cảm với không khí. Hãy ép chanh ngay trước khi pha cocktail. Khi vắt chanh bằng tay, hãy vắt nhẹ nhàng vừa đủ, tránh bóp quá mạnh làm nát vỏ chanh khiến tinh dầu đắng chảy vào nước cốt.</p>
    `
  },
  "gin-vs-vodka": {
    category: "Rượu mạnh · 5 phút đọc",
    title: "Gin và Vodka: Khác nhau thật sự ở đâu?",
    content: `
      <p>Một câu hỏi kinh điển mà những người bắt đầu tìm hiểu về spirits luôn thắc mắc: Hai loại rượu trong suốt này có gì khác biệt ngoài cái tên? Dù trông giống hệt nhau khi rót ra ly, chúng đại diện cho hai triết lý hương vị hoàn toàn đối lập.</p>
      <h3>Vodka: Nghệ Thuật Của Sự Tinh Khiết & Trung Tính</h3>
      <p>Theo định nghĩa truyền thống, Vodka được chưng cất để đạt độ tinh khiết tối đa, loại bỏ hầu hết màu sắc, mùi vị và hương thơm. Nó giống như một tấm toan trắng (blank canvas). Vodka ngon không phải là loại có mùi thơm nồng nàn, mà là loại mang lại cảm giác êm dịu, mượt mà (smooth) khi nuốt và không lấn át các hương vị pha chế chung.</p>
      <h3>Gin: Bản Giao Hưởng Của Hương Thảo Mộc</h3>
      <p>Ngược lại, Gin thực chất là Vodka được "ướp hương". Rượu nền trung tính được chưng cất lại cùng với quả bách xù (juniper berries) — đây là hương vị bắt buộc để một chai rượu được gọi là Gin. Ngoài ra, mỗi nhà làm Gin sẽ thêm vào các loại thảo mộc, rễ cây, vỏ cam quýt, hạt ngò... để tạo nên dấu ấn hương vị độc bản của riêng họ.</p>
      <blockquote>"Nếu Vodka là một mặt hồ phẳng lặng không một gợn sóng, thì Gin là một khu vườn thảo mộc tươi mát sau cơn mưa rào."</blockquote>
    `
  },
  "barware": {
    category: "Dụng cụ · 7 phút đọc",
    title: "Hướng dẫn chọn dụng cụ pha chế cho người mới",
    content: `
      <p>Khi mới bắt đầu xây dựng quầy bar tại nhà, bạn rất dễ bị choáng ngợp bởi hàng tá dụng cụ lấp lánh trong các cửa hàng chuyên dụng. Tuy nhiên, sự thật là bạn chỉ cần một vài món đồ cơ bản nhưng chất lượng tốt.</p>
      <h3>1. Bình Lắc (Shaker)</h3>
      <p>Có hai loại phổ biến: <strong>Boston Shaker</strong> (gồm hai cốc kim loại lồng vào nhau, cần thêm lọc rời) và <strong>Cobbler Shaker</strong> (ba mảnh tích hợp sẵn lọc). Lời khuyên cho người mới là nên chọn Boston Shaker vì nó bền bỉ, dễ làm sạch và lạnh nhanh hơn.</p>
      <h3>2. Ly Đong (Jigger)</h3>
      <p>Đừng bao giờ pha chế theo cảm tính. Hãy mua một chiếc Jigger dáng cao kiểu Nhật (Japanese style) có chia vạch rõ ràng (thường là 30ml/45ml hoặc 30ml/60ml với các vạch phụ bên trong). Đong chuẩn xác là chìa khóa để giữ hương vị đồng nhất.</p>
      <h3>3. Dụng Cụ Lọc (Strainers)</h3>
      <p>Nếu dùng Boston Shaker, bạn cần một chiếc lọc <strong>Hawthorne Strainer</strong> (lọc lò xo) để giữ đá lại. Một chiếc lọc mịn <strong>Fine Strainer</strong> (rây lưới nhỏ) cũng rất cần thiết để lọc bỏ dăm đá nhỏ, giúp nước trong và mượt hơn.</p>
      <h3>4. Thìa Khuấy (Barspoon)</h3>
      <p>Thìa bar có tay cầm dài và thân xoắn giúp bạn thực hiện thao tác khuấy (stir) mượt mà xung quanh thành ly trộn mà không làm nát đá.</p>
    `
  },
  "homebar-setup": {
    category: "Quầy bar · 8 phút đọc",
    title: "Cách dựng một quầy bar tại nhà đơn giản",
    content: `
      <p>Tự tạo một góc thưởng thức cocktail ấm cúng tại nhà là một trải nghiệm vô cùng thú vị. Bạn không cần một không gian rộng lớn hay ngân sách khổng lồ để bắt đầu.</p>
      <h3>Bước 1: Chọn Địa Điểm</h3>
      <p>Một góc kệ sách, một chiếc xe đẩy nhỏ (bar cart), hoặc một ngăn tủ bếp được dọn dẹp sạch sẽ đều có thể biến thành quầy bar lý tưởng. Quan trọng là nơi đó khô ráo, tránh ánh nắng trực tiếp để bảo quản rượu tốt nhất.</p>
      <h3>Bước 2: Quy Tắc "Một Rượu Mạnh, Một Điều Vị"</h3>
      <p>Đừng mua cả chục chai rượu cùng lúc. Hãy chọn một chai rượu mạnh bạn thích nhất (ví dụ: Gin Beefeater hoặc Whiskey Bourbon Wild Turkey) kết hợp cùng một chai rượu mùi hoặc vang hóa (như Sweet Vermouth hay Triple Sec). Thêm chanh tươi và đường syrup, bạn đã có thể pha được ít nhất 3-4 ly cocktail chuẩn vị.</p>
      <h3>Bước 3: Chuẩn Bị Đá Viên Chất Lượng</h3>
      <p>Đá là linh hồn của cocktail. Hãy đầu tư một khay làm đá silicon cỡ lớn (khối vuông 5cm) để tự làm đá tại nhà. Đá viên lớn tan chậm sẽ giữ cho đồ uống của bạn lạnh sâu mà không bị nhạt nước quá nhanh.</p>
    `
  },
  "bitters": {
    category: "Nguyên liệu · 4 phút đọc",
    title: "Bitters thật ra là gì?",
    content: `
      <p>Nếu bạn nhìn thấy một bartender nhỏ vài giọt chất lỏng màu nâu sẫm từ một chai nhỏ xíu vào ly rượu của bạn, đó chính là Bitters — thường được gọi là "muối và tiêu" của thế giới cocktail.</p>
      <h3>Gia Vị Cho Ly Rượu</h3>
      <p>Bitters là cồn nồng độ cao được ngâm ủ với các loại thảo mộc, vỏ cây, rễ cây, hoa quả và các loại gia vị đắng. Chúng cực kỳ đậm đặc và không được dùng để uống trực tiếp, mà chỉ dùng theo từng giọt (dashes).</p>
      <h3>Tại Sao Chúng Quan Trọng?</h3>
      <p>Bitters đóng vai trò liên kết các hương vị đối lập trong cocktail. Khi bạn có vị ngọt của đường và vị mạnh của rượu, bitters sẽ thêm vào các nốt hương gỗ, thảo mộc đắng dịu, giúp ly cocktail có chiều sâu và chuyển biến hương vị tinh tế hơn.</p>
      <blockquote>"Thiếu bitters, một ly Old Fashioned hay Manhattan sẽ chỉ là rượu Bourbon ngọt ngào thông thường, thiếu đi linh hồn thảo mộc huyền bí."</blockquote>
    `
  },
  "shake-stir": {
    category: "Nền tảng · 4 phút đọc",
    title: "Lắc và khuấy: Khác nhau ra sao?",
    content: `
      <p>Tại sao một số ly cocktail lại được lắc mạnh mẽ trong bình shaker, trong khi một số khác lại được khuấy êm ái bằng thìa dài? Câu trả lời nằm ở nguyên lý vật lý và kết cấu đồ uống.</p>
      <h3>Khuấy (Stirring): Tôn Vinh Sự Trong Trẻo & Sánh Mượt</h3>
      <p>Thường dùng cho các ly cocktail chỉ chứa rượu (không có nước ép hay trứng) như Martini, Manhattan, Negroni. Mục đích là làm lạnh và hòa loãng nhẹ nhàng từ từ, giữ cho rượu trong suốt hoàn hảo và có cảm giác sánh sệt (silkiness) sang trọng trên đầu lưỡi.</p>
      <h3>Lắc (Shaking): Hòa Quyện & Tạo Bọt Khí</h3>
      <p>Bắt buộc khi công thức chứa nước ép trái cây, lòng trắng trứng, kem hoặc mật ong. Lắc mạnh tạo ra lực đập lớn giúp liên kết các nguyên liệu có mật độ khác nhau, đồng thời đưa bọt khí vào để tạo ra lớp bọt mịn màng (aeration) mang lại cảm giác xốp nhẹ khi uống.</p>
    `
  },
  "read-recipe": {
    category: "Nền tảng · 6 phút đọc",
    title: "Cách đọc một công thức cocktail tự tin",
    content: `
      <p>Đọc một công thức cocktail không chỉ đơn thuần là nhìn vào các con số ml hay oz, mà là hiểu được cấu trúc và dụng ý của người sáng tạo ra nó.</p>
      <h3>Hiểu Đơn Vị Đo Lường: Oz vs Ml</h3>
      <p>Hầu hết các công thức quốc tế đều dùng đơn vị Ounce (oz). Hãy nhớ quy đổi đơn giản: <strong>1 oz tương đương khoảng 30ml</strong>. Như vậy:</p>
      <ul>
        <li>2 oz = 60ml (Lượng rượu nền tiêu chuẩn)</li>
        <li>3/4 oz = 22.5ml (Lượng nước chanh hoặc syrup cân bằng)</li>
        <li>1/2 oz = 15ml</li>
        <li>1/4 oz = 7.5ml</li>
      </ul>
      <h3>Đọc Theo Cấu Trúc</h3>
      <p>Hãy phân tích các nguyên liệu thành các nhóm: Rượu nền (Base), Rượu mùi điều hương (Modifier), Chất tạo chua (Acid), và Chất tạo ngọt (Sweet). Việc này giúp bạn dễ dàng nhận ra các họ cocktail kinh điển và biết cách thay thế nguyên liệu một cách thông minh khi thiếu chai.</p>
    `
  },
  "wine-labels": {
    category: "Vang · 6 phút đọc",
    title: "Đọc nhãn vang mà không còn e ngại",
    content: `
      <p>Đứng trước một kệ vang với hàng trăm chai rượu có nhãn tiếng Pháp, tiếng Ý hay tiếng Tây Ban Nha có thể khiến bất kỳ ai cũng cảm thấy bối rối. Hãy cùng giải mã nhãn chai qua ba thông tin cốt lõi.</p>
      <h3>1. Tân Thế Giới vs Cựu Thế Giới</h3>
      <p>Các nước "Tân thế giới" (Mỹ, Úc, Chile, New Zealand...) thường ghi rõ tên giống nho (Cabernet Sauvignon, Chardonnay...) ngay trên nhãn chính. Rất dễ đọc. Ngược lại, các nước "Cựu thế giới" (Pháp, Ý, Tây Ban Nha...) thường ghi tên vùng trồng (Bordeaux, Chianti, Rioja) vì họ tin rằng thổ nhưỡng (terroir) quyết định hương vị rượu hơn là giống nho.</p>
      <h3>2. Phân Hạng Rượu Vang</h3>
      <p>Hãy chú ý các ký hiệu phân hạng chất lượng được bảo hộ như AOC/AOP (Pháp), DOC/DOCG (Ý), DO/DOCa (Tây Ban Nha). Đây là chứng chỉ đảm bảo rượu được làm theo các tiêu chuẩn truyền thống nghiêm ngặt nhất của vùng đó.</p>
      <h3>3. Nồng Độ Cồn & Niên Vụ (Vintage)</h3>
      <p>Niên vụ là năm thu hoạch nho. Với vang phân khúc phổ thông, niên vụ gần (1-3 năm) thường mang hương vị trái cây tươi tắn, dễ uống ngay. Nồng độ cồn trung bình từ 12% đến 14.5% cũng phản ánh phần nào độ đậm đà của chai vang.</p>
    `
  },
  "spirit-gin": {
    category: "Thư viện Rượu · Gin",
    title: "Gin: Bản giao hưởng thảo mộc từ quả bách xù",
    content: `
      <p>Gin là dòng rượu mạnh được chưng cất từ ngũ cốc và mang hương vị chủ đạo từ quả bách xù (juniper). Khô ráo, tươi mát và ngập tràn nốt hương thực vật.</p>
      <h3>Nguồn Gốc Lịch Sử</h3>
      <p>Bắt nguồn từ loại thuốc cổ truyền của Hà Lan có tên là Genever, Gin được người Anh mang về phát triển và biến đổi thành dòng London Dry Gin thanh nhã nổi tiếng ngày nay.</p>
      <h3>Ứng Xử Trong Ly Cocktail</h3>
      <p>Gin là ngôi sao của những ly cocktail thanh mát sảng khoái như Gin & Tonic, Gimlet, hay những ly dry sâu lắng như Dry Martini, Negroni. Hương bách xù và thảo mộc của Gin hoạt động cực tốt khi kết hợp với vị chua của cam chanh và vị đắng của bitters.</p>
    `
  },
  "spirit-vodka": {
    category: "Thư viện Rượu · Vodka",
    title: "Vodka: Sự tinh khiết tối thượng và đa dụng",
    content: `
      <p>Vodka là dòng rượu trung tính được chưng cất nhiều lần qua các tháp chưng cất hiện đại để đạt độ tinh khiết tối đa, mang lại cảm giác sạch sẽ và êm mượt.</p>
      <h3>Nguyên Liệu & Chưng Cất</h3>
      <p>Vodka có thể được làm từ bất cứ nguyên liệu nào chứa tinh bột hoặc đường như lúa mì, lúa mạch rye, khoai tây hay thậm chí là nho. Rượu sau khi chưng cất thường được lọc qua than hoạt tính để loại bỏ hoàn tạp chất.</p>
      <h3>Người Bạn Đồng Hành Đa Năng</h3>
      <p>Nhờ đặc tính trung tính, Vodka không lấn át các hương vị khác mà tôn vinh chúng. Nó là nền tảng hoàn hảo cho các ly cocktail đầy màu sắc và hương vị như Espresso Martini, Moscow Mule, Bloody Mary hay Cosmopolitan.</p>
    `
  },
  "spirit-rum": {
    category: "Thư viện Rượu · Rum",
    title: "Rum: Linh hồn ấm áp của mía đường và biển cả",
    content: `
      <p>Rum được chưng cất từ các sản phẩm phụ của mía đường, phổ biến nhất là mật mía (molasses) hoặc nước mía tươi. Nó mang vị ngọt ấm đặc trưng của caramel và mật ong.</p>
      <h3>Các Dòng Rum Phổ Biến</h3>
      <ul>
        <li><strong>Light/White Rum (Rum trắng):</strong> Ít ủ, lọc trong suốt, vị thanh nhẹ, sảng khoái. Thường dùng pha Mojito, Daiquiri.</li>
        <li><strong>Gold/Amber Rum (Rum vàng):</strong> Ủ trong thùng gỗ sồi một thời gian ngắn, mang màu vàng nhạt và nốt hương vani dịu.</li>
        <li><strong>Dark Rum (Rum sẫm màu):</strong> Ủ lâu hơn trong các thùng sồi cháy cháy xém, vị đậm đà với nốt mật mía, gia vị nồng nàn.</li>
      </ul>
      <h3>Hương Vị Nhiệt Đới</h3>
      <p>Rum gắn liền với văn hóa biển Caribe và các ly cocktail nhiệt đới (Tiki) phóng khoáng, ngọt ngào, đầy nắng ấm.</p>
    `
  },
  "spirit-tequila": {
    category: "Thư viện Rượu · Tequila",
    title: "Tequila: Trái tim hoang dã của cây thùa Mexico",
    content: `
      <p>Tequila là dòng rượu mạnh độc bản của Mexico, được chưng cất từ phần lõi (piña) giàu đường của cây thùa xanh (Blue Agave) trồng tại bang Jalisco.</p>
      <h3>Phân Loại Theo Độ Ủ</h3>
      <ul>
        <li><strong>Blanco/Silver:</strong> Rượu không ủ hoặc ủ dưới 2 tháng trong bể inox, trong suốt, giữ trọn vị cay thực vật hoang dã và nốt đất ngọt của cây thùa.</li>
        <li><strong>Reposado:</strong> Ủ từ 2 tháng đến 1 năm trong thùng sồi, rượu chuyển màu vàng nhạt, dịu đi vị cay gắt và thoảng hương gỗ nhẹ.</li>
        <li><strong>Añejo:</strong> Ủ từ 1 đến 3 năm, mang màu hổ phách đậm, hương vị mượt mà sánh sệt như whisky với nốt vani và socola.</li>
      </ul>
      <h3>Cocktail Đặc Trưng</h3>
      <p>Tequila mang lại cá tính mạnh mẽ cho ly Margarita kinh điển hay ly Paloma sảng khoái với soda bưởi hồng.</p>
    `
  },
  "spirit-whiskey": {
    category: "Thư viện Rượu · Whisky",
    title: "Whisky: Nghệ thuật ủ sồi và chiều sâu thời gian",
    content: `
      <p>Whisky (hay Whiskey) là dòng rượu mạnh được chưng cất từ ngũ cốc lên men (lúa mạch, ngô, lúa mì, lúa mạch rye) và bắt buộc phải ủ trong thùng gỗ sồi nhiều năm.</p>
      <h3>Những Thánh Địa Whisky</h3>
      <ul>
        <li><strong>Scotch Whisky (Scotland):</strong> Nổi tiếng với hương khói than bùn đặc trưng và sự tinh tế phức tạp.</li>
        <li><strong>Bourbon Whiskey (Mỹ):</strong> Phải làm từ ít nhất 51% ngô, ủ trong thùng sồi mới tinh cháy xém, mang vị ngọt ngào của vani, caramel và sồi ấm.</li>
        <li><strong>Rye Whiskey (Mỹ):</strong> Làm từ lúa mạch rye, mang vị cay nồng nàn, khô ráo và góc cạnh hơn Bourbon.</li>
      </ul>
      <h3>Đỉnh Cao Pha Chế</h3>
      <p>Whisky mang lại xương sống ấm áp, vững chãi cho những ly cocktail spirit-forward huyền thoại như Old Fashioned, Manhattan hay Boulevardier.</p>
    `
  },
  "spirit-brandy": {
    category: "Thư viện Rượu · Brandy",
    title: "Brandy: Sự thăng hoa từ nước ép trái cây chưng cất",
    content: `
      <p>Brandy là tên gọi chung của dòng rượu mạnh được chưng cất từ nước trái cây lên men — phổ biến nhất là quả nho (rượu vang chưng cất), ngoài ra còn có táo, mơ, anh đào.</p>
      <h3>Cognac & Armagnac</h3>
      <p>Cognac là dòng Brandy nho hảo hạng bậc nhất thế giới, phải được sản xuất tại vùng Cognac (Pháp) theo quy trình chưng cất hai lần nghiêm ngặt trong nồi đồng tĩnh. Nó mang hương vị nho khô thơm ngọt, hoa cỏ và sồi già sang trọng.</p>
      <h3>Ứng Dụng Tinh Tế</h3>
      <p>Brandy/Cognac là nền tảng quý phái cho ly Sidecar chua ngọt sắc sảo, hay ly Sazerac nồng nàn hồi ức của New Orleans xưa.</p>
    `
  },
  "spirit-liqueur": {
    category: "Thư viện Rượu · Liqueur",
    title: "Rượu mùi (Liqueur): Nhạc trưởng hương sắc ngọt ngào",
    content: `
      <p>Rượu mùi (Liqueur) là dòng rượu mạnh được pha thêm đường và ướp hương thơm từ các loại quả, thảo mộc, hạt, kem hoặc hoa lá củ quả.</p>
      <h3>Đa Dạng Sắc Màu & Hương Vị</h3>
      <p>Có vô số loại liqueur nổi tiếng thế giới:</p>
      <ul>
        <li><strong>Cointreau / Triple Sec:</strong> Rượu mùi vỏ cam ngọt thanh, tươi sáng.</li>
        <li><strong>Kahlua:</strong> Rượu mùi hạt cà phê đậm đà ấm áp.</li>
        <li><strong>Amaretto:</strong> Rượu mùi hạt hạnh nhân ngọt ngào thoảng hương quả mơ.</li>
        <li><strong>Campari / Aperol:</strong> Rượu mùi cam đắng thảo mộc đặc trưng nước Ý.</li>
      </ul>
      <h3>Nhiệm Vụ Điều Vị</h3>
      <p>Liqueur đóng vai trò như chất kết dính vị ngọt và tạo hương thơm riêng biệt, giúp ly cocktail biến chuyển đa sắc thái từ ngụm đầu đến hậu vị.</p>
    `
  },
  "spirit-vermouth": {
    category: "Thư viện Rượu · Vermouth",
    title: "Vermouth: Vang hóa thảo mộc thanh lịch và sâu lắng",
    content: `
      <p>Vermouth không phải là rượu chưng cất mạnh (spirits), nó là rượu vang được cường hóa nồng độ cồn và ngâm ủ kỹ lưỡng với các loại thảo mộc thảo dược quý.</p>
      <h3>Hai Dòng Vermouth Cốt Lõi</h3>
      <ul>
        <li><strong>Sweet Vermouth (Đỏ/Ngọt):</strong> Bắt nguồn từ Ý, mang màu đỏ hồng ngọc sẫm, vị ngọt đắng đậm đà thảo mộc. Linh hồn của Negroni, Manhattan.</li>
        <li><strong>Dry Vermouth (Trắng/Khô):</strong> Bắt nguồn từ Pháp, trong suốt hoặc vàng rơm nhạt, vị khô ráo, chua nhẹ và thoảng hương hoa. Không thể thiếu trong ly Dry Martini kinh điển.</li>
      </ul>
      <blockquote>"Hãy luôn đậy chặt nắp và bảo quản chai Vermouth đã mở trong ngăn mát tủ lạnh để giữ được hương thơm thảo mộc tươi mới lâu nhất!"</blockquote>
    `
  },
  "topic-cocktail-families": {
    category: "Kiến thức · 8 phút đọc",
    title: "Các họ cocktail: Công thức khung đứng sau thế giới pha chế",
    content: `
      <p>Thế giới cocktail có hàng nghìn công thức, nhưng hầu hết chúng đều được phát triển từ một vài "công thức khung" (families) cơ bản. Hiểu được các họ này, bạn sẽ tự tin ứng biến pha chế mà không cần nhìn sách công thức.</p>
      <h3>1. Họ Cocktail Sour (Chua ngọt)</h3>
      <p>Cấu trúc: <strong>Rượu nền + Chất chua (chanh) + Chất ngọt (syrup)</strong>. Ví dụ: Daiquiri, Gimlet, Margarita, Whiskey Sour. Tỷ lệ vàng thường là 8:3:2.</p>
      <h3>2. Họ Spirit-Forward (Đậm đà rượu mạnh)</h3>
      <p>Cấu trúc: <strong>Rượu nền + Rượu vang hóa/Rượu mùi + Giọt bitters đắng</strong>. Không dùng nước ép trái cây. Khuấy đều với đá. Ví dụ: Martini, Manhattan, Negroni, Old Fashioned.</p>
      <h3>3. Họ Highball / Collins (Ly dài sảng khoái)</h3>
      <p>Cấu trúc: <strong>Rượu nền + Nước pha có ga (Soda, Tonic, Ginger Beer) + Cam chanh</strong>. Rót trực tiếp vào ly cao đầy đá. Ví dụ: Gin & Tonic, Mojito, Tom Collins, Moscow Mule.</p>
    `
  },
  "topic-garnish": {
    category: "Kỹ thuật · 5 phút đọc",
    title: "Trang trí căn bản: Hương và dụng ý, không phải để làm đẹp",
    content: `
      <p>Trong nghệ thuật pha chế cocktail, Garnish (trang trí) không chỉ là phụ kiện làm đẹp để chụp ảnh. Nó là một nguyên liệu thực sự tác động trực tiếp đến khứu giác và vị giác của người thưởng thức.</p>
      <h3>1. Tinh Dầu Vỏ Cam Quýt (Citrus Express)</h3>
      <p>Bằng cách vắt mạnh vỏ cam hoặc vỏ chanh trên miệng ly, bạn bắn ra một lớp sương tinh dầu thơm ngát phủ lên bề mặt rượu. Lớp tinh dầu này che đi mùi cồn gắt đầu tiên, thay thế bằng hương tươi mát bừng sáng.</p>
      <h3>2. Ngọn Thảo Mộc Tươi (Mint, Rosemary)</h3>
      <p>Khi dùng bạc hà hay hương thảo để trang trí, hãy vỗ nhẹ chúng vào mu bàn tay trước khi gài lên ly rượu. Thao tác này giúp giải phóng tinh dầu thơm thơm mát để mỗi khi ghé môi uống, mũi bạn sẽ ngửi thấy mùi thảo mộc dễ chịu.</p>
      <h3>3. Quả Anh Đào, Ô-liu Ngâm Rượu</h3>
      <p>Những garnish này chìm dưới đáy ly mang lại một bất ngờ nhỏ khi uống đến ngụm cuối. Vị ngọt đậm của anh đào ngâm hay vị mặn ngậy của ô-liu xanh giúp cân bằng lại hậu vị của ly cocktail.</p>
    `
  },
  "topic-glassware": {
    category: "Thiết bị · 5 phút đọc",
    title: "Chọn ly: Chiếc áo khoác định hình hương vị",
    content: `
      <p>Việc chọn ly uống cocktail không chỉ để đẹp mắt, mà mỗi dáng ly đều được thiết kế dựa trên nguyên lý khoa học về cách cảm nhận nhiệt độ và mùi hương của đồ uống.</p>
      <h3>1. Ly Chân Cao (Coupe, Martini, Flute): Phục Vụ "Up"</h3>
      <p>Dùng cho cocktail phục vụ lạnh sâu nhưng không có đá trong ly (như Daiquiri, Martini). Chân ly cao thanh mảnh giúp tay bạn cầm ly không tiếp xúc trực tiếp với bầu rượu, ngăn nhiệt cơ thể làm nóng rượu.</p>
      <h3>2. Ly Thấp Đáy Dày (Rocks, Old Fashioned): Phục Vụ "On the Rocks"</h3>
      <p>Dùng cho cocktail uống cùng đá khối lớn (như Negroni, Old Fashioned). Đáy ly dày chịu lực tốt khi dằm nguyên liệu, và dáng ly rộng giúp bạn ngửi thấy mùi tinh dầu rõ nhất ngay khi ghé môi.</p>
      <h3>3. Ly Dáng Cao Hẹp (Highball, Collins): Phục Vụ "Long Drink"</h3>
      <p>Dùng cho các ly cocktail pha ga sủi tăm mát lạnh (như Gin & Tonic, Mojito). Thiết kế bầu ly thon và hẹp hạn chế tối đa diện tích tiếp xúc với không khí, giúp giữ bọt ga sủi tăm được lâu nhất.</p>
    `
  },
  "topic-classic-recipes": {
    category: "Kiến thức · 6 phút đọc",
    title: "Những ly cocktail kinh điển đáng thuộc lòng",
    content: `
      <p>Những công thức cocktail kinh điển (Classic Cocktails) đã vượt qua thử thách của thời gian hàng trăm năm nhờ sự cân bằng hương vị hoàn hảo tuyệt đối.</p>
      <h3>Bài Học Nhập Môn Tối Thượng</h3>
      <p>Trước khi bắt đầu sáng tạo các công thức mới, người pha chế cần nằm lòng cách làm những ly kinh điển:</p>
      <ul>
        <li><strong>Negroni:</strong> Sự hòa quyện đắng ngọt tuyệt mỹ của Gin, Sweet Vermouth và Campari theo tỷ lệ đều nhau 1:1:1.</li>
        <li><strong>Daiquiri:</strong> Sự tươi sáng tinh khiết của chanh tươi vắt và Rum trắng.</li>
        <li><strong>Old Fashioned:</strong> Sự tôn vinh trực tiếp hương vị sồi ấm của Whiskey Bourbon ngọt ngào.</li>
        <li><strong>Whiskey Sour:</strong> Bản giao hương êm dịu giữa chanh, đường và rượu mạnh được bao phủ bởi lớp bọt trứng mịn.</li>
      </ul>
      <p>Mỗi ly cocktail kinh điển là một bài học đắt giá về kỹ thuật pha loãng, làm lạnh và cân bằng vị giác.</p>
    `
  },
  "topic-modern-riff": {
    category: "Kiến thức · 6 phút đọc",
    title: "Biến tấu hiện đại: Cách người pha chế đổi mới kinh điển",
    content: `
      <p>Khi bạn đã hiểu rõ các công thức kinh điển, bước tiếp theo đầy thú vị là thực hiện các biến tấu hiện đại (Modern Riffs) dựa trên cấu trúc nền tảng có sẵn.</p>
      <h3>Cách Thực Hiện Riff Đơn Giản</h3>
      <ul>
        <li><strong>Thay thế rượu nền (Base Swapping):</strong> Hãy thử thay Gin trong ly Negroni bằng Mezcal khói để có ly Mezcal Negroni đầy hoang dã, hoặc thay bằng Whiskey để có ly Boulevardier ấm áp.</li>
        <li><strong>Thay đổi chất tạo ngọt (Sweetener Swap):</strong> Thay Simple Syrup đường thông thường trong ly Daiquiri bằng mật ong thơm ngậy để tạo nên ly Honey Daiquiri mượt mà.</li>
        <li><strong>Ngâm ủ nguyên liệu (Infusion):</strong> Tự ngâm trà Earl Grey vào chai Gin trước khi pha ly Gin & Tonic để có nốt hương cam bergamot tao nhã.</li>
      </ul>
      <blockquote>"Sáng tạo không phải là phá bỏ nguyên tắc, mà là hiểu rõ nguyên tắc để xoay chuyển chúng một cách nghệ thuật."</blockquote>
    `
  }
};

const RECIPES = [
  {
    id: "negroni",
    name: "Negroni",
    desc: "Vị đắng thảo mộc ngọt ngào hòa quyện, ly rượu đỏ rực đầy mê hoặc.",
    ingredients: ["gin", "vermouth_sweet", "campari"],
    strength: "strong",
    flavor: "bitter",
    mood: "solitary",
    flavorProfile: [5, 3, 1, 4.5, 4.5],
    details: {
      category: "Cocktail Kinh Điển",
      time: "3 phút pha chế",
      title: "Negroni: Vẻ Đẹp Của Sự Cân Bằng Đắng Ngọt",
      content: `
        <p>Negroni là một trong những ly cocktail dễ nhớ nhất nhưng lại khó quên nhất thế giới. Tròn trịa, sâu sắc và mang một màu đỏ hồng ngọc lộng lẫy.</p>
        <h3>Công Thức & Tỷ Lệ</h3>
        <ul>
          <li>30ml London Dry Gin</li>
          <li>30ml Sweet Vermouth (Vermouth ngọt)</li>
          <li>30ml Campari</li>
        </ul>
        <h3>Kỹ Thuật Pha Chế</h3>
        <p><strong>Stir (Khuấy):</strong> Cho tất cả nguyên liệu vào ly Rocks chứa sẵn một viên đá lớn. Khuấy đều tay trong khoảng 15-20 giây để làm lạnh sâu và pha loãng vừa đủ. Trang trí bằng một vỏ cam xoắn đã vắt tinh dầu lên bề mặt.</p>
        <blockquote>"Nếu bạn muốn thử thách khẩu vị và yêu thích vị đắng thảo mộc đằm thắm của Ý, Negroni chính là điểm dừng chân hoàn hảo."</blockquote>
      `
    },
    steps: [
      { text: "Chuẩn bị ly Rocks chứa sẵn một viên đá lớn hoặc khối tròn." },
      { text: "Đong chính xác 30ml London Dry Gin, 30ml Sweet Vermouth và 30ml Campari rót thẳng vào ly." },
      { text: "Khuấy đều tay liên tục trong khoảng 15-20 giây để hòa tan đá vừa đủ và làm lạnh sâu rượu.", timer: 15 },
      { text: "Vắt mạnh vỏ cam xoắn lấy tinh dầu bắn lên bề mặt rượu và miết quanh vành ly." },
      { text: "Thả vỏ cam vào ly để trang trí và thưởng thức ly cocktail đỏ rực." }
    ]
  },
  {
    id: "daiquiri",
    name: "Daiquiri",
    desc: "Chua thanh tinh khiết, ngọt dịu sảng khoái nâng niu mùi rum biển cả.",
    ingredients: ["rum", "lime", "syrup"],
    strength: "balanced",
    flavor: "citrus",
    mood: "refreshing",
    flavorProfile: [3, 2.5, 3.5, 0, 3],
    details: {
      category: "Cocktail Kinh Điển",
      time: "3 phút pha chế",
      title: "Daiquiri: Bản Giao Hưởng Của Cam Chanh & Rum",
      content: `
        <p>Không phải Mojito, chính Daiquiri mới là thước đo tiêu chuẩn cho kỹ thuật của một bartender chuyên nghiệp. Tươi tắn, sảng khoái và cực kỳ thanh sạch.</p>
        <h3>Công Thức & Tỷ Lệ (Tỷ lệ vàng 8:3:2)</h3>
        <ul>
          <li>60ml Light Rum (Rum trắng)</li>
          <li>22.5ml Nước cốt chanh tươi</li>
          <li>15ml Simple Syrup (Syrup đường tỷ lệ 1:1)</li>
        </ul>
        <h3>Kỹ Thuật Pha Chế</h3>
        <p><strong>Shake (Lắc):</strong> Cho tất cả nguyên liệu vào bình shaker. Đổ đầy đá viên cứng và lắc mạnh mẽ, nhanh chóng trong 10-12 giây cho đến khi bình shaker đóng tuyết lạnh ngắt. Lọc mịn (double strain) ra ly Coupe đã được làm lạnh sẵn. Trang trí bằng một lát chanh tròn mỏng.</p>
        <blockquote>"Daiquiri là bài ca của sự tinh giản. Hãy dùng chanh tươi vừa vắt và rum trắng chất lượng để cảm nhận trọn vẹn vị chua ngọt thanh khiết."</blockquote>
      `
    },
    steps: [
      { text: "Làm lạnh ly Coupe chân cao bằng cách đặt đá hoặc cho vào tủ đông." },
      { text: "Đong 60ml Light Rum, 22.5ml nước chanh xanh vắt tươi và 15ml Simple Syrup vào bình shaker." },
      { text: "Thêm đầy đá viên cứng tới miệng bình lắc." },
      { text: "Lắp chặt nắp shaker và lắc thật mạnh, thật nhanh trong 10-12 giây cho đến khi bình lạnh buốt đóng tuyết.", timer: 10 },
      { text: "Rót lọc mịn (double strain) qua rây lưới vào ly Coupe và trang trí bằng lát chanh tròn mỏng." }
    ]
  },
  {
    id: "whiskey_sour",
    name: "Whiskey Sour",
    desc: "Sự hòa quyện nồng ấm vị sồi ngô với vị chanh chua ngọt thanh nhã.",
    ingredients: ["whiskey", "lemon", "syrup", "egg_white"],
    strength: "balanced",
    flavor: "citrus",
    mood: "social",
    flavorProfile: [3.5, 2.5, 3, 0.5, 4],
    details: {
      category: "Cocktail Kinh Điển",
      time: "4 phút pha chế",
      title: "Whiskey Sour: Sự Gặp Gỡ Của Lửa & Băng",
      content: `
        <p>Sự kết hợp hoàn hảo giữa tính chất nồng ấm cay vị gỗ sồi của Bourbon whiskey và vị chua tươi sáng của chanh vàng.</p>
        <h3>Công Thức & Tỷ Lệ</h3>
        <ul>
          <li>60ml Bourbon Whiskey</li>
          <li>22.5ml Nước cốt chanh vàng (Lemon)</li>
          <li>15ml Simple Syrup</li>
          <li>Có thể thêm: 15ml lòng trắng trứng tươi (tạo bọt) & 2 giọt Angostura Bitters nhỏ lên bọt bề mặt</li>
        </ul>
        <h3>Kỹ Thuật Pha Chế</h3>
        <p><strong>Shake (Lắc):</strong> Lắc mạnh tất cả nguyên liệu với đá và lọc ra ly Rocks chứa đá mới. Nếu dùng lòng trắng trứng để tạo lớp bọt mịn dày, hãy lắc không đá trước (Dry Shake), sau đó thêm đá lắc mạnh lần hai (Wet Shake).</p>
      `
    },
    steps: [
      { text: "Rót 60ml Bourbon, 22.5ml nước chanh vàng, 15ml syrup đường và lòng trắng trứng vào bình lắc." },
      { text: "Lắc khan không đá (Dry Shake) thật mạnh trong 12 giây để tạo bọt trứng dày mịn.", timer: 12 },
      { text: "Thêm đá đầy bình shaker và lắc ướt (Wet Shake) mạnh mẽ trong 10 giây để làm lạnh sâu.", timer: 10 },
      { text: "Lọc mịn ra ly Rocks đầy đá viên chất lượng." },
      { text: "Nhỏ 2-3 giọt Angostura Bitters lên lớp bọt trứng trắng mịn và tạo hình nghệ thuật." }
    ]
  },
  {
    id: "gin_tonic",
    name: "Gin & Tonic",
    desc: "Ly nước sủi tăm mát lạnh thảo mộc cho những buổi chiều oi ả.",
    ingredients: ["gin", "tonic"],
    strength: "low",
    flavor: "bitter",
    mood: "refreshing",
    flavorProfile: [2, 1.5, 2.5, 3, 4.5],
    details: {
      category: "Ly Dài Sảng Khoái",
      time: "2 phút pha chế",
      title: "Gin & Tonic: Tối Giản Mà Tinh Tế",
      content: `
        <p>Thức uống giải khát vĩ đại nhất mọi thời đại. Vị đắng thanh của kí-ninh trong nước tonic làm nổi bật các nốt hương bách xù trong gin.</p>
        <h3>Công Thức & Tỷ Lệ</h3>
        <ul>
          <li>45ml London Dry Gin</li>
          <li>120ml Nước Tonic mát lạnh</li>
          <li>Lát chanh tươi</li>
        </ul>
        <h3>Kỹ Thuật Pha Chế</h3>
        <p><strong>Build (Xây trực tiếp):</strong> Đổ đầy đá viên cứng vào ly Highball. Rót Gin vào trước, sau đó rót từ từ nước Tonic lạnh vào bên cạnh để tránh làm mất bọt khí. Khuấy nhẹ một vòng từ dưới lên. Trang trí bằng lát chanh và thưởng thức.</p>
      `
    },
    steps: [
      { text: "Đổ đầy đá viên cứng và trong suốt vào ly Highball thon cao." },
      { text: "Rót 45ml London Dry Gin lên trên đá." },
      { text: "Nghiêng nhẹ ly, rót từ từ 120ml nước Tonic lạnh men theo thành ly hoặc muỗng bar xoắn." },
      { text: "Dùng barspoon nâng nhẹ từ đáy ly lên một vòng để trộn đều hương vị mà không làm mất ga.", timer: 5 },
      { text: "Thả lát chanh tươi hoặc vỏ chanh vào ly, thưởng thức mát lạnh sảng khoái." }
    ]
  },
  {
    id: "gimlet",
    name: "Gimlet",
    desc: "Khô ráo, chua thanh và tràn ngập hương thơm bách xù thảo mộc mát lạnh.",
    ingredients: ["gin", "lime", "syrup"],
    strength: "balanced",
    flavor: "citrus",
    mood: "solitary",
    flavorProfile: [3.5, 2, 3.5, 0, 4],
    details: {
      category: "Cocktail Kinh Điển",
      time: "3 phút pha chế",
      title: "Gimlet: Góc Nhọn Sắc Sảo Của Gin",
      content: `
        <p>Nguyên bản được tạo ra cho các thủy thủ Hải quân Anh để phòng ngừa bệnh scurvy, Gimlet nay đã trở thành một ly cocktail thanh lịch tinh tế bậc nhất.</p>
        <h3>Công Thức & Tỷ Lệ</h3>
        <ul>
          <li>60ml Gin</li>
          <li>22.5ml Nước cốt chanh tươi</li>
          <li>15ml Simple Syrup</li>
        </ul>
        <h3>Kỹ Thuật Pha Chế</h3>
        <p><strong>Shake (Lắc):</strong> Lắc mạnh với đá và lọc ra ly Coupe chân cao. Mang lại cảm giác khô ráo, thơm ngào ngạt thảo mộc bách xù xen lẫn vị chanh sắc nét.</p>
      `
    },
    steps: [
      { text: "Làm lạnh ly Coupe bằng đá trong 3 phút." },
      { text: "Cho 60ml Gin, 22.5ml nước cốt chanh tươi và 15ml Simple Syrup vào bình shaker." },
      { text: "Đổ đầy đá viên cứng và lắc mạnh tay liên tục trong khoảng 10 giây.", timer: 10 },
      { text: "Đổ đá làm lạnh ở ly đi, lọc mịn rượu ra ly Coupe chân cao." },
      { text: "Trang trí bằng lát chanh mỏng hoặc vỏ chanh xoắn thả trong ly." }
    ]
  },
  {
    id: "old_fashioned",
    name: "Old Fashioned",
    desc: "Ly cocktail cổ xưa nhất thế giới, tôn vinh vị whiskey sồi nồng nàn ấm áp.",
    ingredients: ["whiskey", "syrup", "bitters"],
    strength: "strong",
    flavor: "sweet",
    mood: "solitary",
    flavorProfile: [4.5, 2, 0.5, 1.5, 4.5],
    details: {
      category: "Cocktail Kinh Điển",
      time: "3 phút pha chế",
      title: "Old Fashioned: Ly Cocktail Ban Sơ Nhất",
      content: `
        <p>Old Fashioned tôn vinh trực tiếp hương vị của Whiskey. Đây là ly cocktail dành cho những ai muốn thưởng thức sâu vị gỗ sồi, vani của Bourbon.</p>
        <h3>Công Thức & Tỷ Lệ</h3>
        <ul>
          <li>60ml Bourbon Whiskey</li>
          <li>7.5ml Syrup đường (hoặc 1 viên đường trắng dầm nát)</li>
          <li>2-3 giọt Angostura Bitters</li>
        </ul>
        <h3>Kỹ Thuật Pha Chế</h3>
        <p><strong>Stir (Khuấy trực tiếp):</strong> Rót syrup và bitters vào ly Rocks. Khuấy nhẹ. Thêm một viên đá lớn, rót whiskey lên trên. Khuấy nhẹ nhàng khoảng 15-20 vòng. Vắt tinh dầu vỏ cam lên bề mặt ly rượu và vành ly.</p>
      `
    },
    steps: [
      { text: "Cho 7.5ml syrup đường và 3 giọt Angostura Bitters vào ly Rocks." },
      { text: "Thêm một viên đá lập phương lớn (clear ice block) vào ly." },
      { text: "Rót 60ml Bourbon Whiskey lên trên khối đá." },
      { text: "Dùng thìa bar khuấy nhẹ nhàng khoảng 15-20 vòng xung quanh thành ly để làm lạnh chậm mà không tan quá nhiều nước.", timer: 18 },
      { text: "Vắt tinh dầu vỏ cam vàng phủ đều bề mặt rượu và thả miếng vỏ cam trang trí vào ly." }
    ]
  },
  {
    id: "boulevardier",
    name: "Boulevardier",
    desc: "Người anh em ấm áp của Negroni, thay gin bằng whiskey ngọt ngào.",
    ingredients: ["whiskey", "vermouth_sweet", "campari"],
    strength: "strong",
    flavor: "bitter",
    mood: "social",
    flavorProfile: [4.5, 3, 0.5, 4, 4.5],
    details: {
      category: "Cocktail Kinh Điển",
      time: "3 phút pha chế",
      title: "Boulevardier: Sự Ấm Áp Của Gỗ & Lửa",
      content: `
        <p>Được tạo ra tại Paris vào những năm 1920 bởi Erskine Gwynne, Boulevardier thay thế Gin trong ly Negroni bằng Bourbon Whiskey, tạo nên sự chuyển dịch hương vị từ mát lạnh thảo mộc sang ấm nồng ngọt gỗ sồi.</p>
        <h3>Công Thức & Tỷ Lệ</h3>
        <ul>
          <li>37.5ml Bourbon Whiskey</li>
          <li>30ml Campari</li>
          <li>30ml Sweet Vermouth</li>
        </ul>
        <h3>Kỹ Thuật Pha Chế</h3>
        <p><strong>Stir (Khuấy):</strong> Khuấy với đá trong ly trộn rồi lọc ra ly Rocks chứa viên đá lớn. Trang trí bằng vỏ cam vắt tinh dầu.</p>
      `
    },
    steps: [
      { text: "Chuẩn bị ly Rocks chứa viên đá lớn." },
      { text: "Đong 37.5ml Bourbon Whiskey, 30ml Campari và 30ml Sweet Vermouth vào ly trộn (mixing glass) với đá." },
      { text: "Khuấy đều bằng thìa bar trong 15-20 giây để đạt độ lạnh sâu thích hợp.", timer: 18 },
      { text: "Lọc mịn rượu rót vào ly Rocks có khối đá lớn đã chuẩn bị." },
      { text: "Vắt tinh dầu từ vỏ cam vàng lên miệng ly rượu và dùng vỏ cam để trang trí." }
    ]
  },
  {
    id: "margarita",
    name: "Margarita",
    desc: "Vị cây thùa đặc trưng hòa trong nước chanh chua muối mặn viền quanh miệng ly.",
    ingredients: ["tequila", "triple_sec", "lime", "syrup"],
    strength: "balanced",
    flavor: "citrus",
    mood: "refreshing",
    flavorProfile: [3.5, 2.5, 3.5, 0, 3.5],
    details: {
      category: "Cocktail Kinh Điển",
      time: "3 phút pha chế",
      title: "Margarita: Nụ Hôn Mặn Mà Của Mexico",
      content: `
        <p>Margarita là ly cocktail dùng tequila nổi tiếng nhất thế giới. Vị chua vắt của chanh được làm mượt bởi rượu mùi cam và viền muối tinh tế quanh miệng ly.</p>
        <h3>Công Thức & Tỷ Lệ</h3>
        <ul>
          <li>45ml Tequila (Blanco)</li>
          <li>22.5ml Triple Sec (Rượu mùi cam)</li>
          <li>22.5ml Nước cốt chanh tươi</li>
          <li>7.5ml Syrup đường</li>
        </ul>
        <h3>Kỹ Thuật Pha Chế</h3>
        <p><strong>Shake (Lắc):</strong> Làm muối viền quanh 1/2 miệng ly Rocks hoặc Coupe. Lắc tất cả nguyên liệu với đá và lọc mịn ra ly. Thêm đá nếu dùng ly Rocks.</p>
      `
    },
    steps: [
      { text: "Sử dụng một múi chanh chà quanh viền miệng ly Coupe, úp nhẹ viền ly vào đĩa muối để tạo lớp muối mỏng sang trọng." },
      { text: "Đong 45ml Tequila Blanco, 22.5ml Triple Sec, 22.5ml nước cốt chanh tươi và 7.5ml syrup vào shaker." },
      { text: "Đổ đầy đá viên cứng và lắc thật mạnh tay trong 10 giây.", timer: 10 },
      { text: "Rót lọc mịn vào ly Coupe đã viền muối (không làm rơi đá vụn vào lòng ly)." },
      { text: "Trang trí bằng một lát chanh xanh trên viền ly." }
    ]
  },
  {
    id: "mojito",
    name: "Mojito",
    desc: "Hương bạc hà cay mát quuyện cùng nước chanh đường tươi tắn sủi bọt ga.",
    ingredients: ["rum", "lime", "syrup", "mint", "soda"],
    strength: "low",
    flavor: "citrus",
    mood: "refreshing",
    flavorProfile: [2, 3, 3, 0, 4.5],
    details: {
      category: "Ly Dài Sảng Khoái",
      time: "4 phút pha chế",
      title: "Mojito: Làn Gió Mát Lành Vùng Havana",
      content: `
        <p>Mojito là thức uống mùa hè hoàn hảo, kết hợp sự tươi mát của lá bạc hà dằm nhẹ với chanh và rum trắng sủi tăm soda.</p>
        <h3>Công Thức & Tỷ Lệ</h3>
        <ul>
          <li>60ml Light Rum</li>
          <li>22.5ml Nước cốt chanh tươi</li>
          <li>15ml Simple Syrup</li>
          <li>8-10 lá bạc hà tươi</li>
          <li>Nước Club Soda rót đầy</li>
        </ul>
        <h3>Kỹ Thuật Pha Chế</h3>
        <p><strong>Muddle & Build (Dằm & Xây):</strong> Dằm nhẹ lá bạc hà với syrup và nước chanh trong ly Highball. Thêm đá bào, rót Rum vào. Dùng thìa bar đảo nhẹ. Thêm đá đầy và rót sủi tăm Club Soda lên trên. Trang trí bằng ngọn bạc hà tươi.</p>
      `
    },
    steps: [
      { text: "Cho 8-10 lá bạc hà tươi, 15ml Simple Syrup và 22.5ml nước chanh tươi vào đáy ly Highball." },
      { text: "Dùng chày dằm bar dằm nhẹ nhàng lá bạc hà giải phóng tinh dầu thơm (không dằm quá nát làm đắng).", timer: 8 },
      { text: "Đổ đá bào đầy 2/3 ly rồi rót 60ml Light Rum lên trên." },
      { text: "Khuấy đảo nhẹ bằng thìa bar từ dưới lên để các tầng hương hòa quyện.", timer: 6 },
      { text: "Bồi thêm đá bào đầy ly, rót sủi tăm Club Soda đầy mặt ly và trang trí bằng ngọn bạc hà đập nhẹ lên tay lấy mùi." }
    ]
  },
  {
    id: "manhattan",
    name: "Manhattan",
    desc: "Mượt mà quý phái, sự kết hợp giữa whiskey cay nồng và vermouth thảo mộc ngọt dịu.",
    ingredients: ["whiskey", "vermouth_sweet", "bitters"],
    strength: "strong",
    flavor: "dry",
    mood: "solitary",
    flavorProfile: [4.5, 3, 0.5, 2, 4.5],
    details: {
      category: "Cocktail Kinh Điển",
      time: "3 phút pha chế",
      title: "Manhattan: Linh Hồn Của New York",
      content: `
        <p>Manhattan là hiện thân của sự thanh lịch, dòng whiskey lúa mạch rye hoặc bourbon cay ấm hòa cùng vermouth ngọt ngào và chút đắng sâu thẳm.</p>
        <h3>Công Thức & Tỷ Lệ</h3>
        <ul>
          <li>60ml Rye/Bourbon Whiskey</li>
          <li>30ml Sweet Vermouth</li>
          <li>2 dashes Angostura Bitters</li>
        </ul>
        <h3>Kỹ Thuật Pha Chế</h3>
        <p><strong>Stir (Khuấy):</strong> Khuấy đều tất cả nguyên liệu với đá trong ly trộn khoảng 20 giây để đạt độ lạnh sâu và mượt. Lọc ra ly Coupe lạnh. Trang trí bằng quả anh đào ngâm rượu.</p>
      `
    },
    steps: [
      { text: "Làm lạnh ly Coupe trước pha chế." },
      { text: "Cho 60ml Rye Whiskey, 30ml Sweet Vermouth và 2 dashes Angostura Bitters vào ly trộn chứa đá." },
      { text: "Khuấy đều liên tục trong 20 giây để đạt độ mát sánh mịn hoàn hảo.", timer: 20 },
      { text: "Đổ đá làm lạnh ở ly Coupe đi, lọc rót rượu sánh mượt vào ly." },
      { text: "Trang trí bằng một quả anh đào ngâm rượu đỏ đậm chìm dưới đáy ly." }
    ]
  },
  {
    id: "dry_martini",
    name: "Dry Martini",
    desc: "Ly cocktail tinh khiết, khô ráo và thanh nhã, được coi là vua của thế giới cocktail.",
    ingredients: ["gin", "vermouth_dry"],
    strength: "strong",
    flavor: "dry",
    mood: "solitary",
    flavorProfile: [5, 0.5, 0.5, 1, 4.5],
    details: {
      category: "Cocktail Kinh Điển",
      time: "3 phút pha chế",
      title: "Dry Martini: Vị Vua Thanh Lịch",
      content: `
        <p>Rất ít ly cocktail mang tính biểu tượng cao như Dry Martini. Khô ráo, sắc sảo, lạnh ngắt và tinh tế vô ngần.</p>
        <h3>Công Thức & Tỷ Lệ</h3>
        <ul>
          <li>60ml London Dry Gin</li>
          <li>15ml Dry Vermouth (Vermouth khô)</li>
          <li>1 dash Orange Bitters (tùy chọn)</li>
        </ul>
        <h3>Kỹ Thuật Pha Chế</h3>
        <p><strong>Stir (Khuấy):</strong> Khuấy thật lạnh với đá khối lớn. Lọc ra ly Martini hoặc Coupe đã lạnh buốt. Trang trí bằng một quả oliu xanh hoặc vỏ chanh vàng vắt lấy tinh dầu.</p>
      `
    },
    steps: [
      { text: "Làm lạnh ly Martini dáng chữ V bằng đá." },
      { text: "Đong 60ml London Dry Gin và 15ml Dry Vermouth chất lượng vào ly trộn chứa đầy đá viên cứng." },
      { text: "Dùng thìa bar khuấy thật nhanh và êm dịu trong 20 giây để làm lạnh sâu tuyệt đối.", timer: 20 },
      { text: "Đổ đá làm lạnh ở ly Martini đi, lọc rót rượu trong vắt vào ly." },
      { text: "Trang trí bằng một xiên quả ô-liu xanh hoặc vắt dải vỏ chanh lấy tinh dầu trên bề mặt ly rượu." }
    ]
  },
  {
    id: "tom_collins",
    name: "Tom Collins",
    desc: "Giống như một ly nước chanh sủi ga mát lạnh pha thêm gin thanh mát.",
    ingredients: ["gin", "lemon", "syrup", "soda"],
    strength: "low",
    flavor: "citrus",
    mood: "social",
    flavorProfile: [2, 2.5, 3.5, 0, 3.5],
    details: {
      category: "Ly Dài Sảng Khoái",
      time: "3 phút pha chế",
      title: "Tom Collins: Giải Nhiệt Ngày Hè",
      content: `
        <p>Được đặt tên theo một trò đùa ở New York vào thế kỷ 19, Tom Collins là sự kết hợp sảng khoái tuyệt vời giữa Gin, chanh vàng, đường và soda.</p>
        <h3>Công Thức & Tỷ Lệ</h3>
        <ul>
          <li>60ml London Dry Gin</li>
          <li>30ml Nước cốt chanh vàng (lemon)</li>
          <li>22.5ml Simple Syrup</li>
          <li>Nước Club Soda rót đầy</li>
        </ul>
        <h3>Kỹ Thuật Pha Chế</h3>
        <p><strong>Build (Xây trực tiếp):</strong> Rót Gin, chanh vàng và syrup đường vào ly Highball đầy đá. Khuấy nhẹ. Rót soda lên trên. Trang trí bằng một lát chanh vàng và quả anh đào.</p>
      `
    },
    steps: [
      { text: "Đổ đầy đá viên cứng vào ly Highball/Collins lớn." },
      { text: "Rót 60ml London Dry Gin, 30ml nước chanh vàng vắt và 22.5ml Simple Syrup trực tiếp vào ly." },
      { text: "Khuấy đảo nhẹ nhàng để các nguyên liệu hòa trộn đều dưới nhiệt độ đá.", timer: 5 },
      { text: "Rót nước Club Soda lạnh từ từ cho đến khi đầy ly." },
      { text: "Trang trí bằng một lát chanh vàng và một quả anh đào ngâm xiên gác miệng ly." }
    ]
  },
  
  /* NEW CLASSIC RECIPES ADDED IN UPGRADE */
  {
    id: "espresso_martini",
    name: "Espresso Martini",
    desc: "Đậm vị cà phê Espresso mới pha, bọt mịn màng quyến rũ hòa quyện cùng vodka êm dịu.",
    ingredients: ["vodka", "kahlua", "espresso", "syrup"],
    strength: "balanced",
    flavor: "aromatic",
    mood: "social",
    flavorProfile: [3, 2.5, 0.5, 2, 5],
    details: {
      category: "Cocktail Kinh Điển",
      time: "4 phút pha chế",
      title: "Espresso Martini: Sự Thức Tỉnh Đêm Muộn",
      content: `
        <p>Được tạo ra bởi Dick Bradsell vào năm 1983 tại London, Espresso Martini là sự kết hợp táo bạo giữa chất cồn êm dịu của Vodka và sự tỉnh táo mãnh liệt từ cà phê Espresso hảo hạng.</p>
        <h3>Công Thức & Tỷ Lệ</h3>
        <ul>
          <li>45ml Vodka</li>
          <li>30ml Cà phê Espresso nóng hổi (hoặc cold brew cô đặc)</li>
          <li>20ml Rượu mùi cà phê (Kahlua hoặc tương đương)</li>
          <li>10ml Simple Syrup</li>
        </ul>
        <h3>Kỹ Thuật Pha Chế</h3>
        <p><strong>Shake (Lắc):</strong> Rót tất cả nguyên liệu vào bình lắc. Đổ đầy đá cứng và lắc thật mạnh, thật nhanh trong 10-12 giây. Việc lắc mạnh là tối quan trọng để tạo ra lớp bọt crema dày mịn màng màu nâu sáng đặc trưng trên bề mặt. Lọc mịn ra ly Coupe đã được làm lạnh. Trang trí bằng 3 hạt cà phê xếp hình cánh hoa trên lớp bọt.</p>
        <blockquote>"Ba hạt cà phê trên lớp bọt tượng trưng cho: Sức khỏe, Sự giàu có và Hạnh phúc. Đừng bỏ quên chúng."</blockquote>
      `
    },
    steps: [
      { text: "Làm lạnh ly Coupe chân cao bằng cách cho đá hoặc cất vào tủ đông." },
      { text: "Chuẩn bị 30ml cà phê Espresso nóng hổi để giữ lớp bọt crema tự nhiên từ hạt cà phê." },
      { text: "Rót 45ml Vodka, 20ml Kahlua, 30ml Espresso và 10ml Syrup đường vào bình Boston Shaker." },
      { text: "Đổ đầy đá viên cứng và lắc mạnh mẽ liên tục trong 12 giây để tạo bọt crema dày đặc mịn.", timer: 12 },
      { text: "Lọc mịn (double strain) qua rây lưới vào ly Coupe và trang trí bằng 3 hạt cà phê xếp hình cánh hoa." }
    ]
  },
  {
    id: "moscow_mule",
    name: "Moscow Mule",
    desc: "Sự kết hợp cay nồng của bia gừng, chanh tươi mát lạnh trong chiếc cốc đồng biểu tượng.",
    ingredients: ["vodka", "lime", "ginger_beer"],
    strength: "low",
    flavor: "citrus",
    mood: "social",
    flavorProfile: [2, 2, 3, 0.5, 3.5],
    details: {
      category: "Ly Dài Sảng Khoái",
      time: "3 phút pha chế",
      title: "Moscow Mule: Cú Đá Của Lừa Mát Lạnh",
      content: `
        <p>Ra đời tại New York năm 1941, Moscow Mule đã giúp vực dậy cả ngành Vodka Mỹ nhờ sự kết hợp sảng khoái giữa Vodka, chanh xanh và bia gừng cay nồng (ginger beer).</p>
        <h3>Công Thức & Tỷ Lệ</h3>
        <ul>
          <li>60ml Vodka</li>
          <li>15ml Nước cốt chanh xanh tươi</li>
          <li>120ml Bia gừng (Ginger Beer - không chứa cồn) rót đầy</li>
        </ul>
        <h3>Kỹ Thuật Pha Chế</h3>
        <p><strong>Build (Xây trực tiếp):</strong> Rót Vodka và nước chanh vào cốc đồng (Copper Mug) đầy đá bào hoặc đá viên. Rót đầy bia gừng lên trên. Khuấy nhẹ một vòng. Trang trí bằng một lát chanh và một nhánh bạc hà tươi.</p>
        <blockquote>"Chiếc cốc đồng đặc trưng không chỉ để làm đẹp, nó truyền nhiệt cực tốt giúp ly rượu giữ được độ lạnh buốt tê tái từ ngụm đầu đến ngụm cuối."</blockquote>
      `
    },
    steps: [
      { text: "Đổ đầy đá viên hoặc đá bào vào chiếc cốc đồng (hoặc ly Highball)." },
      { text: "Rót 60ml Vodka và 15ml nước cốt chanh xanh tươi vào cốc." },
      { text: "Rót đầy khoảng 120ml bia gừng lạnh vào cốc." },
      { text: "Khuấy nhẹ nhàng trong 5 giây từ dưới lên để trộn đều hương vị mà không làm bay ga.", timer: 5 },
      { text: "Trang trí với một lát chanh tươi và ngọn bạc hà vỗ nhẹ." }
    ]
  },
  {
    id: "sazerac",
    name: "Sazerac",
    desc: "Cocktail cổ điển New Orleans, nồng nàn cay gỗ sồi cognac rye với hương hồi absinthe huyền bí.",
    ingredients: ["whiskey", "cognac", "absinthe", "syrup", "bitters"],
    strength: "strong",
    flavor: "bitter",
    mood: "solitary",
    flavorProfile: [5, 2.5, 0.5, 4, 4.5],
    details: {
      category: "Cocktail Kinh Điển",
      time: "4 phút pha chế",
      title: "Sazerac: Linh Hồn Của New Orleans",
      content: `
        <p>Được coi là một trong những ly cocktail lâu đời nhất nước Mỹ, Sazerac kết hợp Rye Whiskey hoặc Cognac cùng với giọt Peychaud's bitters thảo mộc ngọt ngào và một lớp tráng Absinthe huyền bí quanh ly.</p>
        <h3>Công Thức & Tỷ Lệ</h3>
        <ul>
          <li>60ml Rye Whiskey (hoặc Cognac)</li>
          <li>10ml Absinthe (dùng để tráng ly)</li>
          <li>5ml Syrup đường</li>
          <li>3 dashes Peychaud's Bitters (bitters đỏ đặc trưng vùng New Orleans)</li>
        </ul>
        <h3>Kỹ Thuật Pha Chế</h3>
        <p><strong>Stir & Rinse (Khuấy và Tráng ly):</strong> Chuẩn bị hai ly Rocks. Ly thứ nhất đổ đầy đá để làm lạnh. Ly thứ hai dùng để trộn: cho đường, bitters và whiskey vào khuấy đều với đá. Đổ đá ở ly thứ nhất đi, nhỏ vài giọt Absinthe vào tráng đều lòng ly rồi đổ absinthe thừa ra ngoài. Lọc rượu từ ly trộn sang ly thứ nhất (không đá). Vắt tinh dầu vỏ chanh vàng lên trên.</p>
      `
    },
    steps: [
      { text: "Cho đá vào ly Rocks thứ nhất để làm lạnh lòng ly." },
      { text: "Ở ly thứ hai, khuấy đều 60ml Rye Whiskey (hoặc Cognac), 5ml syrup đường và 3 giọt Peychaud's Bitters với đá trong 20 giây.", timer: 20 },
      { text: "Đổ đá ở ly thứ nhất đi, rót 10ml Absinthe vào xoay tròn để tráng lòng ly rồi đổ phần thừa ra ngoài." },
      { text: "Lọc mịn rượu từ ly thứ hai sang ly thứ nhất đã tráng Absinthe (không đá)." },
      { text: "Vắt tinh dầu vỏ chanh vàng lên bề mặt ly rượu và gài mép ly để trang trí." }
    ]
  },
  {
    id: "clover_club",
    name: "Clover Club",
    desc: "Màu hồng mâm xôi xinh xắn, lớp bọt trứng dày mượt mượt quện hương gin thảo mộc chua ngọt.",
    ingredients: ["gin", "lime", "raspberry_syrup", "egg_white"],
    strength: "balanced",
    flavor: "citrus",
    mood: "social",
    flavorProfile: [3, 3, 3.5, 0, 3.5],
    details: {
      category: "Cocktail Kinh Điển",
      time: "4 phút pha chế",
      title: "Clover Club: Vẻ Đẹp Hồng Quý Phái",
      content: `
        <p>Tên của một câu lạc bộ quý ông tại Philadelphia thế kỷ 19, Clover Club là ly cocktail có màu hồng mâm xôi lộng lẫy và lớp bọt mịn màng như nhung từ lòng trắng trứng.</p>
        <h3>Công Thức & Tỷ Lệ</h3>
        <ul>
          <li>45ml Gin</li>
          <li>15ml Nước cốt chanh xanh tươi</li>
          <li>15ml Syrup mâm xôi (Raspberry Syrup)</li>
          <li>15ml Lòng trắng trứng tươi</li>
        </ul>
        <h3>Kỹ Thuật Pha Chế</h3>
        <p><strong>Dry & Wet Shake (Lắc khan và Lắc ướt):</strong> Cho tất cả nguyên liệu vào shaker. Lắc thật mạnh không đá (Dry Shake) trong 15 giây để lòng trắng trứng bông bọt mịn. Sau đó thêm đá đầy, lắc mạnh lần hai (Wet Shake) trong 10 giây để làm lạnh. Lọc mịn ra ly Coupe. Trang trí bằng 3 quả mâm xôi xỏ tăm.</p>
      `
    },
    steps: [
      { text: "Cho 45ml Gin, 15ml nước chanh xanh, 15ml syrup mâm xôi và 15ml lòng trắng trứng vào bình lắc." },
      { text: "Lắc thật mạnh không có đá (Dry Shake) trong 15 giây cho lòng trắng trứng bông bọt mịn.", timer: 15 },
      { text: "Mở shaker, thêm đầy đá và lắc mạnh mẽ lần hai trong 10 giây để làm lạnh buốt rượu.", timer: 10 },
      { text: "Lọc mịn (double strain) ra ly Coupe đã được làm lạnh." },
      { text: "Trang trí bằng 3 quả mâm xôi tươi xiên qua tăm đặt trên miệng ly." }
    ]
  },
  {
    id: "sidecar",
    name: "Sidecar",
    desc: "Mượt mà sang trọng của rượu brandy nho khô, hòa vị cam tươi và chanh vàng sắc sảo.",
    ingredients: ["brandy", "triple_sec", "lemon"],
    strength: "strong",
    flavor: "citrus",
    mood: "solitary",
    flavorProfile: [4, 2, 3.5, 0, 4],
    details: {
      category: "Cocktail Kinh Điển",
      time: "3 phút pha chế",
      title: "Sidecar: Đỉnh Cao Của Brandy & Cam Chanh",
      content: `
        <p>Ra đời tại Paris sau Thế chiến thứ nhất, Sidecar là một trong những đại diện xuất sắc nhất dòng cocktail Sour sử dụng rượu nền Brandy (Cognac), đem lại vị ấm áp tinh tế vô cùng sâu sắc.</p>
        <h3>Công Thức & Tỷ Lệ</h3>
        <ul>
          <li>50ml Cognac hoặc Brandy</li>
          <li>20ml Triple Sec (rượu mùi cam)</li>
          <li>20ml Nước cốt chanh vàng (Lemon)</li>
        </ul>
        <h3>Kỹ Thuật Pha Chế</h3>
        <p><strong>Shake (Lắc):</strong> Viền một lớp đường mỏng quanh miệng ly Coupe (tùy chọn). Cho tất cả nguyên liệu vào bình shaker chứa đầy đá. Lắc mạnh trong 10-12 giây và lọc mịn ra ly. Trang trí bằng vỏ cam xoắn.</p>
      `
    },
    steps: [
      { text: "Tạo viền đường mỏng (sugar rim) quanh 1/2 miệng ly Coupe chân cao." },
      { text: "Đong 50ml Brandy/Cognac, 20ml Triple Sec và 20ml nước cốt chanh vàng vào shaker." },
      { text: "Đổ đầy đá viên cứng và lắc thật mạnh trong 12 giây.", timer: 12 },
      { text: "Lọc mịn rượu ra ly Coupe đã chuẩn bị." },
      { text: "Vắt tinh dầu vỏ cam lên bề mặt ly rượu để tạo hương thơm quyến rũ." }
    ]
  },
  {
    id: "french_75",
    name: "French 75",
    desc: "Kiêu sa lấp lánh, hương sâm banh sủi bọt ngào ngạt cùng gin thảo mộc và chanh tươi mát.",
    ingredients: ["gin", "lemon", "syrup", "champagne"],
    strength: "balanced",
    flavor: "citrus",
    mood: "social",
    flavorProfile: [3.5, 2, 3, 0.5, 4.5],
    details: {
      category: "Cocktail Kinh Điển",
      time: "3 phút pha chế",
      title: "French 75: Cú Bắn Của Khẩu Đại Bác Pháp",
      content: `
        <p>Đặt tên theo khẩu pháo 75mm nổi tiếng của Pháp vì độ mạnh đáng gờm ẩn sau vẻ ngoài thanh lịch lấp lánh. Sự pha trộn giữa Gin chua ngọt mát lành và rượu sâm banh Champagne.</p>
        <h3>Công Thức & Tỷ Lệ</h3>
        <ul>
          <li>30ml Gin</li>
          <li>15ml Nước cốt chanh vàng</li>
          <li>15ml Simple Syrup</li>
          <li>60ml Champagne (hoặc Prosecco sủi tăm) rót đầy</li>
        </ul>
        <h3>Kỹ Thuật Pha Chế</h3>
        <p><strong>Shake & Top (Lắc và Rót đầy):</strong> Lắc Gin, nước chanh và syrup đường với đá. Lọc ra ly sâm banh (Flute) chân cao thon dài. Rót từ từ Champagne lạnh lên trên. Khuấy nhẹ nhàng. Trang trí bằng một dải vỏ chanh vàng xoắn dài thả trong ly.</p>
      `
    },
    steps: [
      { text: "Làm lạnh ly Champagne Flute thon dài bằng đá hoặc cất tủ đông." },
      { text: "Lắc 30ml Gin, 15ml nước chanh vàng và 15ml syrup đường với đá trong 10 giây.", timer: 10 },
      { text: "Đổ đá làm lạnh ở ly Flute đi, lọc rượu đã lắc vào đáy ly." },
      { text: "Rót từ từ 60ml Champagne lạnh đầy ly." },
      { text: "Khuấy thật nhẹ bằng muỗng bar xoắn và trang trí bằng vỏ chanh xoắn dài thả dọc lòng ly." }
    ]
  },
  {
    id: "penicillin",
    name: "Penicillin",
    desc: "Vị khói than bùn sâu thẳm quyến rũ hòa cùng vị cay ấm của gừng tươi và mật ong ngọt ngào.",
    ingredients: ["whiskey", "lemon", "syrup", "ginger_beer"],
    strength: "balanced",
    flavor: "citrus",
    mood: "solitary",
    flavorProfile: [3.5, 3, 3, 1, 4.5],
    details: {
      category: "Cocktail Hiện Đại",
      time: "4 phút pha chế",
      title: "Penicillin: Liều Thuốc Cho Tâm Hồn",
      content: `
        <p>Được tạo ra bởi bartender huyền thoại Sam Ross vào năm 2005 tại Milk & Honey (New York), Penicillin nhanh chóng trở thành một trong những ly cocktail hiện đại nổi tiếng nhất thế giới nhờ sự kết hợp tinh tế giữa rượu Scotch Whiskey, chanh, mật ong và gừng.</p>
        <h3>Công Thức & Tỷ Lệ</h3>
        <ul>
          <li>60ml Blended Scotch Whisky</li>
          <li>22.5ml Nước cốt chanh vàng tươi</li>
          <li>22.5ml Honey-Ginger Syrup (Syrup mật ong & gừng tươi)</li>
          <li>7.5ml Peated Islay Single Malt Whisky (để rót nổi trên bề mặt)</li>
        </ul>
        <h3>Kỹ Thuật Pha Chế</h3>
        <p><strong>Shake & Float (Lắc và Rót nổi):</strong> Lắc đều Blended Scotch, chanh và syrup mật ong gừng với đá viên. Lọc mịn ra ly Rocks chứa một viên đá lớn. Cuối cùng, nhẹ nhàng rót Single Malt Islay Scotch lên trên mặt ly qua muỗng bar để tạo một lớp hương khói nồng nàn lan tỏa ngay khi ghé môi ngửi.</p>
        <blockquote>"Một ly Penicillin hoàn hảo sẽ đánh thức mọi giác quan của bạn bằng lớp hương khói ấm áp ban đầu, sau đó dẫn lối vào vị ngọt cay của mật ong gừng và vị chua sáng khoái."</blockquote>
      `
    },
    steps: [
      { text: "Chuẩn bị ly Rocks chứa sẵn một viên đá lớn trong suốt." },
      { text: "Đong 60ml Blended Scotch Whisky, 22.5ml nước chanh vàng và 22.5ml Honey-Ginger Syrup vào bình lắc." },
      { text: "Thêm đá viên cứng đầy bình lắc và lắc mạnh mẽ liên tục trong 12 giây.", timer: 12 },
      { text: "Lọc mịn (double strain) rượu ra ly Rocks đã chuẩn bị." },
      { text: "Dùng muỗng bar xoắn rót nổi 7.5ml Peated Single Malt Whisky lên bề mặt ly để tạo tầng khói đặc trưng." },
      { text: "Trang trí bằng một miếng gừng ngâm đường hoặc vỏ chanh vàng." }
    ]
  },
  {
    id: "paper_plane",
    name: "Paper Plane",
    desc: "Màu cam san hô rực rỡ, vị chua ngọt đắng dịu vô cùng cân bằng từ Bourbon và thảo mộc.",
    ingredients: ["whiskey", "lemon", "campari", "triple_sec"],
    strength: "balanced",
    flavor: "bitter",
    mood: "social",
    flavorProfile: [3, 3, 3.5, 2.5, 4],
    details: {
      category: "Cocktail Hiện Đại",
      time: "3 phút pha chế",
      title: "Paper Plane: Chuyến Bay Trên Đôi Cánh Thảo Mộc",
      content: `
        <p>Được đặt tên theo bài hát "Paper Planes" của M.I.A, ly cocktail này do Sam Ross sáng tạo vào năm 2007 cho quầy bar The Violet Hour (Chicago). Sử dụng công thức bốn phần bằng nhau (equal parts) độc đáo, mang lại sự kết hợp rực rỡ giữa Bourbon ngọt ấm và các dòng thảo mộc tinh tế.</p>
        <h3>Công Thức & Tỷ Lệ</h3>
        <ul>
          <li>22.5ml Bourbon Whiskey</li>
          <li>22.5ml Aperol (hoặc Campari thay thế nhẹ)</li>
          <li>22.5ml Amaro Nonino (hoặc Vermouth ngọt nhẹ)</li>
          <li>22.5ml Nước cốt chanh vàng (Lemon)</li>
        </ul>
        <h3>Kỹ Thuật Pha Chế</h3>
        <p><strong>Shake (Lắc):</strong> Rót tất cả nguyên liệu với tỷ lệ bằng nhau vào shaker đầy đá. Lắc mạnh trong 10-12 giây và lọc mịn ra ly Coupe đã được làm lạnh. Không trang trí, để nguyên màu sắc cam san hô tuyệt đẹp tự nhiên tỏa sáng.</p>
      `
    },
    steps: [
      { text: "Làm lạnh ly Coupe chân cao bằng đá." },
      { text: "Đong chính xác 22.5ml Bourbon, 22.5ml Aperol (hoặc Campari), 22.5ml Amaro Nonino và 22.5ml nước chanh vàng vào bình shaker." },
      { text: "Đổ đầy đá viên cứng và lắc mạnh mẽ trong 11 giây.", timer: 11 },
      { text: "Lọc mịn rượu ra ly Coupe chân cao thanh lịch (không dùng đá)." }
    ]
  },
  {
    id: "bees_knees",
    name: "Bee's Knees",
    desc: "Mật ong rừng ngọt ngào hòa cùng chanh vàng tươi tắn nâng đỡ hương bách xù thảo mộc của Gin.",
    ingredients: ["gin", "lemon", "syrup"],
    strength: "balanced",
    flavor: "citrus",
    mood: "social",
    flavorProfile: [3, 3.5, 3.5, 0, 4],
    details: {
      category: "Cocktail Kinh Điển",
      time: "3 phút pha chế",
      title: "Bee's Knees: Tuyệt Phẩm Thời Kỳ Cấm Luật",
      content: `
        <p>Thuật ngữ "Bee's Knees" trong tiếng lóng những năm 1920 có nghĩa là "thứ xuất sắc nhất". Ly cocktail này ra đời trong thời kỳ cấm luật tại Mỹ, khi mật ong và chanh vàng được dùng để che giấu mùi nồng gắt của các loại rượu Gin tự nấu (Bathtub Gin) kém chất lượng thời bấy giờ.</p>
        <h3>Công Thức & Tỷ Lệ</h3>
        <ul>
          <li>60ml London Dry Gin</li>
          <li>22.5ml Nước cốt chanh vàng tươi</li>
          <li>22.5ml Honey Syrup (Syrup mật ong tỷ lệ 1:1 hoặc 2:1)</li>
        </ul>
        <h3>Kỹ Thuật Pha Chế</h3>
        <p><strong>Shake (Lắc):</strong> Lắc đều các nguyên liệu với đá viên cứng để làm loãng mật ong sánh mịn và hòa quyện cùng acid chanh. Rót ra ly Coupe đã làm lạnh. Trang trí bằng vỏ chanh vàng xoắn.</p>
      `
    },
    steps: [
      { text: "Làm lạnh ly Coupe chân cao." },
      { text: "Đong 60ml London Dry Gin, 22.5ml nước cốt chanh vàng tươi và 22.5ml Honey Syrup vào bình lắc." },
      { text: "Cho đầy đá viên cứng và lắc thật mạnh để hòa tan syrup mật ong trong 10 giây.", timer: 10 },
      { text: "Đổ đá làm lạnh ở ly đi, lọc mịn rượu rót vào ly Coupe." },
      { text: "Vắt vỏ chanh vàng lấy tinh dầu lên mặt ly và gài vỏ chanh trang trí." }
    ]
  },
  {
    id: "aviation",
    name: "Aviation",
    desc: "Sắc tím mây trời thơ mộng, hương hoa anh đào và violet hòa quyện cùng nốt chanh rực rỡ.",
    ingredients: ["gin", "lemon", "syrup"],
    strength: "balanced",
    flavor: "aromatic",
    mood: "solitary",
    flavorProfile: [3, 2.5, 3.5, 0, 4.5],
    details: {
      category: "Cocktail Kinh Điển",
      time: "4 phút pha chế",
      title: "Aviation: Sắc Lam Mây Trời Giữa Tầng Khí Quyển",
      content: `
        <p>Aviation được sáng tạo bởi Hugo Ensslin vào đầu thế kỷ 20 tại New York. Điểm độc đáo nhất tạo nên linh hồn của Aviation chính là rượu mùi hoa violet (Crème de Violette) mang đến sắc lam tím nhạt lãng mạn như bầu trời hoàng hôn nhìn từ buồng lái máy bay.</p>
        <h3>Công Thức & Tỷ Lệ</h3>
        <ul>
          <li>45ml Gin (London Dry hoặc Floral Gin)</li>
          <li>15ml Maraschino Liqueur (Rượu mùi anh đào)</li>
          <li>7.5ml Crème de Violette (Rượu mùi hoa violet)</li>
          <li>15ml Nước cốt chanh vàng tươi</li>
        </ul>
        <h3>Kỹ Thuật Pha Chế</h3>
        <p><strong>Shake (Lắc):</strong> Lắc thật nhanh các nguyên liệu với đá viên để giữ độ trong và sắc tím óng ánh, sau đó lọc mịn ra ly Coupe lạnh chân cao. Sự kết hợp giữa thảo mộc Gin, ngọt sâu anh đào và hương hoa phấn Violet tạo nên hương vị bay bổng khó quên.</p>
      `
    },
    steps: [
      { text: "Làm lạnh ly Coupe bằng đá trước." },
      { text: "Đong chính xác 45ml Gin, 15ml Maraschino Liqueur, 7.5ml Crème de Violette và 15ml nước cốt chanh vàng vào shaker." },
      { text: "Đổ đầy đá viên cứng và lắc nhanh mạnh trong 10 giây để làm lạnh sâu.", timer: 10 },
      { text: "Bỏ đá làm lạnh ở ly đi, lọc mịn cocktail rót vào ly Coupe." },
      { text: "Trang trí bằng một trái anh đào ngâm đường chìm dưới đáy ly." }
    ]
  },
  {
    id: "paloma",
    name: "Paloma",
    desc: "Cân bằng hoàn hảo giữa tequila nồng ấm, vị chua bưởi hồng tươi sáng và chút muối mặn mòi nơi vành ly.",
    ingredients: ["tequila", "lime", "grapefruit_soda", "syrup"],
    strength: "balanced",
    flavor: "citrus",
    mood: "refreshing",
    flavorProfile: [3, 4, 3, 1, 3.5],
    details: {
      category: "Cocktail Kinh Điển",
      time: "3 phút pha chế",
      title: "Paloma: Bản Tình Ca Rực Rỡ Từ Đất Nước Mexico",
      content: `
        <p>Paloma (nghĩa là "chim bồ câu" trong tiếng Tây Ban Nha) là một trong những món cocktail được yêu thích nhất tại Mexico, thậm chí vượt qua cả Margarita về độ phổ biến hằng ngày. Sự hấp dẫn của Paloma đến từ sự sảng khoái tột độ khi vị cay ấm nồng nàn của Tequila được làm dịu bằng ga sủi của soda bưởi hồng thơm nức.</p>
        <h3>Công Thức & Tỷ Lệ</h3>
        <ul>
          <li>50ml Rượu Tequila Reposado hoặc Blanco</li>
          <li>15ml Nước cốt chanh xanh tươi</li>
          <li>100ml Nước soda bưởi hồng (Grapefruit Soda)</li>
          <li>1 thìa nhỏ syrup đường (nếu thích ngọt)</li>
          <li>Muối biển (để viền vành ly)</li>
        </ul>
        <h3>Kỹ Thuật Pha Chế</h3>
        <p><strong>Build (Xây dựng trực tiếp):</strong> Chuẩn bị ly Highball viền muối quanh miệng ly, xếp đầy đá viên. Rót Tequila và chanh xanh vào ly, khuấy nhẹ. Tiếp tục rót đầy soda bưởi hồng lên trên, khuấy nhẹ một lần nữa để hòa quyện và thưởng thức ngay.</p>
      `
    },
    steps: [
      { text: "Dùng miếng chanh xát quanh vành ly Highball rồi úp ngược xuống đĩa muối biển để tạo viền muối mỏng." },
      { text: "Đổ đầy đá viên vào ly Highball." },
      { text: "Đong 50ml Tequila và 15ml nước cốt chanh xanh tươi rót trực tiếp vào ly." },
      { text: "Rót từ từ 100ml nước soda bưởi hồng lên trên cùng để tránh mất ga." },
      { text: "Khuấy nhẹ nhàng từ dưới lên trong 5 giây để hòa hợp hương vị và trang trí bằng một lát bưởi hồng hoặc lát chanh.", timer: 5 }
    ]
  },
  {
    id: "mai_tai",
    name: "Mai Tai",
    desc: "Biểu tượng rực rỡ của văn hóa Tiki, kết hợp Rum đậm đà cùng siro hạnh nhân ngọt bùi thơm phức.",
    ingredients: ["rum", "lime", "triple_sec", "orgeat_syrup", "syrup"],
    strength: "strong",
    flavor: "sweet",
    mood: "refreshing",
    flavorProfile: [4, 3, 4, 0.5, 4.5],
    details: {
      category: "Cocktail Kinh Điển",
      time: "4 phút pha chế",
      title: "Mai Tai: Hương Vị Thiên Đường Nhiệt Đới Đậm Chất Tiki",
      content: `
        <p>Được sáng tạo bởi Victor J. Bergeron (Trader Vic) vào năm 1944, Mai Tai mang ý nghĩa là "Tuyệt vời nhất" trong tiếng Tahiti. Đây là ly cocktail định hình cho phong cách Tiki: nhiều loại rum phối trộn, vị chua thanh chanh xanh kết hợp cùng hương hạnh nhân bùi ngậy độc đáo từ Orgeat Syrup.</p>
        <h3>Công Thức & Tỷ Lệ</h3>
        <ul>
          <li>30ml Amber Rum (Rum vàng)</li>
          <li>30ml Dark Rum (Rum đen lâu năm)</li>
          <li>15ml Orange Curaçao hoặc Triple Sec</li>
          <li>15ml Siro hạnh nhân (Orgeat Syrup)</li>
          <li>20ml Nước cốt chanh xanh tươi</li>
          <li>7.5ml Syrup đường</li>
        </ul>
        <h3>Kỹ Thuật Pha Chế</h3>
        <p><strong>Shake (Lắc):</strong> Cho tất cả nguyên liệu (trừ Dark Rum nếu muốn thả nổi ở trên) vào shaker chứa đá đập nhỏ (crushed ice). Lắc mạnh trong 10 giây rồi đổ cả rượu và đá ra ly Rocks. Rót Dark Rum lên bề mặt để tạo hiệu ứng phân tầng. Trang trí bằng một nhánh bạc hà tươi và một lát chanh.</p>
      `
    },
    steps: [
      { text: "Đong 30ml Amber Rum, 15ml Orange Curaçao (hoặc Triple Sec), 15ml Orgeat Syrup, 20ml nước cốt chanh xanh và 7.5ml syrup đường vào bình shaker." },
      { text: "Thêm đá bào hoặc đá đập nhỏ vào bình và lắc mạnh tay trong khoảng 10 giây để làm lạnh nhanh.", timer: 10 },
      { text: "Rót toàn bộ hỗn hợp cả đá bào ra ly Rocks." },
      { text: "Rót nhẹ nhàng 30ml Dark Rum lên bề mặt ly để tạo tầng rượu sẫm màu lơ lửng." },
      { text: "Trang trí bằng ngọn bạc hà tươi vỗ nhẹ (để giải phóng tinh dầu thơm) cùng một lát chanh và thưởng thức bằng ống hút." }
    ]
  },
  {
    id: "aperol_spritz",
    name: "Aperol Spritz",
    desc: "Sắc cam hoàng hôn rực rỡ của nước Ý, sủi tăm ga Prosecco mát lạnh pha chút đắng dịu sảng khoái.",
    ingredients: ["aperol", "champagne", "soda"],
    strength: "low",
    flavor: "bitter",
    mood: "social",
    flavorProfile: [3.5, 2, 2, 3, 4],
    details: {
      category: "Cocktail Kinh Điển",
      time: "2 phút pha chế",
      title: "Aperol Spritz: Khởi Đầu Cho Buổi Chiều Ý Đích Thực",
      content: `
        <p>Aperol Spritz là biểu tượng của văn hóa Aperitivo (khai vị) miền Bắc nước Ý. Với công thức 3-2-1 huyền thoại, ly cocktail này là sự cân bằng tuyệt mỹ giữa vị ngọt đắng cam thảo của Aperol, men say lấp lánh của vang sủi Prosecco và độ thanh mát của Club Soda.</p>
        <h3>Công Thức & Tỷ Lệ (Tỷ lệ 3-2-1)</h3>
        <ul>
          <li>90ml Vang sủi Prosecco (hoặc Champagne khô)</li>
          <li>60ml Aperol</li>
          <li>30ml Club Soda</li>
          <li>Một lát cam tươi</li>
        </ul>
        <h3>Kỹ Thuật Pha Chế</h3>
        <p><strong>Build (Trực tiếp trong ly):</strong> Dùng ly vang lớn (Copa), đổ đầy đá viên lớn. Rót Prosecco vào trước (để tránh Aperol đọng đáy ly), tiếp theo rót Aperol theo vòng tròn và cuối cùng là Club Soda. Khuấy nhẹ một vòng để giữ ga sủi. Trang trí bằng một lát cam lớn.</p>
      `
    },
    steps: [
      { text: "Chọn ly vang lớn (ly Wine glass hoặc Copa) và đổ đầy đá viên lớn." },
      { text: "Rót 90ml Prosecco (vang sủi) vào ly trước tiên." },
      { text: "Rót tiếp 60ml Aperol theo chuyển động vòng tròn quanh ly." },
      { text: "Thêm 30ml Club Soda mát lạnh lên trên." },
      { text: "Khuấy cực kỳ nhẹ nhàng một vòng để các thành phần tự hòa quyện mà không làm mất ga sủi bọt." },
      { text: "Thả một lát cam tươi vào ly và thưởng thức cùng bạn bè." }
    ]
  }
];

const PAIRING_DATA = {
  seafood: {
    id: "seafood",
    name: "Hải Sản & Đồ Sống",
    emoji: "🐟",
    desc: "Các món ăn tươi sống hoặc chế biến nhẹ như hàu sống, gỏi cá, sushi, tôm luộc, cua hấp.",
    science: "Hải sản có độ ngọt tự nhiên thanh nhẹ và vị umami đậm đà, nhưng dễ bị lấn át bởi rượu quá mạnh và có mùi tanh nhẹ của đại dương. Rượu có nồng độ acid cao (như chanh vàng, chanh xanh trong cocktail hoặc vị chua thanh của vang trắng) đóng vai trò như một chất tẩy vị, cắt đứt phân tử mùi tanh và đánh thức vị ngọt ngào tinh khiết của thịt hải sản.",
    rule: "Chua thanh át vị tanh, cồn nhẹ tôn vị ngọt cát biển.",
    drinks: [
      { id: "dry_martini", name: "Dry Martini", type: "recipe" },
      { id: "gimlet", name: "Gimlet", type: "recipe" },
      { id: "french_75", name: "French 75", type: "recipe" },
      { id: "spirit-gin", name: "Rượu Gin", type: "article" }
    ],
    foods: "Hàu đá lạnh, Sashimi cá hồi, Cá chẽm nướng muối chanh, Tôm hùm hấp bơ tỏi.",
    color: "rgba(26, 122, 115, 0.15)",
    strokeColor: "var(--teal)",
    icon: "seafood"
  },
  meat: {
    id: "meat",
    name: "Thịt Đỏ & Đồ Nướng",
    emoji: "🥩",
    desc: "Bít tết bò, sườn cừu nướng, thịt heo quay giòn, ngỗng nướng hoặc thịt hun khói.",
    science: "Thịt đỏ chứa hàm lượng protein và chất béo bão hòa cực kỳ cao. Khi bạn nhấp một ngụm rượu đậm đà (như Old Fashioned với Bourbon cay nồng vị sồi, hoặc vang Cabernet Sauvignon giàu tannin), các tannin này sẽ liên kết cơ học với các protein trong nước bọt và chất béo của thịt, làm sạch vòm họng, đồng thời làm thớ thịt trở nên mềm mại và mọng nước hơn rõ rệt.",
    rule: "Tannin liên kết đạm, cồn đậm hòa tan chất béo mỡ màng.",
    drinks: [
      { id: "old_fashioned", name: "Old Fashioned", type: "recipe" },
      { id: "boulevardier", name: "Boulevardier", type: "recipe" },
      { id: "sazerac", name: "Sazerac", type: "recipe" },
      { id: "spirit-whiskey", name: "Bourbon & Rye Whiskey", type: "article" }
    ],
    foods: "Ribeye Steak sốt tiêu đen, Sườn cừu nướng hương thảo, Thịt heo ba chỉ xông khói.",
    color: "rgba(186, 58, 92, 0.15)",
    strokeColor: "var(--oxblood)",
    icon: "meat"
  },
  cheese: {
    id: "cheese",
    name: "Phô Mai & Đồ Béo",
    emoji: "🧀",
    desc: "Phô mai Brie béo ngậy, phô mai xanh (Blue Cheese) nồng đậm, phô mai Cheddar lâu năm hoặc patê gan ngỗng.",
    science: "Phô mai phủ một lớp màng béo dày đặc lên các gai vị giác. Để thưởng thức trọn vẹn miếng tiếp theo, bạn cần một chất lỏng có độ đắng thảo mộc sắc sảo (như Campari trong Negroni) hoặc độ chua sủi tăm mạnh mẽ (như Champagne trong French 75) để xuyên qua lớp chất béo màng bọc, tái lập trạng thái cân bằng và đánh thức các giác quan.",
    rule: "Đắng thảo mộc xé béo, bọt sủi tăm làm sạch vòm họng.",
    drinks: [
      { id: "negroni", name: "Negroni", type: "recipe" },
      { id: "french_75", name: "French 75", type: "recipe" },
      { id: "paper_plane", name: "Paper Plane", type: "recipe" },
      { id: "spirit-vermouth", name: "Sweet Vermouth", type: "article" }
    ],
    foods: "Phô mai Brie chảy, Charcuterie board (thịt nguội & phô mai Cheddar), Blue cheese kèm mật ong.",
    color: "rgba(214, 162, 74, 0.15)",
    strokeColor: "var(--gold)",
    icon: "cheese"
  },
  spicy: {
    id: "spicy",
    name: "Món Cay & Đồ Á",
    emoji: "🌶️",
    desc: "Món ăn Thái cay nồng, đồ nướng BBQ Tứ Xuyên, cà ri Ấn Độ hoặc các món ăn đậm đà gia vị Việt Nam.",
    science: "Capsaicin (chất tạo cay trong ớt) gây ra cảm giác bỏng rát vật lý trên lưỡi. Cồn nồng độ quá cao sẽ làm trầm trọng thêm cảm giác bỏng này. Ngược lại, một ly cocktail chua ngọt sảng khoái với rum trắng và nước chanh (như Daiquiri, Mojito) hoặc một loại vang trắng ngọt dịu (Riesling) sẽ ôm ấp và làm dịu ngay cơn nóng hỏa, vị ngọt dịu dập tắt ngọn lửa trong khi chanh tươi làm sạch gia vị bám quanh lưỡi.",
    rule: "Vị ngọt dập lửa cay, độ chua xoa dịu vị giác bỏng rát.",
    drinks: [
      { id: "daiquiri", name: "Daiquiri", type: "recipe" },
      { id: "mojito", name: "Mojito", type: "recipe" },
      { id: "moscow_mule", name: "Moscow Mule", type: "recipe" },
      { id: "spirit-rum", name: "Light Rum", type: "article" }
    ],
    foods: "Gỏi đu đủ Thái Lan (Som Tum), Cánh gà chiên nước mắm cay, Cà ri xanh Thái.",
    color: "rgba(94, 140, 138, 0.15)",
    strokeColor: "var(--teal)",
    icon: "spicy"
  },
  dessert: {
    id: "dessert",
    name: "Món Ngọt & Socola",
    emoji: "🍫",
    desc: "Bánh Tiramisu, Socola đen đắng, bánh tart trái cây, bánh kem hoặc bánh ngọt caramel.",
    science: "Quy tắc cốt lõi khi phối hợp món ngọt: Đồ uống luôn phải ngọt bằng hoặc ngọt hơn món ăn, nếu không đồ uống sẽ có vị cực kỳ chua, đắng gắt và nhạt nhẽo. Cà phê đậm đặc và rượu mạnh ủ gỗ lâu năm (như Brandy/Cognac hoặc Espresso Martini) mang các nốt đắng bùi tự nhiên, tạo nên một sự tương phản đối ẩm vô cùng thanh lịch và tròn trịa với đồ ngọt.",
    rule: "Rượu ngọt sánh đôi bánh ngọt, đắng bùi sồi khói cân bằng vị đường.",
    drinks: [
      { id: "espresso_martini", name: "Espresso Martini", type: "recipe" },
      { id: "sidecar", name: "Sidecar", type: "recipe" },
      { id: "spirit-brandy", name: "Brandy / Cognac", type: "article" },
      { id: "spirit-liqueur", name: "Coffee Liqueur", type: "article" }
    ],
    foods: "Tiramisu truyền thống, Socola đen 70%, Bánh Tart táo nướng ấm áp.",
    color: "rgba(138, 92, 199, 0.15)",
    strokeColor: "var(--amethyst)",
    icon: "dessert"
  }
};

