@component('mail::message')
    # Hello {{$data['name']}}, owner {{$data['email']}}

    <h2>Catch you key: {{$data['gift']}}</h2>
    This is description of giveaway:
    {{$data['giveDesc']}}
    The body of your message.

    @component('mail::button', ['url' => 'http://giveaways.zzz.com.ua/'])
        Go to User Panel
    @endcomponent

    Thanks,
    {{ config('app.name') }}
@endcomponent
