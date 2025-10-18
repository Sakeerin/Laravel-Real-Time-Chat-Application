<?php

use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Support\Facades\Broadcast;

Broadcast::channel('online', function (User $user) {
    return $user ? new UserResource($user) : null;
});

Broadcast::channel('message.user.{userId1}-{userId2}', function(User $user, int $unserId1, int $userId2){
    return $user->id === $unserId1 || $user->id === $userId2 ? $user : null;
});

Broadcast::channel('message.group.{groupId}', function(User $user, int $groupId){
    return $user->groups->contains('id', $groupId) ? $user : null;
});
