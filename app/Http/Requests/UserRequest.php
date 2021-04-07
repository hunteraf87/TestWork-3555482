<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserRequest extends FormRequest
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
            'name' => ['string', 'max:190'],
            'email' => 'email:rfc',
        ];

        if($method == 'POST')
            $rules['password'] = 'required|min:6';
        elseif($method == 'PUT')
            $rules['password'] = 'nullable|string|min:6';

        return $rules;
    }
}
