<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class SimpleDirectoryRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $method = $this->getMethod();
        $rules = [
            'name' => ['string', 'max:250'],
            'visible' => 'digits_between:0,1',
            'external_id' => 'nullable|string|max:37'
        ];

        if($method == 'POST')
            array_push($rules['name'], 'required');

        return $rules;
    }
}
