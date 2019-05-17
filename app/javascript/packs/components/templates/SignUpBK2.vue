<template>
  <div class="sign-up-continer">
    <div class="sign-up-pageHeader">
      <h1>新規会員登録</h1>
    </div>
    <div class="ec-off1Grid">
      <div class="ec-off1Grid__cell">
        <div class="ec-borderedDefs">
          <dl>
            <dt>
              <label class="ec-label required">お名前</label>
              <span class="form-required">必須</span>
            </dt>
            <dd>
              <div class="ec-halfInput">
                <input type="text" id="last-name" required="required" placeholder="姓">
                <input type="text" id="first-name" required="required" placeholder="名">
              </div>
            </dd>
          </dl>
          <dl>
            <dt>
              <label class="ec-label required">お名前(カナ)</label>
              <span class="form-required">必須</span>
            </dt>
            <dd>
              <div class="ec-halfInput">
                <input type="text" id="last-kana" required="required" placeholder="セイ">
                <input type="text" id="first-kana" required="required" placeholder="メイ">
              </div>
            </dd>
          </dl>
          <dl>
            <dt>
              <label class="ec-label" for="entry_company_name">会社名</label>
            </dt>
            <dd>
              <div class="ec-halfInput">
                <input type="text" id="entry_company_name" name="entry[company_name]">
              </div>
            </dd>
          </dl>
          <dl>
            <dt>
              <label class="ec-label required">住所</label>
              <span class="ec-required">必須</span>
            </dt>
            <dd>
              <div class="ec-zipInput">
                <span>〒</span>
                <input
                  type="text"
                  id="entry_postal_code"
                  name="entry[postal_code]"
                  required="required"
                  class="p-postal-code"
                  placeholder="例：5300001"
                >
                <div class="ec-zipInputHelp">
                  <div class="ec-zipInputHelp__icon">
                    <div class="ec-icon">
                      <img src="/html/template/default/assets/icon/question-white.svg" alt>
                    </div>
                  </div>
                  <a href="https://www.post.japanpost.jp/zipcode/" target="_blank">
                    <span>郵便番号検索</span>
                  </a>
                </div>
              </div>

              <div class="ec-select">
                <select
                  id="entry_address_pref"
                  name="entry[address][pref]"
                  required="required"
                  class="p-region-id"
                >
                  <option value selected="selected">都道府県を選択</option>
                  <option value="1">北海道</option>
                  <option value="2">青森県</option>
                  <option value="3">岩手県</option>
                  <option value="4">宮城県</option>
                  <option value="5">秋田県</option>
                  <option value="6">山形県</option>
                  <option value="7">福島県</option>
                  <option value="8">茨城県</option>
                  <option value="9">栃木県</option>
                  <option value="10">群馬県</option>
                  <option value="11">埼玉県</option>
                  <option value="12">千葉県</option>
                  <option value="13">東京都</option>
                  <option value="14">神奈川県</option>
                  <option value="15">新潟県</option>
                  <option value="16">富山県</option>
                  <option value="17">石川県</option>
                  <option value="18">福井県</option>
                  <option value="19">山梨県</option>
                  <option value="20">長野県</option>
                  <option value="21">岐阜県</option>
                  <option value="22">静岡県</option>
                  <option value="23">愛知県</option>
                  <option value="24">三重県</option>
                  <option value="25">滋賀県</option>
                  <option value="26">京都府</option>
                  <option value="27">大阪府</option>
                  <option value="28">兵庫県</option>
                  <option value="29">奈良県</option>
                  <option value="30">和歌山県</option>
                  <option value="31">鳥取県</option>
                  <option value="32">島根県</option>
                  <option value="33">岡山県</option>
                  <option value="34">広島県</option>
                  <option value="35">山口県</option>
                  <option value="36">徳島県</option>
                  <option value="37">香川県</option>
                  <option value="38">愛媛県</option>
                  <option value="39">高知県</option>
                  <option value="40">福岡県</option>
                  <option value="41">佐賀県</option>
                  <option value="42">長崎県</option>
                  <option value="43">熊本県</option>
                  <option value="44">大分県</option>
                  <option value="45">宮崎県</option>
                  <option value="46">鹿児島県</option>
                  <option value="47">沖縄県</option>
                </select>
              </div>
              <div class="ec-input">
                <input
                  type="text"
                  id="entry_address_addr01"
                  name="entry[address][addr01]"
                  required="required"
                  class="p-locality p-street-address"
                  placeholder="市区町村名(例：大阪市北区)"
                >
              </div>
              <div class="ec-input">
                <input
                  type="text"
                  id="entry_address_addr02"
                  name="entry[address][addr02]"
                  required="required"
                  class="p-extended-address"
                  placeholder="番地・ビル名(例：西梅田1丁目6-8)"
                >
              </div>
            </dd>
          </dl>
          <dl>
            <dt>
              <label class="ec-label required" for="entry_phone_number">電話番号</label>
              <span class="ec-required">必須</span>
            </dt>
            <dd>
              <div class="ec-telInput">
                <input
                  type="text"
                  id="entry_phone_number"
                  name="entry[phone_number]"
                  required="required"
                  placeholder="例：11122223333"
                >
              </div>
            </dd>
          </dl>
          <dl>
            <dt>
              <label class="ec-label required">メールアドレス</label>
              <span class="ec-required">必須</span>
            </dt>
            <dd>
              <div class="ec-input">
                <input
                  type="text"
                  id="entry_email_first"
                  name="entry[email][first]"
                  required="required"
                  placeholder="例：ec-cube@example.com"
                >
              </div>
              <div class="ec-input">
                <input
                  type="text"
                  id="entry_email_second"
                  name="entry[email][second]"
                  required="required"
                  placeholder="確認のためもう一度入力してください"
                >
              </div>
            </dd>
          </dl>
          <dl>
            <dt>
              <label class="ec-label required">パスワード</label>
              <span class="ec-required">必須</span>
            </dt>
            <dd>
              <div class="ec-input">
                <input
                  type="password"
                  id="entry_password_first"
                  name="entry[password][first]"
                  required="required"
                  placeholder="半角英数記号8〜32文字"
                >
              </div>
              <div class="ec-input">
                <input
                  type="password"
                  id="entry_password_second"
                  name="entry[password][second]"
                  required="required"
                  placeholder="確認のためもう一度入力してください"
                >
              </div>
            </dd>
          </dl>
          <dl>
            <dt>
              <label class="ec-label">生年月日</label>
            </dt>
            <dd>
              <div class="ec-birth">
                <select id="entry_birth_year" name="entry[birth][year]">
                  <option value>----</option>
                  <option value="2019">2019</option>
                  <option value="2018">2018</option>
                  <option value="2017">2017</option>
                  <option value="2016">2016</option>
                  <option value="2015">2015</option>
                  <option value="2014">2014</option>
                  <option value="2013">2013</option>
                  <option value="2012">2012</option>
                  <option value="2011">2011</option>
                  <option value="2010">2010</option>
                  <option value="2009">2009</option>
                  <option value="2008">2008</option>
                  <option value="2007">2007</option>
                  <option value="2006">2006</option>
                  <option value="2005">2005</option>
                  <option value="2004">2004</option>
                  <option value="2003">2003</option>
                  <option value="2002">2002</option>
                  <option value="2001">2001</option>
                  <option value="2000">2000</option>
                  <option value="1999">1999</option>
                  <option value="1998">1998</option>
                  <option value="1997">1997</option>
                  <option value="1996">1996</option>
                  <option value="1995">1995</option>
                  <option value="1994">1994</option>
                  <option value="1993">1993</option>
                  <option value="1992">1992</option>
                  <option value="1991">1991</option>
                  <option value="1990">1990</option>
                  <option value="1989">1989</option>
                  <option value="1988">1988</option>
                  <option value="1987">1987</option>
                  <option value="1986">1986</option>
                  <option value="1985">1985</option>
                  <option value="1984">1984</option>
                  <option value="1983">1983</option>
                  <option value="1982">1982</option>
                  <option value="1981">1981</option>
                  <option value="1980">1980</option>
                  <option value="1979">1979</option>
                  <option value="1978">1978</option>
                  <option value="1977">1977</option>
                  <option value="1976">1976</option>
                  <option value="1975">1975</option>
                  <option value="1974">1974</option>
                  <option value="1973">1973</option>
                  <option value="1972">1972</option>
                  <option value="1971">1971</option>
                  <option value="1970">1970</option>
                  <option value="1969">1969</option>
                  <option value="1968">1968</option>
                  <option value="1967">1967</option>
                  <option value="1966">1966</option>
                  <option value="1965">1965</option>
                  <option value="1964">1964</option>
                  <option value="1963">1963</option>
                  <option value="1962">1962</option>
                  <option value="1961">1961</option>
                  <option value="1960">1960</option>
                  <option value="1959">1959</option>
                  <option value="1958">1958</option>
                  <option value="1957">1957</option>
                  <option value="1956">1956</option>
                  <option value="1955">1955</option>
                  <option value="1954">1954</option>
                  <option value="1953">1953</option>
                  <option value="1952">1952</option>
                  <option value="1951">1951</option>
                  <option value="1950">1950</option>
                  <option value="1949">1949</option>
                  <option value="1948">1948</option>
                  <option value="1947">1947</option>
                  <option value="1946">1946</option>
                  <option value="1945">1945</option>
                  <option value="1944">1944</option>
                  <option value="1943">1943</option>
                  <option value="1942">1942</option>
                  <option value="1941">1941</option>
                  <option value="1940">1940</option>
                  <option value="1939">1939</option>
                  <option value="1938">1938</option>
                  <option value="1937">1937</option>
                  <option value="1936">1936</option>
                  <option value="1935">1935</option>
                  <option value="1934">1934</option>
                  <option value="1933">1933</option>
                  <option value="1932">1932</option>
                  <option value="1931">1931</option>
                  <option value="1930">1930</option>
                  <option value="1929">1929</option>
                  <option value="1928">1928</option>
                  <option value="1927">1927</option>
                  <option value="1926">1926</option>
                  <option value="1925">1925</option>
                  <option value="1924">1924</option>
                  <option value="1923">1923</option>
                  <option value="1922">1922</option>
                  <option value="1921">1921</option>
                  <option value="1920">1920</option>
                  <option value="1919">1919</option>
                  <option value="1918">1918</option>
                  <option value="1917">1917</option>
                  <option value="1916">1916</option>
                  <option value="1915">1915</option>
                  <option value="1914">1914</option>
                  <option value="1913">1913</option>
                  <option value="1912">1912</option>
                  <option value="1911">1911</option>
                  <option value="1910">1910</option>
                  <option value="1909">1909</option>
                </select>
                <span>/</span>
                <select id="entry_birth_month" name="entry[birth][month]">
                  <option value>--</option>
                  <option value="1">01</option>
                  <option value="2">02</option>
                  <option value="3">03</option>
                  <option value="4">04</option>
                  <option value="5">05</option>
                  <option value="6">06</option>
                  <option value="7">07</option>
                  <option value="8">08</option>
                  <option value="9">09</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                </select>
                <span>/</span>
                <select id="entry_birth_day" name="entry[birth][day]">
                  <option value>--</option>
                  <option value="1">01</option>
                  <option value="2">02</option>
                  <option value="3">03</option>
                  <option value="4">04</option>
                  <option value="5">05</option>
                  <option value="6">06</option>
                  <option value="7">07</option>
                  <option value="8">08</option>
                  <option value="9">09</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="13">13</option>
                  <option value="14">14</option>
                  <option value="15">15</option>
                  <option value="16">16</option>
                  <option value="17">17</option>
                  <option value="18">18</option>
                  <option value="19">19</option>
                  <option value="20">20</option>
                  <option value="21">21</option>
                  <option value="22">22</option>
                  <option value="23">23</option>
                  <option value="24">24</option>
                  <option value="25">25</option>
                  <option value="26">26</option>
                  <option value="27">27</option>
                  <option value="28">28</option>
                  <option value="29">29</option>
                  <option value="30">30</option>
                  <option value="31">31</option>
                </select>
              </div>
            </dd>
          </dl>
          <dl>
            <dt>
              <label class="ec-label">性別</label>
            </dt>
            <dd>
              <div class="ec-radio">
                <div id="entry_sex">
                  <input type="radio" id="entry_sex_1" name="entry[sex]" value="1">
                  <label for="entry_sex_1">
                    <span>男性</span>
                  </label>
                  <input type="radio" id="entry_sex_2" name="entry[sex]" value="2">
                  <label for="entry_sex_2">
                    <span>女性</span>
                  </label>
                </div>
              </div>
            </dd>
          </dl>
          <dl>
            <dt>
              <label class="ec-label" for="entry_job">職業</label>
            </dt>
            <dd>
              <div class="ec-select">
                <select id="entry_job" name="entry[job]">
                  <option value>選択してください</option>
                  <option value="1">公務員</option>
                  <option value="2">コンサルタント</option>
                  <option value="3">コンピューター関連技術職</option>
                  <option value="4">コンピューター関連以外の技術職</option>
                  <option value="5">金融関係</option>
                  <option value="6">医師</option>
                  <option value="7">弁護士</option>
                  <option value="8">総務・人事・事務</option>
                  <option value="9">営業・販売</option>
                  <option value="10">研究・開発</option>
                  <option value="11">広報・宣伝</option>
                  <option value="12">企画・マーケティング</option>
                  <option value="13">デザイン関係</option>
                  <option value="14">会社経営・役員</option>
                  <option value="15">出版・マスコミ関係</option>
                  <option value="16">学生・フリーター</option>
                  <option value="17">主婦</option>
                  <option value="18">その他</option>
                </select>
              </div>
            </dd>
          </dl>
        </div>
        <div class="ec-registerRole__actions">
          <div class="ec-off4Grid">
            <div class="ec-off4Grid__cell">
              <div class="ec-checkbox">
                <label>
                  <input
                    type="checkbox"
                    id="entry_user_policy_check"
                    name="entry[user_policy_check]"
                    required="required"
                    value="1"
                  >

                  <a
                    class="ec-link"
                    href="https://demo4.ec-cube.net/help/agreement"
                    target="_blank"
                  >利用規約</a>に同意してお進みください
                </label>
              </div>
              <button class="ec-blockBtn--action" type="submit" name="mode" value="confirm">同意する</button>
              <a class="ec-blockBtn--cancel" href="https://demo4.ec-cube.net/">同意しない</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>


