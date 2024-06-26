/*
<JS>
店名
左メニュー名
右メニュー名
左メニュー画像（ファイル名：店名_左_メニュー名）
右メニュー画像（ファイル名：店名_右_メニュー名）

<CSS>
背景画像
左ボタンカラーコード
右ボタンカラーコード

CSSのカラーコード、リンク設定

LINEログイン作成
Githubリポジトリ作成
スプレッドシート作成（GASデプロイ）
LookerStudio設定（リンク共有）

アニメーションのパターン3つほど

looker　一覧作成
*/

////////////////////////////////////////////////////////////
const shopName = "ウララ2405";
const menu_left = "ごはん";
const menu_right = "パン";

const gitUrl_left = "sauce.png";
const gitUrl_right = "soy.png";

const liffId = "2003940861-5rXMNq7b";
const GASUrl = "https://script.google.com/macros/s/AKfycbxR7XsDeOEH6EjG7DDHK_i0tvDHiaDnrjcqMZ3eT6yUmkTqyvdfZL8UZkFZwmS7EVJNww/exec";
////////////////////////////////////////////////////////////

    // liff.init({
    //   liffId: liffId;
    // }).catch((err) => {
    //   console.log(err);
    // });

    // liff.ready.then(() => {
    //   if (!liff.isLoggedIn()) {
    //     liff.login();
    //   }
    //   const idToken = liff.getDecodedIDToken();
    //   const userId = idToken.sub;
    //   const userName = idToken.name;
    //   const userPic = idToken.picture;
    //   $('form').append(`<input type="hidden" name="userId" value="${userId}">`);
    //   $('form').append(`<input type="hidden" name="userName" value="${userName}">`);
    //   $('form').append(`<input type="hidden" name="userPic" value="${userPic}">`);

    //   $('ul').append('<input type="submit" class="hide">');

    // $('.btn-items').append('<li class="inner"><label><div class="flexItem"><img class="flexItem_left btn_animate04" src="'+ gitUrl_left +'"></div><button type="submit" id="btn_id_left" class="btn-left btn_animate04" name="voteLeft" value=""></button></label></li>');
    // $('.btn-items').append('<li class="inner"><label><div class="flexItem"><img class="flexItem_left btn_animate04" src="'+ gitUrl_right +'"></div><button type="submit" id="btn_id_right" class="btn-right btn_animate04" name="voteRight" value=""></button><label></li>');

    //  });


    $('.btn-items').append('<li class="inner"><label><div class="flexItem"><img class="flexItem_left btn_animate03" src="'+ gitUrl_left +'"></div><div class="flexItem"><button id="btn_id_left" type="submit" name="voteLeft"><img class="flexItem_left btn_animate00" src="btn_left.png"></button></div></label></li>');
    $('.btn-items').append('<li class="inner"><label><div class="flexItem"><img class="flexItem_left btn_animate03" src="'+ gitUrl_right +'"></div><div class="flexItem"><button id="btn_id_right" type="submit" name="voteRight"><img class="flexItem_left btn_animate00" src="btn_right.png"></button></div></label></li>');

    // document.getElementById("btn_id_left").innerHTML = menu_left + "に<br>投票する";
    // document.getElementById("btn_id_right").innerHTML = menu_right + "に<br>投票する";

    const click_id_left = "btn_id_left";
    const click_id_right = "btn_id_right";


    $('form').submit(function (event) {
      event.preventDefault();

      const click_id = event.originalEvent.submitter.id;//⓵
      let voteText = "";

      if (click_id === click_id_left) {
        console.log('ok');
        voteText = menu_left;
      } else if (click_id === click_id_right) {
        console.log('cancel');
        voteText = menu_right;
      }

      // alert(voteText + "に投票しますか？");
      let data = $('form').serializeArray();
      data.push({ name: 'menu', value: voteText });
      data.push({ name: 'shop', value: shopName });

      // GASへ送信
      $.post(GASUrl, data);

      // alert("投票しました！");
      Swal.fire({
        title: "投票完了！",
        text: voteText + "に投票しました。",
        icon: "success"
      });

      // 投票したら、LINEのメッセージを送信する


      // liff.closeWindow();
    });
