import { Component, ViewChild } from '@angular/core';
import { NgSelectComponent } from '@ng-select/ng-select';
import { SwiperService } from 'src/app/shared/services/swiper.service';
import { ApiService } from 'src/app/shared/services/api.service';
import { LoaderService } from 'src/app/shared/services/loader.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  @ViewChild('ngSelect', { static: false }) ngSelect!: NgSelectComponent;

  index = 0;
  selectedCountry = '+998';
  branch = '';
  number = '';
  error = false;
  name = '';
  course = '';
  show = false;
  public countries = [
    {
      name: { en: 'Afghanistan', ru: 'Афганистан', uz: 'Afgʻoniston' },
      code: '+93',
      flag: '🇦🇫',
    },
    {
      name: { en: 'Albania', ru: 'Албания', uz: 'Albaniya' },
      code: '+355',
      flag: '🇦🇱',
    },
    {
      name: { en: 'Algeria', ru: 'Алжир', uz: 'Jazoir' },
      code: '+213',
      flag: '🇩🇿',
    },
    {
      name: { en: 'Andorra', ru: 'Андорра', uz: 'Andorra' },
      code: '+376',
      flag: '🇦🇩',
    },
    {
      name: { en: 'Angola', ru: 'Ангола', uz: 'Angola' },
      code: '+244',
      flag: '🇦🇴',
    },
    {
      name: { en: 'Argentina', ru: 'Аргентина', uz: 'Argentina' },
      code: '+54',
      flag: '🇦🇷',
    },
    {
      name: { en: 'Australia', ru: 'Австралия', uz: 'Avstraliya' },
      code: '+61',
      flag: '🇦🇺',
    },
    {
      name: { en: 'Austria', ru: 'Австрия', uz: 'Avstriya' },
      code: '+43',
      flag: '🇦🇹',
    },
    {
      name: { en: 'Azerbaijan', ru: 'Азербайджан', uz: 'Ozarbayjon' },
      code: '+994',
      flag: '🇦🇿',
    },
    {
      name: { en: 'Bahamas', ru: 'Багамские острова', uz: 'Bagama orollari' },
      code: '+1-242',
      flag: '🇧🇸',
    },
    {
      name: { en: 'Bahrain', ru: 'Бахрейн', uz: 'Bahrayn' },
      code: '+973',
      flag: '🇧🇭',
    },
    {
      name: { en: 'Bangladesh', ru: 'Бангладеш', uz: 'Bangladesh' },
      code: '+880',
      flag: '🇧🇩',
    },
    {
      name: { en: 'Belarus', ru: 'Беларусь', uz: 'Belarus' },
      code: '+375',
      flag: '🇧🇾',
    },
    {
      name: { en: 'Belgium', ru: 'Бельгия', uz: 'Belgiya' },
      code: '+32',
      flag: '🇧🇪',
    },
    {
      name: { en: 'Belize', ru: 'Белиз', uz: 'Beliz' },
      code: '+501',
      flag: '🇧🇿',
    },
    {
      name: { en: 'Benin', ru: 'Бенин', uz: 'Benin' },
      code: '+229',
      flag: '🇧🇯',
    },
    {
      name: { en: 'Bhutan', ru: 'Бутан', uz: 'Butan' },
      code: '+975',
      flag: '🇧🇹',
    },
    {
      name: { en: 'Bolivia', ru: 'Боливия', uz: 'Boliviya' },
      code: '+591',
      flag: '🇧🇴',
    },
    {
      name: {
        en: 'Bosnia and Herzegovina',
        ru: 'Босния и Герцеговина',
        uz: 'Bosniya va Gertsegovina',
      },
      code: '+387',
      flag: '🇧🇦',
    },
    {
      name: { en: 'Botswana', ru: 'Ботсвана', uz: 'Botsvana' },
      code: '+267',
      flag: '🇧🇼',
    },
    {
      name: { en: 'Brazil', ru: 'Бразилия', uz: 'Braziliya' },
      code: '+55',
      flag: '🇧🇷',
    },
    {
      name: { en: 'Brunei', ru: 'Бруней', uz: 'Bruney' },
      code: '+673',
      flag: '🇧🇳',
    },
    {
      name: { en: 'Bulgaria', ru: 'Болгария', uz: 'Bolgariya' },
      code: '+359',
      flag: '🇧🇬',
    },
    {
      name: { en: 'Burkina Faso', ru: 'Буркина-Фасо', uz: 'Burkina-Faso' },
      code: '+226',
      flag: '🇧🇫',
    },
    {
      name: { en: 'Burundi', ru: 'Бурунди', uz: 'Burundi' },
      code: '+257',
      flag: '🇧🇮',
    },
    {
      name: { en: 'Cambodia', ru: 'Камбоджа', uz: 'Kambodja' },
      code: '+855',
      flag: '🇰🇭',
    },
    {
      name: { en: 'Cameroon', ru: 'Камерун', uz: 'Kamerun' },
      code: '+237',
      flag: '🇨🇲',
    },
    {
      name: { en: 'Canada', ru: 'Канада', uz: 'Kanada' },
      code: '+1',
      flag: '🇨🇦',
    },
    {
      name: { en: 'Cape Verde', ru: 'Кабо-Верде', uz: 'Kabo-Verde' },
      code: '+238',
      flag: '🇨🇻',
    },
    {
      name: {
        en: 'Central African Republic',
        ru: 'Центральноафриканская Республика',
        uz: 'Markaziy Afrika Respublikasi',
      },
      code: '+236',
      flag: '🇨🇫',
    },
    { name: { en: 'Chad', ru: 'Чад', uz: 'Chad' }, code: '+235', flag: '🇹🇩' },
    { name: { en: 'Chile', ru: 'Чили', uz: 'Chili' }, code: '+56', flag: '🇨🇱' },
    {
      name: { en: 'China', ru: 'Китай', uz: 'Xitoy' },
      code: '+86',
      flag: '🇨🇳',
    },
    {
      name: { en: 'Colombia', ru: 'Колумбия', uz: 'Kolumbiya' },
      code: '+57',
      flag: '🇨🇴',
    },
    {
      name: { en: 'Comoros', ru: 'Коморы', uz: 'Komor orollari' },
      code: '+269',
      flag: '🇰🇲',
    },
    {
      name: { en: 'Congo', ru: 'Конго', uz: 'Kongo' },
      code: '+242',
      flag: '🇨🇬',
    },
    {
      name: { en: 'Costa Rica', ru: 'Коста-Рика', uz: 'Kosta-Rika' },
      code: '+506',
      flag: '🇨🇷',
    },
    {
      name: { en: 'Croatia', ru: 'Хорватия', uz: 'Xorvatiya' },
      code: '+385',
      flag: '🇭🇷',
    },
    { name: { en: 'Cuba', ru: 'Куба', uz: 'Kuba' }, code: '+53', flag: '🇨🇺' },
    {
      name: { en: 'Cyprus', ru: 'Кипр', uz: 'Kipr' },
      code: '+357',
      flag: '🇨🇾',
    },
    {
      name: { en: 'Czech Republic', ru: 'Чехия', uz: 'Chexiya' },
      code: '+420',
      flag: '🇨🇿',
    },
    {
      name: { en: 'Denmark', ru: 'Дания', uz: 'Daniya' },
      code: '+45',
      flag: '🇩🇰',
    },
    {
      name: { en: 'Djibouti', ru: 'Джибути', uz: 'Jibuti' },
      code: '+253',
      flag: '🇩🇯',
    },
    {
      name: { en: 'Dominica', ru: 'Доминика', uz: 'Dominika' },
      code: '+1-767',
      flag: '🇩🇲',
    },
    {
      name: {
        en: 'Dominican Republic',
        ru: 'Доминиканская Республика',
        uz: 'Dominikana Respublikasi',
      },
      code: '+1-809',
      flag: '🇩🇴',
    },
    {
      name: { en: 'Ecuador', ru: 'Эквадор', uz: 'Ekvador' },
      code: '+593',
      flag: '🇪🇨',
    },
    {
      name: { en: 'Egypt', ru: 'Египет', uz: 'Misr' },
      code: '+20',
      flag: '🇪🇬',
    },
    {
      name: { en: 'El Salvador', ru: 'Сальвадор', uz: 'Salvador' },
      code: '+503',
      flag: '🇸🇻',
    },
    {
      name: {
        en: 'Equatorial Guinea',
        ru: 'Экваториальная Гвинея',
        uz: 'Ekvatorial Gvineya',
      },
      code: '+240',
      flag: '🇬🇶',
    },
    {
      name: { en: 'Eritrea', ru: 'Эритрея', uz: 'Eritreya' },
      code: '+291',
      flag: '🇪🇷',
    },
    {
      name: { en: 'Estonia', ru: 'Эстония', uz: 'Estoniya' },
      code: '+372',
      flag: '🇪🇪',
    },
    {
      name: { en: 'Eswatini', ru: 'Эсватини', uz: 'Eswatini' },
      code: '+268',
      flag: '🇸🇿',
    },
    {
      name: { en: 'Ethiopia', ru: 'Эфиопия', uz: 'Efiopiya' },
      code: '+251',
      flag: '🇪🇹',
    },
    { name: { en: 'Fiji', ru: 'Фиджи', uz: 'Fiji' }, code: '+679', flag: '🇫🇯' },
    {
      name: { en: 'Finland', ru: 'Финляндия', uz: 'Finlandiya' },
      code: '+358',
      flag: '🇫🇮',
    },
    {
      name: { en: 'France', ru: 'Франция', uz: 'Fransiya' },
      code: '+33',
      flag: '🇫🇷',
    },
    {
      name: { en: 'Gabon', ru: 'Габон', uz: 'Gabon' },
      code: '+241',
      flag: '🇬🇦',
    },
    {
      name: { en: 'Gambia', ru: 'Гамбия', uz: 'Gambiya' },
      code: '+220',
      flag: '🇬🇲',
    },
    {
      name: { en: 'Georgia', ru: 'Грузия', uz: 'Gruziya' },
      code: '+995',
      flag: '🇬🇪',
    },
    {
      name: { en: 'Germany', ru: 'Германия', uz: 'Germaniya' },
      code: '+49',
      flag: '🇩🇪',
    },
    { name: { en: 'Ghana', ru: 'Гана', uz: 'Gana' }, code: '+233', flag: '🇬🇭' },
    {
      name: { en: 'Greece', ru: 'Греция', uz: 'Gretsiya' },
      code: '+30',
      flag: '🇬🇷',
    },
    {
      name: { en: 'Grenada', ru: 'Гренада', uz: 'Grenada' },
      code: '+1-473',
      flag: '🇬🇩',
    },
    {
      name: { en: 'Guatemala', ru: 'Гватемала', uz: 'Gvatemala' },
      code: '+502',
      flag: '🇬🇹',
    },
    {
      name: { en: 'Guinea', ru: 'Гвинея', uz: 'Gvineya' },
      code: '+224',
      flag: '🇬🇳',
    },
    {
      name: { en: 'Guinea-Bissau', ru: 'Гвинея-Бисау', uz: 'Gvineya-Bisau' },
      code: '+245',
      flag: '🇬🇼',
    },
    {
      name: { en: 'Guyana', ru: 'Гайана', uz: 'Gayana' },
      code: '+592',
      flag: '🇬🇾',
    },
    {
      name: { en: 'Haiti', ru: 'Гаити', uz: 'Gaiti' },
      code: '+509',
      flag: '🇭🇹',
    },
    {
      name: { en: 'Honduras', ru: 'Гондурас', uz: 'Gonduras' },
      code: '+504',
      flag: '🇭🇳',
    },
    {
      name: { en: 'Hungary', ru: 'Венгрия', uz: 'Vengriya' },
      code: '+36',
      flag: '🇭🇺',
    },
    {
      name: { en: 'Iceland', ru: 'Исландия', uz: 'Islandiya' },
      code: '+354',
      flag: '🇮🇸',
    },
    {
      name: { en: 'India', ru: 'Индия', uz: 'Hindiston' },
      code: '+91',
      flag: '🇮🇳',
    },
    {
      name: { en: 'Indonesia', ru: 'Индонезия', uz: 'Indoneziya' },
      code: '+62',
      flag: '🇮🇩',
    },
    { name: { en: 'Iran', ru: 'Иран', uz: 'Eron' }, code: '+98', flag: '🇮🇷' },
    { name: { en: 'Iraq', ru: 'Ирак', uz: 'Iroq' }, code: '+964', flag: '🇮🇶' },
    {
      name: { en: 'Ireland', ru: 'Ирландия', uz: 'Irlandiya' },
      code: '+353',
      flag: '🇮🇪',
    },
    {
      name: { en: 'Israel', ru: 'Израиль', uz: 'Isroil' },
      code: '+972',
      flag: '🇮🇱',
    },
    {
      name: { en: 'Italy', ru: 'Италия', uz: 'Italiya' },
      code: '+39',
      flag: '🇮🇹',
    },
    {
      name: { en: 'Jamaica', ru: 'Ямайка', uz: 'Yamayka' },
      code: '+1-876',
      flag: '🇯🇲',
    },
    {
      name: { en: 'Japan', ru: 'Япония', uz: 'Yaponiya' },
      code: '+81',
      flag: '🇯🇵',
    },
    {
      name: { en: 'Jordan', ru: 'Иордания', uz: 'Iordaniya' },
      code: '+962',
      flag: '🇯🇴',
    },
    {
      name: { en: 'Kazakhstan', ru: 'Казахстан', uz: 'Qozogʻiston' },
      code: '+7',
      flag: '🇰🇿',
    },
    {
      name: { en: 'Kenya', ru: 'Кения', uz: 'Keniya' },
      code: '+254',
      flag: '🇰🇪',
    },
    {
      name: { en: 'Kiribati', ru: 'Кирибати', uz: 'Kiribati' },
      code: '+686',
      flag: '🇰🇮',
    },
    {
      name: { en: 'Kuwait', ru: 'Кувейт', uz: 'Quvayt' },
      code: '+965',
      flag: '🇰🇼',
    },
    {
      name: { en: 'Kyrgyzstan', ru: 'Кыргызстан', uz: 'Qirgʻiziston' },
      code: '+996',
      flag: '🇰🇬',
    },
    { name: { en: 'Laos', ru: 'Лаос', uz: 'Laos' }, code: '+856', flag: '🇱🇦' },
    {
      name: { en: 'Latvia', ru: 'Латвия', uz: 'Latviya' },
      code: '+371',
      flag: '🇱🇻',
    },
    {
      name: { en: 'Lebanon', ru: 'Ливан', uz: 'Livan' },
      code: '+961',
      flag: '🇱🇧',
    },
    {
      name: { en: 'Lesotho', ru: 'Лесото', uz: 'Lesoto' },
      code: '+266',
      flag: '🇱🇸',
    },
    {
      name: { en: 'Liberia', ru: 'Либерия', uz: 'Liberiya' },
      code: '+231',
      flag: '🇱🇷',
    },
    {
      name: { en: 'Libya', ru: 'Ливия', uz: 'Liviya' },
      code: '+218',
      flag: '🇱🇾',
    },
    {
      name: { en: 'Liechtenstein', ru: 'Лихтенштейн', uz: 'Lixtenshteyn' },
      code: '+423',
      flag: '🇱🇮',
    },
    {
      name: { en: 'Lithuania', ru: 'Литва', uz: 'Litva' },
      code: '+370',
      flag: '🇱🇹',
    },
    {
      name: { en: 'Luxembourg', ru: 'Люксембург', uz: 'Lyuksemburg' },
      code: '+352',
      flag: '🇱🇺',
    },
    {
      name: { en: 'Madagascar', ru: 'Мадагаскар', uz: 'Madagaskar' },
      code: '+261',
      flag: '🇲🇬',
    },
    {
      name: { en: 'Malawi', ru: 'Малави', uz: 'Malavi' },
      code: '+265',
      flag: '🇲🇼',
    },
    {
      name: { en: 'Malaysia', ru: 'Малайзия', uz: 'Malayziya' },
      code: '+60',
      flag: '🇲🇾',
    },
    {
      name: { en: 'Maldives', ru: 'Мальдивы', uz: 'Maldiv orollari' },
      code: '+960',
      flag: '🇲🇻',
    },
    { name: { en: 'Mali', ru: 'Мали', uz: 'Mali' }, code: '+223', flag: '🇲🇱' },
    {
      name: { en: 'Malta', ru: 'Мальта', uz: 'Malta' },
      code: '+356',
      flag: '🇲🇹',
    },
    {
      name: {
        en: 'Marshall Islands',
        ru: 'Маршалловы острова',
        uz: 'Marshall orollari',
      },
      code: '+692',
      flag: '🇲🇭',
    },
    {
      name: { en: 'Mauritania', ru: 'Мавритания', uz: 'Mavritaniya' },
      code: '+222',
      flag: '🇲🇷',
    },
    {
      name: { en: 'Mauritius', ru: 'Маврикий', uz: 'Mavrikiy' },
      code: '+230',
      flag: '🇲🇺',
    },
    {
      name: { en: 'Mexico', ru: 'Мексика', uz: 'Meksika' },
      code: '+52',
      flag: '🇲🇽',
    },
    {
      name: { en: 'Micronesia', ru: 'Микронезия', uz: 'Mikroneziya' },
      code: '+691',
      flag: '🇫🇲',
    },
    {
      name: { en: 'Moldova', ru: 'Молдова', uz: 'Moldova' },
      code: '+373',
      flag: '🇲🇩',
    },
    {
      name: { en: 'Monaco', ru: 'Монако', uz: 'Monako' },
      code: '+377',
      flag: '🇲🇨',
    },
    {
      name: { en: 'Mongolia', ru: 'Монголия', uz: 'Mongoliya' },
      code: '+976',
      flag: '🇲🇳',
    },
    {
      name: { en: 'Montenegro', ru: 'Черногория', uz: 'Chernogoriya' },
      code: '+382',
      flag: '🇲🇪',
    },
    {
      name: { en: 'Morocco', ru: 'Марокко', uz: 'Marokash' },
      code: '+212',
      flag: '🇲🇦',
    },
    {
      name: { en: 'Mozambique', ru: 'Мозамбик', uz: 'Mozambik' },
      code: '+258',
      flag: '🇲🇿',
    },
    {
      name: { en: 'Myanmar', ru: 'Мьянма', uz: 'Myanma' },
      code: '+95',
      flag: '🇲🇲',
    },
    {
      name: { en: 'Namibia', ru: 'Намибия', uz: 'Namibiya' },
      code: '+264',
      flag: '🇳🇦',
    },
    {
      name: { en: 'Nauru', ru: 'Науру', uz: 'Nauru' },
      code: '+674',
      flag: '🇳🇷',
    },
    {
      name: { en: 'Nepal', ru: 'Непал', uz: 'Nepal' },
      code: '+977',
      flag: '🇳🇵',
    },
    {
      name: { en: 'Netherlands', ru: 'Нидерланды', uz: 'Niderlandiya' },
      code: '+31',
      flag: '🇳🇱',
    },
    {
      name: { en: 'New Zealand', ru: 'Новая Зеландия', uz: 'Yangi Zelandiya' },
      code: '+64',
      flag: '🇳🇿',
    },
    {
      name: { en: 'Nicaragua', ru: 'Никарагуа', uz: 'Nikaragua' },
      code: '+505',
      flag: '🇳🇮',
    },
    {
      name: { en: 'Niger', ru: 'Нигер', uz: 'Niger' },
      code: '+227',
      flag: '🇳🇪',
    },
    {
      name: { en: 'Nigeria', ru: 'Нигерия', uz: 'Nigeriya' },
      code: '+234',
      flag: '🇳🇬',
    },
    {
      name: {
        en: 'North Macedonia',
        ru: 'Северная Македония',
        uz: 'Shimoliy Makedoniya',
      },
      code: '+389',
      flag: '🇲🇰',
    },
    {
      name: { en: 'Norway', ru: 'Норвегия', uz: 'Norvegiya' },
      code: '+47',
      flag: '🇳🇴',
    },
    { name: { en: 'Oman', ru: 'Оман', uz: 'Ummon' }, code: '+968', flag: '🇴🇲' },
    {
      name: { en: 'Pakistan', ru: 'Пакистан', uz: 'Pokiston' },
      code: '+92',
      flag: '🇵🇰',
    },
    {
      name: { en: 'Palau', ru: 'Палау', uz: 'Palau' },
      code: '+680',
      flag: '🇵🇼',
    },
    {
      name: { en: 'Panama', ru: 'Панама', uz: 'Panama' },
      code: '+507',
      flag: '🇵🇦',
    },
    {
      name: {
        en: 'Papua New Guinea',
        ru: 'Папуа-Новая Гвинея',
        uz: 'Papua Yangi Gvineya',
      },
      code: '+675',
      flag: '🇵🇬',
    },
    {
      name: { en: 'Paraguay', ru: 'Парагвай', uz: 'Paragvay' },
      code: '+595',
      flag: '🇵🇾',
    },
    { name: { en: 'Peru', ru: 'Перу', uz: 'Peru' }, code: '+51', flag: '🇵🇪' },
    {
      name: { en: 'Philippines', ru: 'Филиппины', uz: 'Filippin' },
      code: '+63',
      flag: '🇵🇭',
    },
    {
      name: { en: 'Poland', ru: 'Польша', uz: 'Polsha' },
      code: '+48',
      flag: '🇵🇱',
    },
    {
      name: { en: 'Portugal', ru: 'Португалия', uz: 'Portugaliya' },
      code: '+351',
      flag: '🇵🇹',
    },
    {
      name: { en: 'Qatar', ru: 'Катар', uz: 'Qatar' },
      code: '+974',
      flag: '🇶🇦',
    },
    {
      name: { en: 'Romania', ru: 'Румыния', uz: 'Ruminiya' },
      code: '+40',
      flag: '🇷🇴',
    },
    {
      name: { en: 'Russia', ru: 'Россия', uz: 'Rossiya' },
      code: '+7',
      flag: '🇷🇺',
    },
    {
      name: { en: 'Rwanda', ru: 'Руанда', uz: 'Ruanda' },
      code: '+250',
      flag: '🇷🇼',
    },
    {
      name: {
        en: 'Saint Kitts and Nevis',
        ru: 'Сент-Китс и Невис',
        uz: 'Sent-Kits va Nevis',
      },
      code: '+1-869',
      flag: '🇰🇳',
    },
    {
      name: { en: 'Saint Lucia', ru: 'Сент-Люсия', uz: 'Sent-Lyusiya' },
      code: '+1-758',
      flag: '🇱🇨',
    },
    {
      name: {
        en: 'Saint Vincent and the Grenadines',
        ru: 'Сент-Винсент и Гренадины',
        uz: 'Sent-Vinsent va Grenadinlar',
      },
      code: '+1-784',
      flag: '🇻🇨',
    },
    {
      name: { en: 'Samoa', ru: 'Самоа', uz: 'Samoa' },
      code: '+685',
      flag: '🇼🇸',
    },
    {
      name: { en: 'San Marino', ru: 'Сан-Марино', uz: 'San-Marino' },
      code: '+378',
      flag: '🇸🇲',
    },
    {
      name: {
        en: 'São Tomé and Príncipe',
        ru: 'Сан-Томе и Принсипи',
        uz: 'San-Tome va Prinsipi',
      },
      code: '+239',
      flag: '🇸🇹',
    },
    {
      name: {
        en: 'Saudi Arabia',
        ru: 'Саудовская Аравия',
        uz: 'Saudiya Arabistoni',
      },
      code: '+966',
      flag: '🇸🇦',
    },
    {
      name: { en: 'Senegal', ru: 'Сенегал', uz: 'Senegal' },
      code: '+221',
      flag: '🇸🇳',
    },
    {
      name: { en: 'Serbia', ru: 'Сербия', uz: 'Serbiya' },
      code: '+381',
      flag: '🇷🇸',
    },
    {
      name: { en: 'Seychelles', ru: 'Сейшелы', uz: 'Seyshel orollari' },
      code: '+248',
      flag: '🇸🇨',
    },
    {
      name: { en: 'Sierra Leone', ru: 'Сьерра-Леоне', uz: 'Syerra-Leone' },
      code: '+232',
      flag: '🇸🇱',
    },
    {
      name: { en: 'Singapore', ru: 'Сингапур', uz: 'Singapur' },
      code: '+65',
      flag: '🇸🇬',
    },
    {
      name: { en: 'Slovakia', ru: 'Словакия', uz: 'Slovakiya' },
      code: '+421',
      flag: '🇸🇰',
    },
    {
      name: { en: 'Slovenia', ru: 'Словения', uz: 'Sloveniya' },
      code: '+386',
      flag: '🇸🇮',
    },
    {
      name: {
        en: 'Solomon Islands',
        ru: 'Соломоновы острова',
        uz: 'Solomon orollari',
      },
      code: '+677',
      flag: '🇸🇧',
    },
    {
      name: { en: 'Somalia', ru: 'Сомали', uz: 'Somali' },
      code: '+252',
      flag: '🇸🇴',
    },
    {
      name: {
        en: 'South Africa',
        ru: 'Южно-Африканская Республика',
        uz: 'Janubiy Afrika',
      },
      code: '+27',
      flag: '🇿🇦',
    },
    {
      name: { en: 'South Korea', ru: 'Южная Корея', uz: 'Janubiy Koreya' },
      code: '+82',
      flag: '🇰🇷',
    },
    {
      name: { en: 'South Sudan', ru: 'Южный Судан', uz: 'Janubiy Sudan' },
      code: '+211',
      flag: '🇸🇸',
    },
    {
      name: { en: 'Spain', ru: 'Испания', uz: 'Ispaniya' },
      code: '+34',
      flag: '🇪🇸',
    },
    {
      name: { en: 'Sri Lanka', ru: 'Шри-Ланка', uz: 'Shri-Lanka' },
      code: '+94',
      flag: '🇱🇰',
    },
    {
      name: { en: 'Sudan', ru: 'Судан', uz: 'Sudan' },
      code: '+249',
      flag: '🇸🇩',
    },
    {
      name: { en: 'Suriname', ru: 'Суринам', uz: 'Surinam' },
      code: '+597',
      flag: '🇸🇷',
    },
    {
      name: { en: 'Sweden', ru: 'Швеция', uz: 'Shvetsiya' },
      code: '+46',
      flag: '🇸🇪',
    },
    {
      name: { en: 'Switzerland', ru: 'Швейцария', uz: 'Shveytsariya' },
      code: '+41',
      flag: '🇨🇭',
    },
    {
      name: { en: 'Syria', ru: 'Сирия', uz: 'Suriya' },
      code: '+963',
      flag: '🇸🇾',
    },
    {
      name: { en: 'Taiwan', ru: 'Тайвань', uz: 'Tayvan' },
      code: '+886',
      flag: '🇹🇼',
    },
    {
      name: { en: 'Tajikistan', ru: 'Таджикистан', uz: 'Tojikiston' },
      code: '+992',
      flag: '🇹🇯',
    },
    {
      name: { en: 'Tanzania', ru: 'Танзания', uz: 'Tanzaniya' },
      code: '+255',
      flag: '🇹🇿',
    },
    {
      name: { en: 'Thailand', ru: 'Таиланд', uz: 'Tailand' },
      code: '+66',
      flag: '🇹🇭',
    },
    {
      name: { en: 'Timor-Leste', ru: 'Тимор-Лесте', uz: 'Timor-Leste' },
      code: '+670',
      flag: '🇹🇱',
    },
    { name: { en: 'Togo', ru: 'Того', uz: 'Togo' }, code: '+228', flag: '🇹🇬' },
    {
      name: { en: 'Tonga', ru: 'Тонга', uz: 'Tonga' },
      code: '+676',
      flag: '🇹🇴',
    },
    {
      name: {
        en: 'Trinidad and Tobago',
        ru: 'Тринидад и Тобаго',
        uz: 'Trinidad va Tobago',
      },
      code: '+1-868',
      flag: '🇹🇹',
    },
    {
      name: { en: 'Tunisia', ru: 'Тунис', uz: 'Tunis' },
      code: '+216',
      flag: '🇹🇳',
    },
    {
      name: { en: 'Turkey', ru: 'Турция', uz: 'Turkiya' },
      code: '+90',
      flag: '🇹🇷',
    },
    {
      name: { en: 'Turkmenistan', ru: 'Туркменистан', uz: 'Turkmaniston' },
      code: '+993',
      flag: '🇹🇲',
    },
    {
      name: { en: 'Tuvalu', ru: 'Тувалу', uz: 'Tuvalu' },
      code: '+688',
      flag: '🇹🇻',
    },
    {
      name: { en: 'Uganda', ru: 'Уганда', uz: 'Uganda' },
      code: '+256',
      flag: '🇺🇬',
    },
    {
      name: { en: 'Ukraine', ru: 'Украина', uz: 'Ukraina' },
      code: '+380',
      flag: '🇺🇦',
    },
    {
      name: {
        en: 'United Arab Emirates',
        ru: 'Объединённые Арабские Эмираты',
        uz: 'Birlashgan Arab Amirliklari',
      },
      code: '+971',
      flag: '🇦🇪',
    },
    {
      name: {
        en: 'United Kingdom',
        ru: 'Великобритания',
        uz: 'Buyuk Britaniya',
      },
      code: '+44',
      flag: '🇬🇧',
    },
    {
      name: { en: 'United States', ru: 'США', uz: 'AQSh' },
      code: '+1',
      flag: '🇺🇸',
    },
    {
      name: { en: 'Uruguay', ru: 'Уругвай', uz: 'Urugvay' },
      code: '+598',
      flag: '🇺🇾',
    },
    {
      name: { en: 'Uzbekistan', ru: 'Узбекистан', uz: 'Oʻzbekiston' },
      code: '+998',
      flag: '🇺🇿',
    },
    {
      name: { en: 'Vanuatu', ru: 'Вануату', uz: 'Vanuatu' },
      code: '+678',
      flag: '🇻🇺',
    },
    {
      name: { en: 'Vatican City', ru: 'Ватикан', uz: 'Vatikan' },
      code: '+39',
      flag: '🇻🇦',
    },
    {
      name: { en: 'Venezuela', ru: 'Венесуэла', uz: 'Venesuela' },
      code: '+58',
      flag: '🇻🇪',
    },
    {
      name: { en: 'Vietnam', ru: 'Вьетнам', uz: 'Vyetnam' },
      code: '+84',
      flag: '🇻🇳',
    },
    {
      name: { en: 'Yemen', ru: 'Йемен', uz: 'Yaman' },
      code: '+967',
      flag: '🇾🇪',
    },
    {
      name: { en: 'Zambia', ru: 'Замбия', uz: 'Zambiya' },
      code: '+260',
      flag: '🇿🇲',
    },
    {
      name: { en: 'Zimbabwe', ru: 'Зимбабве', uz: 'Zimbabve' },
      code: '+263',
      flag: '🇿🇼',
    },
  ];

  constructor(
    private swiperService: SwiperService,
    private api: ApiService,
    private loaderService: LoaderService
  ) {
    window.scrollTo(0, 0);
    this.swiperService.state$.subscribe((state) => {
      this.index = state;
    });
  }

  ngOnInit(): void {
    this.createCountryFrom10k();
  }

  ngAfterViewInit(): void {
    let index = Number(sessionStorage.getItem('index'));
    const swiperConfig: any = {
      grabCursor: true,
      centeredSlides: true,
      initialSlide: index,
      slidesPerView: 'auto',
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    };
    this.swiperService.initializeSwiper('.mySwiper-2', swiperConfig);
  }

  createCountryFrom10k() {}

  openCountryDropdown() {
    this.ngSelect.open();
  }

  validateInput(e: KeyboardEvent): void {
    const charCode = e.keyCode ? e.keyCode : e.which;

    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      this.error = true;
      e.preventDefault();
    } else {
      this.error = false;
    }
  }

  postMessage() {
    if (
      !this.name.length ||
      !this.branch.length ||
      !this.course.length ||
      !this.number.length
    ) {
      return;
    }
    this.loaderService.showLoader();

    let requestContacts = [
      {
        name: this.name,
        custom_fields_values: [
          {
            field_id: 701591,
            values: [
              {
                value: this.branch,
              },
            ],
          },
          {
            field_id: 646317,
            values: [
              {
                value: `${this.selectedCountry} ${this.number}`,
                enum_code: 'OTHER',
              },
            ],
          },
          {
            field_id: 701589,
            values: [
              {
                value: this.course,
              },
            ],
          },
        ],
      },
    ];

    this.api.createContact(requestContacts).subscribe((res) => {
      const requestLead = [
        {
          name: this.name,
          _embedded: {
            contacts: [
              {
                id: res?._embedded.contacts[0].id,
              },
            ],
          },
        },
      ];
      if (res) {
        this.api.createLead(requestLead).subscribe((res) => {
          // console.log(res);
          this.loaderService.hideLoader();
          this.show = true;
        });
      }
    });

    // this.http
    //   .get('/api/v4/contacts/custom_fields', {
    //     headers: new HttpHeaders({
    //       Authorization: `Bearer ${environment.token}`,
    //     }),
    //   })
    //   .subscribe((data) => {
    //     console.log(data);
    //   });
  }
}
