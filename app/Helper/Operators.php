<?php

namespace App\Helper;

abstract class Operators extends BasicEnum {
    const BETWEEN = 'between';
    const EQUAL = '=';
    const GREATER_THAN = '>';
    const GREATER_THAN_EQUAL = '>=';
    const INSENSITIVE_LIKE = 'ilike';
    const LESS_THAN = '<';
    const LESS_THAN_EQUAL = '<=';
    const LIKE = 'like';
    const NOT_EQUAL = '<>';
    const NOT_LIKE = 'not like';
    const NOT = '!=';
}