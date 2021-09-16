<div style="position: absolute; top: 0">
    {{--    <div class="text-center margin-bottom-20" id="uLogin"
             data-ulogin="display=panel;
         theme=flat;
         fields=first_name,last_name,email,nickname,photo,country;
         providers=facebook,vkontakte,odnoklassniki,mailru;
         hidden=other;
         redirect_uri={{ urlencode('http://' . $_SERVER['HTTP_HOST']) }}/ulogin;
         mobilebuttons=0;">
        </div>--}}
    <div
        style="opacity: 0;"
        id="uLogin"
        data-ulogin="display=small;
        theme=classic;
        optional=
        first_name,
        last_name,
        email,
        nickname,
        bdate,
        sex,
        phone,
        photo,
        photo_big,
        city,
        country;
        providers=vkontakte,odnoklassniki,mailru,facebook;
        hidden=other;
        redirect_uri=http%3A%2F%2F127.0.0.1%3A8000%2Fulogin;
        mobilebuttons=0;"
    >
    </div>
    <div class="cover" style="position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;"
    >
    </div>
</div>

@section('js')
    <script src="//ulogin.ru/js/ulogin.js"></script>
@endsection
{{--redirect_uri=http%3A%2F%2Fgiveaways.zzz.com.ua%2Fulogin;--}}
