@component('mail::message')
# Hello {{$data['name']}}, owner {{$data['email']}}

<h2>Catch you key: <br><strong> {{$data['gift']}} </strong></h2>
This is description of giveaway:<br>
{{$data['giveDesc']}}

@component('mail::button', ['url' => 'http://giveaways.zzz.com.ua/user-panel'])
    Go to User Panel
@endcomponent

Thanks,
<h1> {{ config('app.name') }} </h1>
@endcomponent
