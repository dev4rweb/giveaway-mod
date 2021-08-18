<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class GameResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
//        return parent::toArray($request);
        return [
            'id' => $this->id,
            'name' => $this->name,
            'description' => $this->description,
            'isCompetition' => $this->isCompetition,
            'startDate' => $this->startDate,
            'endDate' => $this->endDate,
            'mainImage' => $this->mainImage,
            'secondaryImage' => $this->secondaryImage,
            'leftImage' => $this->leftImage,
            'rightImage' => $this->rightImage,
            'isFavorite' => $this->isFavorite,
            'isSponsored' => $this->isSponsored,
            'created_at' => $this->created_at,
            'users' => $this->users
        ];
    }
}
