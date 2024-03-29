<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class adaptiveEmail extends Mailable
{
    use Queueable, SerializesModels;
    protected $sendTo;
    protected $data;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($sendTo, $data = 'data')
    {
        $this->sendTo = $sendTo;
        $this->data = $data;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->markdown('keyEmail', [
            'data' => $this->data,
            ])
            ->to($this->sendTo);
    }
}
