/* Türk Masalları – JavaScript dosyası (index.html içindeki <script src> ile bağlanır) */

// JavaScript başlangıcı
/* SAYFADAKİ ÖĞELERİ SEÇME */
// Kimliği pencere-masal-metni olan öğeyi bulur ve onu masal olarak hatırlar
const masalButonlari = document.querySelectorAll(".masal-butonu");
const masalPenceresi = document.getElementById("masal-penceresi");
const pencereIci     = document.querySelector(".pencere-ici");
const pencereBasligi = document.getElementById("pencere-masal-basligi");
const pencereMetni   = document.getElementById("pencere-masal-metni");
const gorselBas      = document.getElementById("gorsel-bas");
const gorselSon      = document.getElementById("gorsel-son");
const kapatButonu    = document.getElementById("pencere-kapat");
const aramaKutusu    = document.getElementById("arama-kutusu");
const sonucYok       = document.getElementById("sonuc-yok");
const kucultButonu   = document.getElementById("yazi-kucult");
const buyutButonu    = document.getElementById("yazi-buyut");

/* MASAL VERİLERİ: başlık, görseller ve metin */
const masallar = [
    {
        baslik: "Peri Kızı",
        gorselBas: "gorseller/peri-kizi-gol.jpg",
        gorselSon: "",
        metin: `Bir varmış, bir yokmuş. Evvel zaman içinde bir köylü kadın yaşarmış. Her gün evinin önünden geçen bir delikanlı, kadının kapısının önüne bir tas süt döktüğünü görür, bunun nedenini merak edermiş. Bir gün dayanamayıp sormuş:

“Ne döküyorsun öyle?”

Kadın, “Kızımın elinin kiri,” diye cevap vermiş.

Delikanlı yere dökülen süte bakmış. Süt tertemizmiş. Hemen annesine koşup gördüklerini anlatmış. “Elinin kiri böyleyse kendisi kim bilir ne kadar güzeldir,” demiş ve kadının kızını istemesini söylemiş.

Oysa köylü kadının hiç kızı yokmuş. Delikanlıya şaka olsun diye öyle söylemiş. Delikanlının annesi kızı görmek için kadının evine gidince kadın, kızının hasta olduğunu ve kimseye göstermeyeceğini söylemiş. Kızını görmeden evlenmeye razı olan anne, düğün hazırlıklarına başlamış.

Düğün günü yaklaşınca kadın ne yapacağını şaşırmış. Sonunda bir kazana un koyup suyla yoğurarak insan biçiminde bir hamur hazırlamış. Hamur kuruyunca üzerine gelinlik giydirmiş, başına duvak takmış ve gelin arabasına binmiş.

Araba büyük bir gölün yanından geçerken kadın hamurdan gelinin elbiselerini çıkarmış ve onu gizlice göle atmış. Ardından bağırarak kızının göle düştüğünü söylemiş. Delikanlı ve arkadaşları göle gelip ağlarla arama yapmaya başlamışlar.

Gölün dibinde üç peri kız kardeş top oynuyormuş. Ağları görünce dünyayı merak etmişler. En küçükleri ağa tutunarak yukarı çıkmaya karar vermiş. Ağlar çekilince sudan ayın on dördü gibi güzel bir kız çıkmış. Köylü kadın onu görünce “İşte kızım!” diye bağırmış. Kıza gelinlik giydirilmiş ve düğün evine götürülmüş. Kırk gün kırk gece süren düğünden sonra peri kızı delikanlıyla evlenmiş.

Delikanlı karısına sürekli “Köylü kızı” diye seslenirmiş. Peri kızı bu sözden incinmiş ve kocası ne isterse yapmasına rağmen onunla konuşmamaya başlamış. Delikanlı bir gün şaka yollu onu odaya kapatacağını söylemiş. Kız da “Kapatırsan kapat, başa gelen çekilir,” diye cevap vermiş. Delikanlı onu gerçekten odaya kapatmış.

Bir süre sonra delikanlının büyük ablası, peri kızının odada ne yaptığını merak edip anahtar deliğinden bakmış. Peri kızı “Ateşim yan!” deyince mangal kendi kendine gelmiş. “Yağım gel!” dediğinde yağ dolu tava ortaya çıkmış. Ardından parmaklarını balık gibi pişirip kocasına yemek olarak göndermiş. Ablası bunları kıskanmış ve aynısını yapmaya kalkışmış. Ancak parmaklarını kızgın yağa sokunca ellerini yakmış.

Bunun üzerine evin işleri ortanca ablaya kalmış. Bir gün peri kızı kuyudan su çekerken kovayı düşürmüş. Saçından bir tel koparıp kuyuya uzatmış; saçı uzayıp kovaya ulaşmış ve kız kovayı yukarı çekmiş. Ortanca abla da bunu denemiş ama saçı uzamamış. Kuyunun içine eğilince dengesini kaybedip düşmüş ve boğulmuş.

Son olarak küçük abla evin ekmeği bitince peri kızını izlemiş. Peri kızı “Fırın, gel!” diyerek fırını ortaya çıkarmış; ateşi yakmış, hamur teknesini çağırmış ve ekmek yapmış. Küçük abla da onun yaptıklarını taklit etmek istemiş. Fakat fırının içine girince yanarak can vermiş.

Delikanlı, üç ablasının başına gelenlerden karısını sorumlu tutmuş. Peri kızının yanına gidip neden böyle yaptığını sormuş ama kız yine konuşmamış. Delikanlı evden çıkınca peri kızı yağ ve bal küplerini çağırmış. Küpler çarşıya gidip dolduktan sonra eve dönmüşler. Kapıda yağ küpü bal küpüne çarpıp onun ağzını kırmış. Bal küpü ağlayarak peri kızına şikâyet etmiş. Peri kızı sopayı alıp yağ küpüne vuracakken küp, “Ay baban, Güneş annen, Yıldız kardeşlerinin başı için vurma!” diye yalvarmış.

Bu sözleri duyan delikanlı içeri girmiş ve peri kızına aynı sözlerle seslenmiş. Bunun üzerine peri kızının dili çözülmüş. Kocasına, kendisini nereden geldiğini sormadan “Köylü kızı” diye küçümsediği için gücendiğini anlatmış. Delikanlı hatasını kabul etmiş ve özür dilemiş.

Peri kızı da üç peri kardeş olduklarını, gölün dibinde top oynarken balık ağlarına tutunup dünyaya çıktığını anlatmış. Karı koca barışmış ve o günden sonra birlikte mutlu yaşamışlar. Onlar ermiş muradına, darısı sizin başınıza.`
    },
    {
        baslik: "Çobanla Köpeği",
        gorselBas: "gorseller/cobanla-kopegi.jpg",
        gorselSon: "",
        metin: `Bir varmış, bir yokmuş. Ak saçlı, iyi yürekli yaşlı bir kadının işsiz güçsüz dolaşan bir oğlu varmış. Oğlan büyüyüp delikanlı olunca boş gezmekten sıkılmış. Annesinden iki koyunla bir keçi almış ve kırlara çıkıp hayvanlarını otlatmaya başlamış.

Bir gün üç çobanın bir köpeği dövdüğünü görmüş. Neden dövdüklerini sorunca, “Ekmeğimizi yedi,” demişler. Delikanlı köpeğe acımış ve çobanlara ekmek vererek onu kurtarmış. Ertesi gün aynı yerde bu kez bir kediyi dövdüklerini görmüş. Yine nedenini sormuş; aynı cevabı alınca kediye de ekmek verip onu kurtarmış. Bir sonraki gün çobanlar bir yılanı dövüyormuş. “Koyunlarımızı emdi,” demişler. Delikanlı bir koyun vererek yılanı da onların elinden almış.

Delikanlı evine dönerken yılan peşinden gelmiş ve onu babasının evine davet etmiş. Yılan, yaptığı iyiliğin karşılığını vermek istediklerini söylemiş. Delikanlı yılanın babasından bir yüzük istemiş. Yılanın babası bu dileği yerine getirmiş ve delikanlıya sihirli bir yüzük vermiş.

Delikanlı yüzüğü annesine gösterip padişahın kızını sevdiğini söylemiş. Annesi, kendilerinin padişaha denk olmadığını düşünerek kız istemeye gitmiş ama padişah kadını aşağılayıp merdivenlerden atmış. Oğlan buna çok öfkelenmiş. Yüzüğü yalayınca iki Arap ortaya çıkmış. Onlardan annesine ceviz kabuğu içinde elbise getirmelerini istemiş. Getirilen elbiselerle annesi çok güzel ve gösterişli görünmüş. Oğlan, annesini yeniden padişaha göndermiş; ancak padişahın tavrı ve yaşananlar karşısında yüzüğün gücünü kullanarak kendi yolunu açmaya karar vermiş.

Yüzüğün yardımıyla padişahın kızıyla evlenmek için gerekli hazırlıkları yapmış. Masal boyunca köpek, kedi ve yılanın yaptığı iyilikler karşılıksız kalmamış; delikanlı da karşılaştığı zorlukları yüzüğün gücü ve kendi cesaretiyle aşmış.`
    },
    {
        baslik: "İnatçı Horoz",
        gorselBas: "gorseller/inatci-horuz.jpg",
        gorselSon: "",
        metin: `Bir varmış, bir yokmuş. Allah’ın kulu çokmuş; çok demesi günahmış. Bir horoz küllükte eşinirken ayağına diken batmış. Dikeni kendi çıkaramayınca yakındaki bir eve gidip ev sahibinden yardım istemiş. Kadın dikeni çıkarınca horoz ona teşekkür etmiş.

Aradan zaman geçmiş. Horoz bir gün yeniden kadının yanına gelerek ayağından çıkardığı dikeni istemiş. Kadın dikeni mangala attığını, orada yanıp kül olduğunu söylemiş. Horoz ise “Ya mangalı verirsin ya da dikeni,” diye diretmiş. Kadın sonunda başından savmak için mangalı horoza vermiş.

Horoz mangalı sırtlanıp başka bir eve gitmiş. Ev sahibi kadın inek sağıyormuş. Horoz mangalı bir süreliğine ona bırakmış. Geri döndüğünde kadın, mangalı ahıra koyduğunu ve ineğin onu kırdığını söylemiş. Horoz bu kez “Ya mangalı ver ya da ineği alırım,” demiş. Kadın da ineği horoza vermiş.

Horoz ineği alıp başka bir eve bırakmış ve yeniden yola çıkmış. Türkiye’yi, dünyayı dolaşıp geri döndüğünde evde düğün olduğunu görmüş. Ev sahibine ineğini sormuş. Ev sahibi ineği kestiklerini söyleyince horoz gelini görmek istemiş. Gelini beğenmiş ve “Amanete hıyanet olmaz, gelininizi alırım,” demiş. Ev sahibi ne kadar altın teklif etse de horoz kararından vazgeçmemiş. Akşama kadar konuşup sonunda gelini alarak dağa doğru yola çıkmış.

Yolda kaval çalan bir çobana rastlamış. Kavalın sesi horozun çok hoşuna gitmiş. Gelini kaval karşılığında çobana vermiş ve kavalı alarak kümese dönmüş.

Tavuklara başından geçenleri anlatıp kavalını çalmış:

“Dikeni verdim, mangal aldım;
Mangalı verdim, inek aldım;
İneği verdim, gelin aldım;
Gelini verdim, kaval aldım!”

Sonra kavalını çalmış; yemişler, içmişler ve muratlarına ermişler.`
    },
    {
        baslik: "Keloğlan ve Altın Bülbül",
        gorselBas: "gorseller/keloglan-altin-bulbul.jpg",
        gorselSon: "",
        metin: `Bir varmış, bir yokmuş. Evvel zaman içinde, kalbur saman içinde; deve tellal, horoz berber iken bir padişah yaşarmış. Padişah, her tarafı camdan yapılmış çok güzel bir cami yaptırmış. Bir cuma günü namazdan çıkarken karşısına ak sakallı, nur yüzlü bir ihtiyar çıkmış. İhtiyar, “Padişahım, Kafdağı’nın ardındaki Altın Bülbül’ü getirip caminin yanına koyarsan eserin tamamlanır,” demiş ve gözden kaybolmuş.

Padişah bu sözleri günlerce düşünmüş. Sonunda oğullarına Altın Bülbül’ü nasıl getirebileceğini bilmediğini anlatmış. Üç oğlu da babalarına söz verip atlarına binerek yola çıkmışlar.

Bir pınarın başında dinlenip yemek yedikten sonra yolları üçe ayrılmış. Büyük oğlan birinci yoldan, ortanca ikinci yoldan gitmiş. Küçük oğlana ise bataklık yol kalmış. Büyük ve ortanca kardeşlerin yolları bir süre sonra birleşmiş ve bir şehre ulaşmışlar. Paraları bitince biri hancıya, diğeri lokantacıya çırak olmuş.

Küçük kardeş ise zorlu yollardan geçerek ilerlemiş. Çalılar ve dikenler yüzünden eli yüzü kan içinde kalmış. Bir pınarın başında ak sakallı bir ihtiyarla karşılaşmış. İhtiyar onu yolundan döndürmek istemiş ama oğlan, “Ben babama söz verdim. Ölmek var, dönmek yok,” demiş. İhtiyar sırtını üç kez sıvazlamış ve oğlan yoluna devam etmiş.

Uzun süre aç ve susuz kaldıktan sonra yedi canlı bir devin sarayına ulaşmış. Devi öldürmüş ve saraydaki peri kızıyla tanışmış. Ardından sekiz canlı devin sarayına gitmiş; onu da öldürmüş. Oradaki peri kızı, Altın Bülbül’e ulaşmak için dokuz canlı devi de yenmesi gerektiğini ve yolu nasıl bulacağını anlatmış.

Küçük kardeş dokuz canlı devi de öldürmüş. Fakat devin doksan dokuz odalı sarayında Altın Bülbül’ün hangi odada olduğunu bulamamış. Bir kedinin işaretiyle doğru odayı bulup Altın Bülbül’ü almış. Saraydan getirdiği eşyaları ihtiyarın yanına bırakmış, sonra kardeşlerini aramaya çıkmış.

Bir şehirde kardeşlerini bulmuş ve her birine birer at almış. Üçü yeniden ihtiyarın yanına giderek Altın Bülbül’ü almışlar. Eve dönerlerken ağabeyleri kıskançlığa kapılıp küçük kardeşlerini suya atmış. Ancak küçük kardeş ölmemiş. Islana ıslana ilerlerken bir çobana rastlamış. Bir altın vererek ondan bir koyun almış. Koyunun işkembesini başına geçirince Keloğlan kılığına girmiş.

Bir kasabaya gidip handa çırak olmuş. Bir gün hancı ağır hastalanmış. Bir ak sakallı ihtiyar, hancının iyileşmesi için padişahın camiinden bir yudum su getirilmesi gerektiğini söylemiş. Keloğlan hemen camiye koşmuş. Oradaki Altın Bülbül birden ötmeye başlamış.

Bu haber padişaha ulaştırılmış. Padişah, Altın Bülbül’ün kimin yanında öteceğini anlamak için bütün halkı önünden geçirtmiş. Bülbül kimsenin yanında ötmemiş. Keloğlan gelince yeniden ötmeye başlamış. Bunun üzerine Keloğlan başındaki işkembeyi çıkarmış ve babasına kendisini tanıtmış.

Padişah, Altın Bülbül’ü küçük oğlunun getirdiğini anlamış. Diğer oğullarını saraydan kovmuş. Ertesi gün çayıra kırk çadır kurdurmuş.`
    },
    {
        baslik: "Kurnaz Kurt",
        gorselBas: "gorseller/kurnaz-kurt.jpg",
        gorselSon: "",
        metin: `Bir varmış, bir yokmuş. Çok yüksek bir dağın eteklerinde bir köy varmış. Dağın yükseklerinde yaşayan iri ve güçlü bir kurt, geceleri köye iner; keçileri, atları ve eşekleri avlarmış. Köylüler hayvanlarını koruyamaz hâle gelince bir araya gelip kurdu yakalamaya karar vermişler.

Silahlarını alıp dağa çıkmış, yedi ayrı gruba ayrılarak günlerce kurdu aramışlar. Sonunda tuzak kurup onu yakalamışlar ve köy odasına götürmüşler.

Köylüler kurda neden hayvanlarını yediğini sormuş. Kurt, “Ben de karnımı doyurmak zorundayım. Hayvanlarınızı yememi istemiyorsanız her gün bana bir kilo et getirin,” demiş. Köylüler başka çare bulamayınca bu teklifi kabul etmiş. Aralarında sıraya girerek her gün kurda et götürmeye başlamışlar.

Bir süre sonra köydeki hayvanlar azalmış ve kurda et yetiştirmek zorlaşmış. Köylüler artık et götürmemeye karar vermiş. Kurt günlerce beklemiş ama kimse gelmemiş. Açlıktan güçsüz düşünce köye inmiş; otlayan bir eşekle sıpasını görüp onlara saldırmış.

Akşam hayvanların sahibi durumu öğrenince köy odasına koşmuş. Köylüler yeniden toplanıp kurdu yakalamışlar. Ona eşekle sıpasına neden zarar verdiğini sormuşlar. Kurt, “Bana et getirmezseniz daha fazlasını yerim,” demiş.

Köylüler köyde neredeyse hiç hayvan kalmadığını, tarlalarını sürecek hayvan bile bulamayacaklarını anlatmışlar. Kurt bu kez daha da sertleşerek, “Bana et getirmezseniz sizi de yerim!” diye bağırmış.

Köylüler korkup birer birer dışarı çıkmışlar. Kurt onların gittiğini görünce kahkahalarla gülmüş. Meğer kendisi de köylülerden çok korkuyormuş; onları yalnızca gözdağı vererek uzaklaştırmış. Köy odasından çıkar çıkmaz kaçıp uzak diyarlara gitmiş. O günden sonra bir daha görünmemiş ve köyün hayvanları rahat etmiş.`
    },
    {
        baslik: "Reyhan Güzeli ile Padişah Oğlu",
        gorselBas: "gorseller/reyhan-guzeli.jpg",
        gorselSon: "",
        metin: `Bir varmış, bir yokmuş. Allah’ın kulu çokmuş. Vaktiyle bir memlekette bir padişah ve bir çoban yaşarmış. Padişahın sarayı, bağları, bahçeleri, hizmetçileri ve koca bir ordusu varmış. Bir de oğlu varmış. Çobanın ise bir sürü davarı ve dünya güzeli bir kızı varmış.

Çoban kızı her sabah babasının yiyeceğini hazırlayıp onu sürüsünün başına uğurlarmış. Babası gittikten sonra evlerinin önündeki reyhanları sularmış. Bir sabah padişahın oğlu atını sulamak için pınara giderken çobanın evinin önünden geçmiş ve kızı görmüş. Güzelliğinden etkilenerek, “Çoban kızı, sen mi güzelsin, reyhanların mı?” diye sormuş. Kız cevap vermemiş.

Ertesi gün padişahın oğlu en güzel kıyafetlerini giyerek yine aynı yerden geçmiş ve aynı soruyu sormuş. Kız yine susmuş. Birkaç gün böyle devam etmiş. Sonunda padişahın oğlu bir oyun düşünmüş. Bir sandığı boncuklar, bilezikler ve süs eşyalarıyla doldurup çerçi kılığına girmiş. Mahalledeki kızlar gelip alışveriş yapmış. Çoban kızı da iki bilezik almış. Çerçi para yerine güzel kızdan bir öpücük istemiş. Kız önce kabul etmemiş ama arkadaşlarının ısrarıyla yanağından öpülmesine razı olmuş. Çerçi eşyaları bırakıp gitmiş.

Ertesi sabah padişahın oğlu yine aynı soruyu sorunca kız susmuş. Delikanlı da “Dün seni öptüm mü, öpmedim mi?” diye takılmış. Kız çok öfkelenmiş ve ona yaptığını yanına bırakmayacağını düşünmüş.

Akşam babasından bir koç kesmesini ve postunu kendisine vermesini istemiş. Postun üzerindeki her tüye boncuklar, takılar ve yüzükler bağlamış. Akşam saraya giderek padişah oğlunun odasına saklanmış. Delikanlı yatağına yattığında postu titreterek ortaya çıkmış ve kendisini Azrail olarak tanıtmış. Padişah oğlu canını bağışlaması için yalvarmış. Kız da burnuna iki patlıcan sokacağını, ertesi gün hastaymış gibi yatmasını söylemiş.

Sabah sarayda büyük telaş başlamış. Hiçbir doktor padişah oğlunu iyileştirememiş. Çoban kızı erkek kıyafeti giyerek saraya doktor olarak gelmiş. Odadakileri dışarı çıkarmış ve padişah oğlunun burnundaki patlıcanları çıkarmış. “Sen beni öptüysen ben de senin burnuna patlıcan soktum,” demiş.

Birkaç gün sonra padişah ve sultan hanım çoban kızını oğullarına istemeye gelmişler. Çoban kızı evlenmeyi kabul etmiş. Düğün hazırlıkları başlamış. Kız, padişah oğlunun emriymiş gibi terziye elbiseleri tazılara çul yapmasını, kunduracıya ayakkabıları çöpe atmasını, aşçıbaşına da yemekleri köpeklere vermesini söylemiş. Herkes söyleneni yapmış. Padişah oğlu öfkelense de düğün hazırlıkları devam etmiş.

Çoban kızı bir tulumu pekmezle doldurmuş ve gelinliğini ona giydirmiş. Saraya geldiğinde tulumu odada bir perdenin arkasına yerleştirmiş, kendisi de saklanmış. Padişah oğlu içeri girip çoban kızını öldürmekle tehdit etmiş. Tulumun başı ip yardımıyla sallanınca kızın öldürülmeyi kabul ettiğini sanmış. Hançerini tuluma saplamış. Pekmez kırmızı kırmızı akınca çoban kızının kanı olduğunu düşünmüş ve ağlamaya başlamış.

Tam o sırada çoban kızı perdenin arkasından çıkmış. Padişah oğlu onu karşısında görünce sevinmiş. Yeniden düğün yapılmış ve ikisi muratlarına ermiş.

“Al şeftali, ver şeftali; çekirdeği Âli’nin gözünden dışarı.”`
    },
    {
        baslik: "Tuz Kadar Sevgi",
        gorselBas: "gorseller/tuz-kadar-sevgi.jpg",
        gorselSon: "",
        metin: `Vakti zamanında bir padişahın üç kızı varmış. Kızlar büyüyüp evlenme çağına gelmişler ama babaları onları evlendirmeyi düşünmüyormuş. Bunun üzerine üç kardeş, babalarına evlenmek istediklerini anlatmanın bir yolunu aramış. En küçükleri, her birinin bağdan bir karpuz seçip babalarına göndermesini önermiş.

Üç kız bağa gidip birer karpuz seçmiş. Büyük kızın karpuzu henüz yenmeyecek kadar ham, ortanca kızınki de ancak birkaç dilim yenebilecek durumdaymış. Küçük kızın karpuzu ise tam kıvamındaymış. Kızlar karpuzlarını padişaha göndermiş. Padişah büyük ve ortanca kızın karpuzlarını beğenmeyip attırmış. Küçük kızın karpuzunu ise afiyetle yemiş.

Veziri padişaha karpuzların bir anlamı olduğunu söylemiş. Büyük kızın evlenme vaktinin geçtiğini, ortanca kızın da evlilik yaşına geldiğini, küçük kızın ise tam zamanında olduğunu anlatmış. Padişah kızlarını çağırıp onlara kendisini ne kadar sevdiklerini sormuş. Büyük ve ortanca kız, babalarını dünyanın en güzel nimetlerinden daha çok sevdiklerini söylemiş. Padişah onları vezirlerinin oğullarıyla evlendirmiş.

Küçük kız ise babasına, “Seni tuz kadar severim,” demiş. Padişah bu cevaba öfkelenmiş. Kendisini tuza benzettiğini düşünerek kızını Tembel Ahmet’in evine göndermiş.

Tembel Ahmet yirmili yaşlarına gelmiş olmasına rağmen çalışmayan, annesinin yedirip içirdiği bir gençmiş. Padişahın kızı eve gelince ev işlerini üstlenmiş. Ahmet’in annesine yüzüğünü verip kuyumcuda bozdurmasını, parayla yiyecek ve birkaç çubuk almasını söylemiş. Kız, Ahmet’e yemek hazırlamış. Ertesi gün Ahmet suyu bile kendisi içmek istemeyince kız onu çubukla korkutup çalışmaya göndermiş. Ahmet bir mendil alarak gün boyunca iş aramış. Limanda kimsenin taşımadığı iki ağır yükü taşıyıp para kazanmış. Mendilini yiyecekle doldurup eve dönmüş.

Zamanla Ahmet çalışmaya alışmış. Önce hamallık yapmış, sonra eşek alıp odunculuğa başlamış. Bir gün odunlarını satamayınca bir hocaya vermiş; karşılığında “İlmin başı sabır” sözünü almış. Ertesi gün yine odunlarını satamayınca hocadan “Sabrın başı selâmettir” sözünü öğrenmiş. Padişahın kızı bu sözleri unutmamasını söylemiş.

Kız, Ahmet’e kış için dağda odun biriktirmesini önermiş. Ahmet odunları bir mağaraya doldurmuş. Kış geldiğinde mağaraya döndüğünde odunların yanıp kömür olduğunu görmüş. Kömürleri torbasına doldurup eve götürmüş. Padişahın kızı torbadaki kömürlerin aslında altın olduğunu anlamış. Ahmet’e mağaradaki kül ve kömürlerin hepsini getirmesini söylemiş. Böylece zengin olmuşlar.

Bir gün tellal, at binip kılıç kuşanacak birine yüksek aylık verileceğini duyurmuş. Ahmet bu işe talip olmuş ve yedi tüccarın kervanına katılmış. Yol boyunca tüccarların tehlikeli bulduğu yerlerde konaklamayı seçmiş. Eşkıyalar, onun bulunduğu yere yaklaşmaya cesaret edememiş; diğer kervanları soyup gitmişler. Başka bir seferde fırtına ve selden korunmak için yine doğru yerde konaklamış. Tüccarlar onun sayesinde mallarını korumuş ve Ahmet’e ödül olarak katırlar ile daha yüksek aylık vermişler.

Yolculuk sırasında bir kuyunun başına gelmişler. Tüccarların altısı daha önce kuyuya inmiş ve geri dönmemiş. Sıra son tüccara gelince Ahmet onun yerine kuyuya inmeyi kabul etmiş. Kuyuya indiğinde bir Arap tarafından çekilip olağanüstü bir konağa götürülmüş. Orada bir delikanlı, güzel bir kız ve altın bir sini üzerinde yeşil bir kurbağa varmış. Kız, Ahmet’e delikanlının soracağı soruya “Gönül kimi severse güzel odur,” diye cevap vermesini öğütlemiş.

Delikanlı Ahmet’e kimin güzel olduğunu sormuş: kendisinin mi, kızın mı, Arap’ın mı, yoksa sinideki kurbağanın mı? Ahmet her defasında “Gönül kimi severse güzel odur,” demiş. Kurbağa giderek büyümüş ve sonunda patlamış. İçinden çok güzel bir kız çıkmış. Delikanlı Ahmet’e dileğini sormuş. Ahmet yalnızca babasının kırk yıldır el değmemiş bağından bir terki nar istemiş. Delikanlı önce altın ve mücevher önermiş ama Ahmet nar isteğinden vazgeçmemiş. İsteği yerine getirilmiş ve Ahmet narlarla birlikte yeryüzüne dönmüş.

Ahmet eve geldiğinde padişahın kızının yaptırdığı konağı görünce kendi evini bulamadığını sanmış. Kız onu içeri almış. Narları görünce padişahı ve bütün askerlerini konağa davet etmesini istemiş. Padişah geldiğinde yemekler hazırlanmış. Önce tuzsuz yemek sunulmuş, padişah yiyememiş. Ardından tuzlu yemek gelince iştahla yemiş ve “Dünyanın tadı tuzmuş,” demiş.

Bunun üzerine padişahın kızı perdenin arkasından çıkmış. Babasına, “Seni tuz kadar severim dediğimde beni Tembel Ahmet’in yanına göndermiştin. Bak, Allah Ahmet’i ne hâle getirdi. Senin köşkünden, havuzundan ve bağından daha güzellerine sahip oldu. Biz bu zamana kadar kardeş gibiydik. Şimdi nikâhımızı kıydır,” demiş. Padişah da Ahmet’i kızıyla evlendirmiş.

Onlar yiyip içip muratlarına ermişler. Gökten üç elma düşmüş; ikisi dinleyenlere, biri de anlatana.`
    },
    {
        baslik: "Üç Turunçlar",
        gorselBas: "gorseller/uc-turunclar.jpg",
        gorselSon: "",
        metin: `Varmış, yokmuş. Bir memlekette bir padişah ve onun bir oğlu varmış. Bir gün şehzade balkondan şehrin ortasındaki pınarı izliyormuş. Su doldurmaya gelen yaşlı bir kadının testisini taş atarak kırmış. Kadın şehzadeye, “Sana bir şey demem oğul. Sen üç turunçların aşkına düşesin, sararıp solasın,” demiş. O günden sonra şehzade üç turunçlardan başka bir şey düşünemez olmuş.

Padişah ve sultan hanım oğullarını bu hâlde görünce ona ülkenin en güzel kızını almayı önermişler. Fakat şehzade, üç turunçları bulmadan evlenmeyeceğini söylemiş. Heybesini hazırlayıp demir çarık ve demir asa ile yola çıkmış.

Bir ormana vardığında iki aslan yavrusuna saldıran büyük bir yılan görmüş. Yılanı öldürerek yavruları kurtarmış. Bir süre sonra ana aslan gelmiş. Önce şehzadenin yavrularına zarar verdiğini sanmış ama yavrular durumu anlatmış. Ana aslan, şehzadenin kendisine de yardım ettiğini öğrenince teşekkür etmiş. Şehzade aslanın şişmiş ayağındaki dikeni çıkarıp yarasını temizlemiş. Ana aslan ona üç turunçların yerini bildiğini söylemiş.

Şehzadeye üç dağı aşmasını, en yüksek dağın tepesindeki dev kalesine ulaşmasını anlatmış. Kalede bir kapının önünde köpek, diğerinin önünde koyun varmış. Köpeğin önünde ot, koyunun önünde et duruyormuş. Şehzade eti köpeğe, otu koyuna vermeli; açık kapıyı kapatıp kapalı kapıyı açmalıymış. Yolunu böğürtlenler kapatırsa onları okşayıp güzel güller olduklarını söylemeliymiş. Ağacın altında bir dev yatıyormuş. Gözleri açık görünüyorsa uyuyor, kapalıysa uyanıkmış. Ağaçtaki üç turunç üç denemede düşürülmezse şehzade taşa dönüşecekmiş. Turunçları aldıktan sonra da arkasına bakmadan kaçmalı ve onları su kenarında kesmeliymiş.

Şehzade anlatılanları aynen yapmış. Böğürtlenleri okşayıp yol açmış, devin uyuduğunu anlayınca taş atmış. İlk iki atışta turunçları düşürememiş ve bacaklarına kadar taşa dönüşmüş. Son atışında turunçları düşürmeyi başarmış. Dev uyanıp böğürtlenlere, kapıya, köpeğe ve koyuna onu durdurmalarını söylemiş ama hepsi şehzadeye yardım ettikleri için onu bırakmış.

Şehzade yolda susayınca turunçlardan en büyüğünü kesmiş. İçinden çok güzel bir kız çıkmış ve su istemiş. Şehzade su bulamadığı için kız ölmüş. İkinci turunçtan çıkan kız da susuzluktan can vermiş. Şehzade son turunçu kesmemeye karar vermiş. Bir gölün kıyısına ulaşınca önce su içmiş, sonra turunçu kesmiş. İçinden çıkan üçüncü kız da su istemiş. Şehzade onu göle götürmüş. Kız su içip kendine gelmiş.

Kız, kendisinin ve ölen iki ablasının padişah kızları olduğunu, devin onları büyüyle turunçlara çevirdiğini anlatmış. Şehzade onunla evlenmek istemiş ve parmağındaki elmas yüzüğü kıza vermiş. Ailesine haber vermek için ayrılmış. Kız kimse görmesin diye ağaca çıkmış.

Bir süre sonra pınara su almaya gelen çingene kızı, gölde kendi aksini görünce kendisini çok güzel sanmış. Ağacın üzerindeki turunç güzelini fark edince onu aşağı çağırmış. Ona yıkanmasını teklif etmiş. Turunç güzeli soyununca çingene kızı, başındaki üç gümüş telden birini koparmış. Kız beyaz bir güvercine dönüşüp uçmuş. Çingene kızı onun elbiselerini giyerek şehzadenin adamlarını beklemiş ve saraya götürülmüş.

Şehzade, kızın karardığını görünce nedenini sormuş. Çingene kızı güneşte yandığını söylemiş. Beyaz güvercin pencereye konup gerçekleri anlatan bir türkü söylemiş. Çingene kızı kendi dilinde bağırarak güvercinin sesini bastırmaya çalışmış. Şehzade güvercine alışmış ve onu altın kafese koymuş. Güvercin yine türküler söyleyerek kendisinin turunç güzeli olduğunu anlatmış.

Çingene kızı kurtuluş olmadığını anlayınca hasta numarası yapmış ve beyaz güvercin eti yemek istediğini söylemiş. Şehzade istemese de güvercin kestirilmiş. Kemikleri bahçeye atılmış. Kemiklerin bulunduğu yerde bir kavak ağacı büyümüş. Ağaç şehzadenin penceresine kadar uzanınca sallanıp türküler söylemiş. Çingene kızı ağacın gerçekleri anlatmasından korkmuş ve onu kestirip beşik yaptırmış. Beşik sallandıkça da türküler söylemiş. Çingene kızı beşiği de attırmış.

Bir gün yaşlı kadın sarayın önünde beşiğin bir tahta parçasını bulmuş ve testisine kapak yapmış. Kadın evden çıkınca tahta parçası güzel bir kıza dönüşüyor, evi temizleyip yemeği hazırlıyormuş. Yaşlı kadın bir gün onu görmüş. Kız, büyüsünün bozulduğunu ve artık tahta olmayacağını söylemiş. Yaşlı kadın onu evine almış.

Bu sırada şehzade üzüntüsünden yemek yememeye başlamış. Padişah, herkesin bir yemek yapıp saraya getirmesini istemiş. Turunç güzeli yaşlı kadına bir çorba hazırlamış ve şehzadenin kendisine verdiği elmas yüzüğü içine koymuş. Yaşlı kadın çorbayı şehzadeye sunmuş. Şehzade yüzüğü görünce turunç güzelinin yaşadığını anlamış. Kadının evine gidip kızı buldurmuş. Çingene kızıyla oğlunu cezalandırmışlar. Şehzade ile turunç güzeli kırk gün kırk gece düğün yapmış ve muratlarına ermişler.

“Al şeftali, ver şeftali; çekirdeği Güleri’nin gözünden dışarı.”`
    },
    {
        baslik: "Kırk Dost",
        gorselBas: "gorseller/kirk-dost.jpg",
        gorselSon: "",
        metin: `Eski zamanlarda çok zengin bir adamın savurgan bir oğlu varmış. Oğlan babasının malını düşünmeden harcayıp dururmuş. Babası ne kadar öğüt verse de onu vazgeçirememiş. Oğlan, babasının parasıyla kırk arkadaş edinmiş. Bu arkadaşların her biri onun harcadığı paralar sayesinde tüccar olmuş.

Babası ölmeden önce oğluna, “Bugüne kadar hiçbir sözümü dinlemedin. Bari ben öldükten sonra başın dara düşerse tavandaki halkaya kendini as,” diye vasiyet etmiş.

Babası öldükten sonra oğlan kalan malını da savurmuş. Bir zamanlar ona “Ağam” diyen kırk arkadaşı artık yanlarına yaklaşmasını istemez olmuş. “Fakir, yanımıza gelme,” diye onu kovuyorlarmış. Oğlan ise onlara hâlâ “Ağalarım,” diyormuş.

Bir gün kırk arkadaş eğlenmek için kırlara gitmiş. Oğlan da peşlerinden gidip elbiselerini beklemeyi ve yemeklerini yapmayı teklif etmiş. Kabul etmişler. Arkadaşları cirit oynamaya çıkınca oğlan iki kaz kızartmış ve pilav hazırlamaya başlamış. Tam o sırada bir çalağan gelip iki kazı da kaparak uçmuş.

Arkadaşları dönüp yemekleri sorunca oğlan kazları kuşun kaçırdığını söylemiş. Tüccarlar öfkelenip sopalarla üzerine yürümüşler. Oğlan kaçıp babasının vasiyet ettiği halkaya kendini asmış. O anda tavandan çuvallar dolusu mücevher dökülmüş. Oğlan bir mücevher alıp dışarı çıkmış. Arkadaşları kapıya gelmişken ona mücevherin değerini sormuş. Tüccarlar, “Onun değerini sarraf bilir,” demiş. Oğlan mücevheri bozdurup yeniden zengin olmuş; ev, eşya, hizmetçi ve hayvan edinmiş.

Eski arkadaşlarından öç almak için kırkını da evine davet etmiş. Kırk hizmetçisinin eline birer sopa verip onları saklamış. Tüccarlar oturup sohbet ederken ev sahibi, “Arkadaşlar, benim kılıcımın ucunu sıçan yemiş,” demiş. Tüccarlar da bunun mümkün olduğunu söylemiş. Oğlan, “Kılıcı sıçan yiyebiliyorsa kazları da çalağan kaçırmış olamaz mı?” diye karşılık vermiş. Ardından hizmetçilerini çağırmış. Hizmetçiler kırk tüccarı iyice dövmüş. Tüccarlar canlarını zor kurtarıp kaçmışlar.

Oğlan bir daha savurganlık yapmamış ve düzenli bir hayat sürmeye başlamış. Yaşadıklarından şu sözün doğruluğunu anlamış:

“Malı dünya elde iken hep adamlar dost olur,
Malı dünya elden gitse dost dahi düşman olur.”`
    },
    {
        baslik: "İncili Çadır",
        gorselBas: "gorseller/incili-cadir.jpg",
        gorselSon: "",
        metin: `Bir varmış, bir yokmuş. Bir padişahla karısının büyük bir derdi varmış. Padişah bir gün düşüncelere dalmış. Sultan ona yolculuğa çıkmasını, derdini verenin dermanını da vereceğini söylemiş. Padişah vezirlerini yanına alıp yola çıkmış. Uzun bir yolculuktan sonra dinlenmek için konaklamışlar. Karşı tepeden nur yüzlü, ak sakallı bir ihtiyar gelmiş. Padişahın derdini bildiğini söyleyip cebinden bir elma çıkarmış. Elmanın yarısını padişahın, diğer yarısını sultanın yemesini ve dualarını eksik etmemelerini söyleyip ortadan kaybolmuş.

Dokuz ay dokuz gün sonra padişahla sultanın güzel bir kızları olmuş. Kız iki üç yaşına geldiğinde vezirler onu görmeye gelmiş. En yaşlı vezir, padişaha kızın büyüyünce başlarına dert açabileceğini söylemiş. Bunun üzerine padişah, dışarıyla bağlantısı olmayan ve içine ışık girmeyen yeraltı sarayı yaptırmış. Kızını ve nedimesini oraya yerleştirmiş. Nedime kıza okuma yazma öğretmiş ama dış dünyadan ve doğadan söz etmemiş.

Yıllar geçmiş, kız on beş yaşına gelmiş. Bir gün yemek yerken nedimesi kemiğin boğazına kaçmaması için onu uyarmış. Kız kemiği pencereden dışarı atınca cam kırılmış ve içeri ışık girmiş. Işığı hiç görmemiş olan kız onu yakalamaya çalışmış. O gece merakına yenilip nedimesi uyuduktan sonra yeraltı sarayından kaçmış.

Dışarı çıktığında yakın tepelerin eteklerinde ışıl ışıl çadırlar görmüş. En süslü olanı incilerle donatılmış bir çadırmış. Kapısındaki iki nöbetçi uyuyormuş. Kız içeri girmiş. Çadırda çok güzel bir delikanlı yatıyormuş. Yanında dürülü bir tül gömlek, başucunda altın, ayakucunda gümüş şamdan varmış. Sofrada yemek ve su duruyormuş. Kız gömleği açmış, şamdanların yerini değiştirmiş, yemeklerden yemiş ve sudan yarım bardak içmiş. Sonra evine dönmüş.

Delikanlı sabah uyandığında yemeklerin eksildiğini, gömleğinin açıldığını ve suyunun içildiğini görmüş. Bir sonraki gece uyumamak için başının üzerine kar dolu bir torba astırmış. Kar eridikçe soğuk su damlaları yüzüne düşüyormuş. Kız yine çadıra gelmiş ve önceki gece yaptıklarını tekrarlamış. Tam gidecekken delikanlı kolundan tutmuş. Kim olduğunu sormuş. Kız, “Ne insanım ne cinim; seni yaratan Allah’ın bir kuluyum,” demiş. Geceyi çadırda geçirmiş.

Sabah uyandığında çadırın ve delikanlının ortadan kaybolduğunu görmüş. Meğer başka bir ülkenin padişahının oğlu evlenecekmiş. Gelenekleri gereği damat ve arkadaşları kırk gün kırk gece dağda eğlenirmiş. O gün kırkıncı gün olduğu için çadırlar toplanmış ve herkes memleketine dönmüş.

Kız ağlamaya başlamış. Oradan geçen bir çobana çadırların bulunduğu yerin Şehvanili olduğunu öğrenmiş. Üzerindeki altınları çobana verip onun eski elbiselerini ve bir koyun karnını istemiş. Elbiseleri giyip koyun karnını başına geçirince Keloğlan kılığına girmiş ve yola çıkmış.

Bir süre sonra padişah oğluna yetişmiş. Delikanlı adını sormuş; kız “Abdal” demiş. Nereden geldiğini sorunca “Şehvanili’nden” cevabını vermiş. Orada ne gördüğünü sorunca da incili çadırı, dürülü tül gömleği, yer değiştiren gümüş şamdanı ve içeride ah edip ağlayan güzel birini gördüğünü söylemiş. Delikanlı, güzelin ne dediğini sorunca şu sözleri işitmiş:

“Uyudum, nittim,
Ben bana ettim,
Gülünen nerkis,
Yârimi nittin?”

Padişah oğlu, karşısındaki Keloğlan’ın çadıra gelen genç kız olduğunu anlamış. İkisi birbirine sarılmış ve muratlarına ermişler.`
    }
];

/* GÖRSEL GÖSTERME */
function gorseliGoster(resim, yol, aciklama) {
    if (yol) {
        resim.src = yol;
        resim.alt = aciklama;
        resim.style.display = "block";
    } else {
        resim.style.display = "none";
    }
}
/* kodu ilk yazdığımda masallara hem başlarından hem sonrarından bir sahneden görseller koymayı 
    düşünmüştüm. Daha sonra tek görselin şimdilik yeterli olacağına karar verdim ama belki daha sonra 
    kara değiştiririm diye kodda değişiklik yapmadım*/
gorselBas.addEventListener("error", function () { gorselBas.style.display = "none"; });
gorselSon.addEventListener("error", function () { gorselSon.style.display = "none"; });

/* MASAL PENCERESİNİ AÇMA */
masalButonlari.forEach(function (buton) {
    buton.addEventListener("click", function () {
        const numara = Number(buton.dataset.masal);

        const masal = masallar[numara];

        if (!masal) return;

        pencereBasligi.textContent = masal.baslik;
        pencereMetni.textContent   = masal.metin;

        gorseliGoster(gorselBas, masal.gorselBas, masal.baslik + " masalının başından bir sahne");
        gorseliGoster(gorselSon, masal.gorselSon, masal.baslik + " masalının sonundan bir sahne");

        masalPenceresi.showModal();

        pencereIci.scrollTop = 0;
    });
});

/* PENCEREYİ KAPATMA */
kapatButonu.addEventListener("click", function () {
    masalPenceresi.close();
});

masalPenceresi.addEventListener("click", function (olay) {
    if (olay.target === masalPenceresi) {
        masalPenceresi.close();
    }
});

/* MASAL ARAMA */
// input her harf yazıldığında yada silindiğinde demek
aramaKutusu.addEventListener("input", function () {
    const aranan = aramaKutusu.value.toLocaleLowerCase("tr").trim();

    let bulunanSayisi = 0;

    masalButonlari.forEach(function (buton) {
        const baslik = buton.querySelector(".masal-basligi")
                            .textContent.toLocaleLowerCase("tr");

        if (baslik.includes(aranan)) {
            buton.style.display = "flex";   // göster
            bulunanSayisi++;
        } else {
            buton.style.display = "none";   // gizle
        }
    });

    if (bulunanSayisi === 0) {     // karşılaştır
        sonucYok.style.display = "block";
    } else {
        sonucYok.style.display = "none";
    }
});

/* YAZI BOYUTU AYARI */
let yaziBoyutu = 18;

function yaziBoyutunuUygula() {
    pencereMetni.style.fontSize = yaziBoyutu + "px";
}

buyutButonu.addEventListener("click", function () {
    if (yaziBoyutu < 26) {
        yaziBoyutu = yaziBoyutu + 2;
        yaziBoyutunuUygula();
    }
});

kucultButonu.addEventListener("click", function () {
    if (yaziBoyutu > 14) {
        yaziBoyutu = yaziBoyutu - 2;
        yaziBoyutunuUygula();
    }
});

/* KAYNAKÇA PENCERESİ */
const kaynakcaButonu    = document.getElementById("kaynakca-butonu");
const kaynakcaPenceresi = document.getElementById("kaynakca-penceresi");
const kaynakcaKapat     = document.getElementById("kaynakca-kapat");

kaynakcaButonu.addEventListener("click", function () {
    kaynakcaPenceresi.showModal();
});

kaynakcaKapat.addEventListener("click", function () {
    kaynakcaPenceresi.close();
});

kaynakcaPenceresi.addEventListener("click", function (olay) {
    if (olay.target === kaynakcaPenceresi) {
        kaynakcaPenceresi.close();
    }
});
