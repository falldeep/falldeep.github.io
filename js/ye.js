// 动态心跳
$(document).ready(function(e){
    $('.copyright').html('©2021 <i class="fa-fw fas fa-heartbeat card-announcement-animation cc_pointer"></i> By 花猪');
})

$(document).ready(function(e){
    show_date_time();
})

//本站运行时间
function show_date_time(){
$('.framework-info').html('本站已运行<span id="span_dt_dt" style="color: #fff;"></span>');
window.setTimeout("show_date_time()", 1000);
BirthDay=new Date("1/20/2021 0:0:0");
today=new Date();
timeold=(today.getTime()-BirthDay.getTime());
sectimeold=timeold/1000
secondsold=Math.floor(sectimeold);
msPerDay=24*60*60*1000
e_daysold=timeold/msPerDay
daysold=Math.floor(e_daysold);
e_hrsold=(e_daysold-daysold)*24;
hrsold=Math.floor(e_hrsold);
e_minsold=(e_hrsold-hrsold)*60;
minsold=Math.floor((e_hrsold-hrsold)*60);
seconds=Math.floor((e_minsold-minsold)*60);
span_dt_dt.innerHTML='<font style=color:#afb4db>'+daysold+'</font> 天 <font style=color:#f391a9>'+hrsold+'</font> 时 <font style=color:#fdb933>'+minsold+'</font> 分 <font style=color:#a3cf62>'+seconds+'</font> 秒';
}

{%- if theme.footer.beian.enable %}
  <div class="beian">
    {{- next_url('http://www.beian.miit.gov.cn', theme.footer.beian.icp + ' ') }}
    {%- if theme.footer.beian.gongan_icon_url %}
      <img src="{{ theme.footer.beian.gongan_icon_url }}" style="display: inline-block;">
    {%- endif %}
    {%- if theme.footer.beian.gongan_id and theme.footer.beian.gongan_num %}
      {{- next_url('http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=' + theme.footer.beian.gongan_id, theme.footer.beian.gongan_num + ' ') }}
    {%- endif %}
  </div>
{%- endif %}

<div class="copyright">
  {% set copyright_year = date(null, 'YYYY') %}
  &copy; {% if theme.footer.since and theme.footer.since != copyright_year %}{{ theme.footer.since }} – {% endif %}
  <span itemprop="copyrightYear">{{ copyright_year }}</span>
  <span class="with-love">
    <font color="red"><i class="fa fa-heartbeat" aria-hidden="true"></i></font>
  </span>
  <span class="author" itemprop="copyrightHolder">{{ theme.footer.copyright or author }}</span>

  {%- if config.symbols_count_time.total_symbols %}
    <span class="post-meta-divider">|</span>
    <span class="post-meta-item-icon">
      <i class="fa fa-area-chart"></i>
    </span>
    {%- if theme.symbols_count_time.item_text_total %}
      <span class="post-meta-item-text">{{ __('symbols_count_time.count_total') + __('symbol.colon') }}</span>
    {%- endif %}
    <span title="{{ __('symbols_count_time.count_total') }}">{{ symbolsCountTotal(site) }}</span>
  {%- endif %}

  {%- if config.symbols_count_time.total_time %}
    <span class="post-meta-divider">|</span>
    <span class="post-meta-item-icon">
      <i class="fa fa-coffee"></i>
    </span>
    {%- if theme.symbols_count_time.item_text_total %}
      <span class="post-meta-item-text">{{ __('symbols_count_time.time_total') }} &asymp;</span>
    {%- endif %}
    <span title="{{ __('symbols_count_time.time_total') }}">{{ symbolsTimeTotal(site, config.symbols_count_time.awl, config.symbols_count_time.wpm, __('symbols_count_time.time_minutes')) }}</span>
  {%- endif %}
</div>
<!--添加运行时间-->
<span id="sitetime"></span>
<script language=javascript>
	function siteTime(){
		window.setTimeout("siteTime()", 1000);
		var seconds = 1000;
		var minutes = seconds * 60;
		var hours = minutes * 60;
		var days = hours * 24;
		var years = days * 365;
		var today = new Date();
		var todayYear = today.getFullYear();
		var todayMonth = today.getMonth()+1;
		var todayDate = today.getDate();
		var todayHour = today.getHours();
		var todayMinute = today.getMinutes();
		var todaySecond = today.getSeconds();
		/* 
      Date.UTC() -- 返回date对象距世界标准时间(UTC)1970年1月1日午夜之间的毫秒数(时间戳)
      year - 作为date对象的年份，为4位年份值
      month - 0-11之间的整数，做为date对象的月份
      day - 1-31之间的整数，做为date对象的天数
      hours - 0(午夜24点)-23之间的整数，做为date对象的小时数
      minutes - 0-59之间的整数，做为date对象的分钟数
      seconds - 0-59之间的整数，做为date对象的秒数
      microseconds - 0-999之间的整数，做为date对象的毫秒数
     */
		var t1 = Date.UTC(2020,03,14,18,12,20); //北京时间2018-2-13 00:00:00
		var t2 = Date.UTC(todayYear,todayMonth,todayDate,todayHour,todayMinute,todaySecond);
		var diff = t2-t1;
		var diffYears = Math.floor(diff/years);
		var diffDays = Math.floor((diff/days)-diffYears*365);
		var diffHours = Math.floor((diff-(diffYears*365+diffDays)*days)/hours);
		var diffMinutes = Math.floor((diff-(diffYears*365+diffDays)*days-diffHours*hours)/minutes);
		var diffSeconds = Math.floor((diff-(diffYears*365+diffDays)*days-diffHours*hours-diffMinutes*minutes)/seconds);
		document.getElementById("sitetime").innerHTML=" 已运行"+/*diffYears+" 年 "+*/diffDays+" 天 "+diffHours+" 小时 "+diffMinutes+" 分钟 "+diffSeconds+" 秒";
	}
	siteTime();
</script>
<!--// 添加运行时间-->

<!-- 新增访客统计代码 -->
<div class="busuanzi-count">
    <script async="" src="https://dn-lbstatics.qbox.me/busuanzi/2.3/busuanzi.pure.mini.js"></script>
    <span class="site-uv">
      <i class="fa fa-user"></i>
      访问量 <span class="busuanzi-value" id="busuanzi_value_site_uv"></span> 次
      <span class="post-meta-divider">|</span>
    </span>
    <div class="powered-by"></div>
    <span class="site-uv">
      <i class="fa fa-eye"></i>
      总访客 <span class="busuanzi-value" id="busuanzi_value_site_pv"></span> 人
    </span>
    <!--
    <span class="site-pv">
      <i class="fa fa-pencil"></i>
      本站博客共 <span class="post-count">{{ totalcount(site) }}</span> 字
    </span>
    -->
</div>
<!-- 新增访客统计代码 END-->

{%- if theme.footer.powered.enable %}
  <div class="powered-by">
    {{- __('footer.powered', next_url('https://hexo.io', 'Hexo', {class: 'theme-link'})) }}
    {%- if theme.footer.powered.version %} v{{ hexo_version }}{%- endif %}
  </div>
{%- endif %}

{%- if theme.footer.powered.enable and theme.footer.theme.enable %}
  <span class="post-meta-divider">|</span>
{%- endif %}

{%- if theme.footer.theme.enable %}
  <div class="theme-info">
    {%- set next_site = 'https://theme-next.org' %}
    {%- if theme.scheme !== 'Gemini' %}
      {%- set next_site = 'https://' + theme.scheme | lower + '.theme-next.org' %}
    {%- endif %}
    {{- __('footer.theme') }} – {{ next_url(next_site, 'NexT.' + theme.scheme, {class: 'theme-link'}) }}
    {%- if theme.footer.theme.version %} v{{ next_version }}{%- endif %}
  </div>
{%- endif %}

{%- if theme.add_this_id %}
  <div class="addthis_inline_share_toolbox">
    <script src="//s7.addthis.com/js/300/addthis_widget.js#pubid={{ theme.add_this_id }}" async="async"></script>
  </div>
{%- endif %}

{{- next_inject('footer') }}

