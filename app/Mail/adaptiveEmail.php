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

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($sendTo)
    {
        $this->sendTo = $sendTo;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->markdown('aEmail')
            ->to($this->sendTo);
    }
}
